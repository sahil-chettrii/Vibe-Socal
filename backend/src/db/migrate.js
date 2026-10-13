import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { pool } from '../config/db.js'

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), 'migrations')

try {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS schema_migrations (
      name       TEXT PRIMARY KEY,
      applied_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `)

  const done = new Set(
    (await pool.query('SELECT name FROM schema_migrations')).rows.map((r) => r.name)
  )
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.sql')).sort()

  for (const file of files) {
    if (done.has(file)) continue

    const client = await pool.connect()
    try {
      await client.query('BEGIN')
      await client.query(fs.readFileSync(path.join(dir, file), 'utf8'))
      await client.query('INSERT INTO schema_migrations (name) VALUES ($1)', [file])
      await client.query('COMMIT')
      console.log(`Applied ${file}`)
    } catch (err) {
      await client.query('ROLLBACK')
      throw new Error(`${file}: ${err.message}`)
    } finally {
      client.release()
    }
  }

  console.log('Database is up to date')
} catch (err) {
  console.error('Migration failed:', err.message)
  process.exitCode = 1
} finally {
  await pool.end()
}
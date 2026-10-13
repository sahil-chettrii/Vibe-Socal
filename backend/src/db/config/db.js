import pg from 'pg'
import { env } from './env.js'

export const pool = new pg.Pool({
  connectionString: env.databaseUrl,
  ssl: env.dbSsl ? { rejectUnauthorized: false } : false,
})

export const query = (text, params) => pool.query(text, params)
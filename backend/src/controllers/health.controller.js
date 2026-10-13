export const getHealth = (req, res) => {
  res.json({ status: 'ok', app: 'Vibe Social API' })
}
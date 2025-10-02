import 'dotenv/config'
import http from 'http'
import app from './app.js'
import { connectToDatabase } from './config/db.js'
import { APP_CONSTANTS } from './config/constants.js'

const PORT = process.env.PORT || 4000

async function start() {
  await connectToDatabase()
  const server = http.createServer(app)
  server.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`${APP_CONSTANTS.companyName} API listening on port ${PORT}`)
  })
}

start().catch((err) => {
  // eslint-disable-next-line no-console
  console.error('Failed to start server', err)
  process.exit(1)
})



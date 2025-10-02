import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import pino from 'pino'
import pinoHttp from 'pino-http'
import routes from './routes/index.js'
import { APP_CONSTANTS } from './config/constants.js'

const app = express()

const logger = pino({ level: process.env.NODE_ENV === 'production' ? 'info' : 'debug' })
app.use(pinoHttp({ logger }))
app.use(helmet())
app.use(cors({ origin: true, credentials: true }))
app.use(express.json({ limit: '1mb' }))

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: APP_CONSTANTS.companyName })
})

app.use('/api', routes)

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Not Found' })
})

// Error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  req.log?.error({ err }, 'Unhandled error')
  const status = err.statusCode || 500
  res.status(status).json({ success: false, message: err.message || 'Internal Server Error' })
})

export default app



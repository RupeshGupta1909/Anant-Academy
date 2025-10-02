import express from 'express'
import { login, verifyToken } from '../../controllers/auth.controller.js'
import { authenticateToken } from '../../middleware/auth.middleware.js'

const router = express.Router()

// Public routes
router.post('/login', login)
router.get('/verify', authenticateToken, verifyToken)

export default router

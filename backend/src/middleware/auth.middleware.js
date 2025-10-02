import jwt from 'jsonwebtoken'
import User from '../models/User.model.js'
import { JWT_SECRET } from '../config/constants.js'

export async function authenticateToken(req, res, next) {
  try {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1] // Bearer TOKEN

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Access token required'
      })
    }

    const decoded = jwt.verify(token, JWT_SECRET)
    
    // Verify user still exists and is active
    const user = await User.findById(decoded.userId).select('-password')
    if (!user || !user.isActive) {
      return res.status(401).json({
        success: false,
        message: 'Invalid token'
      })
    }

    req.user = decoded
    next()
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({
        success: false,
        message: 'Invalid token'
      })
    }
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({
        success: false,
        message: 'Token expired'
      })
    }
    
    console.error('Auth middleware error:', error)
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    })
  }
}

export function requireAdmin(req, res, next) {
  if (req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Admin access required'
    })
  }
  next()
}

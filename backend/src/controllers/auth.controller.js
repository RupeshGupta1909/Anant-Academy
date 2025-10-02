import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/User.model.js'
import { validateLogin } from '../validators/auth.validator.js'
import { formatAuthResponse } from '../presenters/auth.presenter.js'
import { JWT_SECRET } from '../config/constants.js'

export async function login(req, res) {
  try {
    // Validate input
    const { error, value } = validateLogin(req.body)
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message
      })
    }

    const { email, password } = value

    // Find user
    const user = await User.findOne({ email, isActive: true })
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      })
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      })
    }

    // Update last login
    await User.findByIdAndUpdate(user._id, { lastLogin: new Date() })

    // Generate JWT token
    const token = jwt.sign(
      { 
        userId: user._id, 
        email: user.email, 
        role: user.role 
      },
      JWT_SECRET,
      { expiresIn: '24h' }
    )

    // Return success response
    res.json({
      success: true,
      message: 'Login successful',
      data: formatAuthResponse(user, token)
    })

  } catch (error) {
    console.error('Login error:', error)
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    })
  }
}

export async function verifyToken(req, res) {
  try {
    const user = await User.findById(req.user.userId).select('-password')
    if (!user || !user.isActive) {
      return res.status(401).json({
        success: false,
        message: 'Invalid token'
      })
    }

    res.json({
      success: true,
      data: {
        id: user._id,
        email: user.email,
        role: user.role,
        lastLogin: user.lastLogin
      }
    })
  } catch (error) {
    console.error('Token verification error:', error)
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    })
  }
}

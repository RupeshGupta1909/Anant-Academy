import bcrypt from 'bcryptjs'
import User from '../models/User.model.js'
import { validateChangePassword, validateCreateUser } from '../validators/userManagement.validator.js'

export async function changePassword(req, res) {
  try {
    const { error, value } = validateChangePassword(req.body)
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message
      })
    }

    const { currentPassword, newPassword } = value
    const userId = req.user.userId

    // Get current user
    const user = await User.findById(userId)
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      })
    }

    // Verify current password
    const isCurrentPasswordValid = await bcrypt.compare(currentPassword, user.password)
    if (!isCurrentPasswordValid) {
      return res.status(400).json({
        success: false,
        message: 'Current password is incorrect'
      })
    }

    // Hash new password
    const hashedNewPassword = await bcrypt.hash(newPassword, 10)

    // Update password
    await User.findByIdAndUpdate(userId, {
      password: hashedNewPassword,
      updatedAt: new Date()
    })

    res.json({
      success: true,
      message: 'Password changed successfully'
    })

  } catch (error) {
    console.error('Change password error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to change password'
    })
  }
}

export async function createUser(req, res) {
  try {
    const { error, value } = validateCreateUser(req.body)
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message
      })
    }

    const { email, password, role = 'admin' } = value

    // Check if user already exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User with this email already exists'
      })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create new user
    const newUser = await User.create({
      email,
      password: hashedPassword,
      role,
      isActive: true
    })

    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: {
        id: newUser._id,
        email: newUser.email,
        role: newUser.role,
        isActive: newUser.isActive,
        createdAt: newUser.createdAt
      }
    })

  } catch (error) {
    console.error('Create user error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to create user'
    })
  }
}

export async function getUsers(req, res) {
  try {
    const users = await User.find({}, '-password')
      .sort({ createdAt: -1 })
      .lean()

    res.json({
      success: true,
      data: users
    })

  } catch (error) {
    console.error('Get users error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to fetch users'
    })
  }
}

export async function toggleUserStatus(req, res) {
  try {
    const { id } = req.params
    const { isActive } = req.body

    const user = await User.findByIdAndUpdate(
      id,
      { isActive, updatedAt: new Date() },
      { new: true }
    ).select('-password')

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      })
    }

    res.json({
      success: true,
      message: `User ${isActive ? 'activated' : 'deactivated'} successfully`,
      data: user
    })

  } catch (error) {
    console.error('Toggle user status error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to update user status'
    })
  }
}

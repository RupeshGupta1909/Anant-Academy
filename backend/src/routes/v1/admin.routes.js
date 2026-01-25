import express from 'express'
import { 
  getDemoRequests, 
  getDemoRequestById, 
  updateDemoRequestStatus,
  getDashboardStats 
} from '../../controllers/admin.controller.js'
import {
  changePassword,
  createUser,
  getUsers,
  toggleUserStatus
} from '../../controllers/userManagement.controller.js'
import {
  getAllTutorApplicationsController,
  updateTutorApplicationStatusController
} from '../../controllers/tutorApplication.controller.js'
import { authenticateToken, requireAdmin } from '../../middleware/auth.middleware.js'

const router = express.Router()

// All admin routes require authentication and admin role
router.use(authenticateToken, requireAdmin)

// Dashboard stats
router.get('/dashboard/stats', getDashboardStats)

// Demo requests management
router.get('/demo-requests', getDemoRequests)
router.get('/demo-requests/:id', getDemoRequestById)
router.patch('/demo-requests/:id/status', updateDemoRequestStatus)

// User management
router.get('/users', getUsers)
router.post('/users', createUser)
router.patch('/users/:id/status', toggleUserStatus)
router.patch('/change-password', changePassword)

// Tutor applications management
router.get('/tutor-applications', getAllTutorApplicationsController)
router.patch('/tutor-applications/:id/status', updateTutorApplicationStatusController)

export default router

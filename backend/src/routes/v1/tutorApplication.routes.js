import { Router } from 'express'
import { createTutorApplicationController } from '../../controllers/tutorApplication.controller.js'

const router = Router()

router.post('/tutor-applications', createTutorApplicationController)

export default router

import { Router } from 'express'
import demoRequestRoutes from './v1/demoRequest.routes.js'
import authRoutes from './v1/auth.routes.js'
import adminRoutes from './v1/admin.routes.js'
import tutorApplicationRoutes from './v1/tutorApplication.routes.js'

const router = Router()

router.use('/v1', demoRequestRoutes)
router.use('/v1/auth', authRoutes)
router.use('/v1/admin', adminRoutes)
router.use('/v1', tutorApplicationRoutes)

export default router



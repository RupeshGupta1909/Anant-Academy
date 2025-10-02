import { Router } from 'express'
import { createDemoRequestController } from '../../controllers/demoRequest.controller.js'

const router = Router()

router.post('/demo-requests', createDemoRequestController)

export default router



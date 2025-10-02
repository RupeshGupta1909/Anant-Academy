import { validateCreateDemoRequest } from '../validators/demoRequest.validator.js'
import { createDemoRequest } from '../services/demoRequest.service.js'
import { demoRequestPresenter } from '../presenters/demoRequest.presenter.js'

export async function createDemoRequestController(req, res, next) {
  try {
    const { value, error } = validateCreateDemoRequest(req.body)
    if (error) {
      const err = new Error(error.message)
      err.statusCode = 400
      throw err
    }
    const result = await createDemoRequest(value)
    const responseBody = demoRequestPresenter.success(result)
    res.status(201).json(responseBody)
  } catch (err) {
    next(err)
  }
}



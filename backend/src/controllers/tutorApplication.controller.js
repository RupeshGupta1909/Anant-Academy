import { validateCreateTutorApplication } from '../validators/tutorApplication.validator.js'
import { createTutorApplication, getAllTutorApplications, updateTutorApplicationStatus } from '../services/tutorApplication.service.js'
import { tutorApplicationPresenter, formatTutorApplicationList } from '../presenters/tutorApplication.presenter.js'

export async function createTutorApplicationController(req, res, next) {
  try {
    const { value, error } = validateCreateTutorApplication(req.body)
    if (error) {
      const err = new Error(error.message)
      err.statusCode = 400
      throw err
    }
    const result = await createTutorApplication(value)
    const responseBody = tutorApplicationPresenter.success(result)
    res.status(201).json(responseBody)
  } catch (err) {
    next(err)
  }
}

export async function getAllTutorApplicationsController(req, res, next) {
  try {
    const applications = await getAllTutorApplications()
    const formatted = applications.map(formatTutorApplicationList)
    res.json({
      success: true,
      data: {
        applications: formatted
      }
    })
  } catch (err) {
    next(err)
  }
}

export async function updateTutorApplicationStatusController(req, res, next) {
  try {
    const { id } = req.params
    const { status, adminNotes } = req.body
    
    if (!['pending', 'reviewed', 'approved', 'rejected'].includes(status)) {
      const err = new Error('Invalid status. Must be one of: pending, reviewed, approved, rejected')
      err.statusCode = 400
      throw err
    }
    
    const updated = await updateTutorApplicationStatus(id, status, adminNotes)
    if (!updated) {
      const err = new Error('Tutor application not found')
      err.statusCode = 404
      throw err
    }
    
    res.json({
      success: true,
      message: 'Tutor application status updated successfully',
      data: formatTutorApplicationList(updated)
    })
  } catch (err) {
    next(err)
  }
}

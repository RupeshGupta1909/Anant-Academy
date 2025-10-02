import Joi from 'joi'

const changePasswordSchema = Joi.object({
  currentPassword: Joi.string().required().messages({
    'any.required': 'Current password is required'
  }),
  newPassword: Joi.string().min(6).required().messages({
    'string.min': 'New password must be at least 6 characters long',
    'any.required': 'New password is required'
  }),
  confirmPassword: Joi.string().valid(Joi.ref('newPassword')).required().messages({
    'any.only': 'Confirm password must match new password',
    'any.required': 'Confirm password is required'
  })
})

const createUserSchema = Joi.object({
  email: Joi.string().trim().email().required().messages({
    'string.email': 'Please provide a valid email address',
    'any.required': 'Email is required'
  }),
  password: Joi.string().min(6).required().messages({
    'string.min': 'Password must be at least 6 characters long',
    'any.required': 'Password is required'
  }),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required().messages({
    'any.only': 'Confirm password must match password',
    'any.required': 'Confirm password is required'
  }),
  role: Joi.string().valid('admin').default('admin')
})

export function validateChangePassword(payload) {
  return changePasswordSchema.validate(payload, { abortEarly: false })
}

export function validateCreateUser(payload) {
  return createUserSchema.validate(payload, { abortEarly: false })
}

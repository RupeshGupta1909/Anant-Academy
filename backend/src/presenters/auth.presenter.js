export function formatAuthResponse(user, token) {
  return {
    user: {
      id: user._id,
      email: user.email,
      role: user.role,
      lastLogin: user.lastLogin
    },
    token
  }
}

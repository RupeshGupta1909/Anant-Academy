import axios from 'axios'
import { API_PREFIX } from '../constants'

const apiBase = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000'

const apiClient = axios.create({
  baseURL: `${apiBase}${API_PREFIX}`,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

export default apiClient



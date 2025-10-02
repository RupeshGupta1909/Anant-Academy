<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <div class="flex justify-center">
        <div class="h-12 w-12 rounded-lg bg-brand text-white grid place-items-center font-semibold text-lg">AA</div>
      </div>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Admin Login
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Sign in to access the admin dashboard
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" @submit.prevent="handleLogin">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div class="mt-1">
              <input
                id="email"
                v-model="form.email"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-brand focus:border-brand sm:text-sm"
                placeholder="admin@anantacademy.com"
              />
            </div>
            <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div class="mt-1">
              <input
                id="password"
                v-model="form.password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-brand focus:border-brand sm:text-sm"
                placeholder="Enter your password"
              />
            </div>
            <p v-if="errors.password" class="mt-1 text-sm text-red-600">{{ errors.password }}</p>
          </div>

          <div v-if="errorMessage" class="bg-red-50 border border-red-200 rounded-md p-4">
            <p class="text-sm text-red-600">{{ errorMessage }}</p>
          </div>

          <div>
            <button
              type="submit"
              :disabled="loading"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-brand hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="loading" class="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
              </span>
              {{ loading ? 'Signing in...' : 'Sign in' }}
            </button>
          </div>
        </form>

        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300" />
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500">Demo Credentials</span>
            </div>
          </div>
          <div class="mt-4 text-center text-sm text-gray-600">
            <p>Email: admin@anantacademy.com</p>
            <p>Password: admin123</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import apiClient from '../services/apiClient'

const router = useRouter()

const form = reactive({
  email: '',
  password: ''
})

const errors = reactive({})
const loading = ref(false)
const errorMessage = ref('')

function validateForm() {
  const newErrors = {}
  
  if (!form.email) {
    newErrors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    newErrors.email = 'Please enter a valid email'
  }
  
  if (!form.password) {
    newErrors.password = 'Password is required'
  } else if (form.password.length < 6) {
    newErrors.password = 'Password must be at least 6 characters'
  }
  
  Object.assign(errors, newErrors)
  return Object.keys(newErrors).length === 0
}

async function handleLogin() {
  errorMessage.value = ''
  
  if (!validateForm()) {
    return
  }
  
  loading.value = true
  
  try {
    const response = await apiClient.post('/auth/login', {
      email: form.email,
      password: form.password
    })
    
    if (response.data.success) {
      // Store token and user info
      localStorage.setItem('adminToken', response.data.data.token)
      localStorage.setItem('adminUser', JSON.stringify(response.data.data.user))
      
      // Redirect to admin dashboard
      router.push('/admin/dashboard')
    }
  } catch (error) {
    errorMessage.value = error.response?.data?.message || 'Login failed. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>

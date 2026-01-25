<template>
  <div>
    <header class="bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <img src="/icon.ico" alt="AnantAcademy Logo" class="h-9 w-9 rounded-lg" />
          <router-link to="/" class="text-xl font-semibold">{{ companyName }}</router-link>
        </div>
        <router-link to="/" class="text-sm text-gray-700 hover:text-gray-900">Back to Home</router-link>
      </div>
    </header>

    <main class="bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 min-h-screen">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl border border-blue-100 p-6 sm:p-8">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900 mb-2">Join as Tutor</h1>
          <p class="text-gray-600 mb-6">Fill out the form below to apply as a tutor. We'll review your application and get back to you soon.</p>

          <form @submit.prevent="onSubmit" class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input 
                v-model.trim="form.name" 
                type="text" 
                class="w-full border-gray-300 focus:border-brand focus:ring-brand transition-colors bg-white px-3 py-2 rounded-md" 
                placeholder="e.g. John Doe" 
              />
              <p v-if="errors.name" class="mt-1 text-sm text-red-600">{{ errors.name }}</p>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <input 
                v-model.trim="form.email" 
                type="email" 
                class="w-full border-gray-300 focus:border-brand focus:ring-brand transition-colors bg-white px-3 py-2 rounded-md" 
                placeholder="name@example.com" 
              />
              <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
              <input 
                v-model.trim="form.phone" 
                type="tel" 
                class="w-full border-gray-300 focus:border-brand focus:ring-brand transition-colors bg-white px-3 py-2 rounded-md" 
                placeholder="10-digit phone number" 
              />
              <p v-if="errors.phone" class="mt-1 text-sm text-red-600">{{ errors.phone }}</p>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Resume Link *</label>
              <input 
                v-model.trim="form.resumeLink" 
                type="url" 
                class="w-full border-gray-300 focus:border-brand focus:ring-brand transition-colors bg-white px-3 py-2 rounded-md" 
                placeholder="https://drive.google.com/..." 
              />
              <p class="mt-1 text-xs text-gray-500">Please provide a link to your resume (Google Drive, Dropbox, etc.)</p>
              <p v-if="errors.resumeLink" class="mt-1 text-sm text-red-600">{{ errors.resumeLink }}</p>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">I am comfortable with online classes *</label>
              <p class="text-xs text-gray-500 mb-2">I have experience teaching online and am comfortable with online teaching platforms</p>
              <div class="flex gap-4">
                <label class="flex items-center">
                  <input 
                    v-model="form.comfortableWithOnlineClass" 
                    type="radio" 
                    :value="true"
                    class="h-4 w-4 text-brand focus:ring-brand border-gray-300" 
                  />
                  <span class="ml-2 text-sm text-gray-700">Yes</span>
                </label>
                <label class="flex items-center">
                  <input 
                    v-model="form.comfortableWithOnlineClass" 
                    type="radio" 
                    :value="false"
                    class="h-4 w-4 text-brand focus:ring-brand border-gray-300" 
                  />
                  <span class="ml-2 text-sm text-gray-700">No</span>
                </label>
              </div>
              <p v-if="errors.comfortableWithOnlineClass" class="mt-1 text-sm text-red-600">{{ errors.comfortableWithOnlineClass }}</p>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">I have a pen tablet *</label>
              <p class="text-xs text-gray-500 mb-2">I have access to a pen tablet or digital writing device for online teaching</p>
              <div class="flex gap-4">
                <label class="flex items-center">
                  <input 
                    v-model="form.hasPenTab" 
                    type="radio" 
                    :value="true"
                    class="h-4 w-4 text-brand focus:ring-brand border-gray-300" 
                  />
                  <span class="ml-2 text-sm text-gray-700">Yes</span>
                </label>
                <label class="flex items-center">
                  <input 
                    v-model="form.hasPenTab" 
                    type="radio" 
                    :value="false"
                    class="h-4 w-4 text-brand focus:ring-brand border-gray-300" 
                  />
                  <span class="ml-2 text-sm text-gray-700">No</span>
                </label>
              </div>
              <p v-if="errors.hasPenTab" class="mt-1 text-sm text-red-600">{{ errors.hasPenTab }}</p>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">I have a laptop with webcam *</label>
              <p class="text-xs text-gray-500 mb-2">I have access to a laptop or computer with a working webcam for online classes</p>
              <div class="flex gap-4">
                <label class="flex items-center">
                  <input 
                    v-model="form.hasLaptopWithWebcam" 
                    type="radio" 
                    :value="true"
                    class="h-4 w-4 text-brand focus:ring-brand border-gray-300" 
                  />
                  <span class="ml-2 text-sm text-gray-700">Yes</span>
                </label>
                <label class="flex items-center">
                  <input 
                    v-model="form.hasLaptopWithWebcam" 
                    type="radio" 
                    :value="false"
                    class="h-4 w-4 text-brand focus:ring-brand border-gray-300" 
                  />
                  <span class="ml-2 text-sm text-gray-700">No</span>
                </label>
              </div>
              <p v-if="errors.hasLaptopWithWebcam" class="mt-1 text-sm text-red-600">{{ errors.hasLaptopWithWebcam }}</p>
            </div>

            <div class="flex items-center gap-3 pt-4">
              <button 
                type="submit" 
                :disabled="loading" 
                class="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-brand text-white font-medium hover:bg-brand-dark disabled:opacity-60 transition-colors"
              >
                <svg v-if="loading" class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
                <span>{{ loading ? 'Submitting...' : 'Submit Application' }}</span>
              </button>
              <p v-if="serverMessage" :class="serverError ? 'text-red-600' : 'text-green-600'" class="text-sm">{{ serverMessage }}</p>
            </div>
          </form>
        </div>
      </div>
    </main>
    
    <AppFooter />
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import apiClient from '../services/apiClient'
import AppFooter from '../components/AppFooter.vue'
import { COMPANY_NAME } from '../constants'

const companyName = COMPANY_NAME

const form = reactive({
  name: '',
  email: '',
  phone: '',
  resumeLink: '',
  comfortableWithOnlineClass: null,
  hasPenTab: null,
  hasLaptopWithWebcam: null
})

const errors = reactive({})
const loading = ref(false)
const serverMessage = ref('')
const serverError = ref(false)

function validate() {
  const nextErrors = {}
  
  if (!form.name || form.name.trim().length < 2) {
    nextErrors.name = 'Name must be at least 2 characters'
  }
  
  if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    nextErrors.email = 'Valid email is required'
  }
  
  if (!form.phone || !/^\d{10,15}$/.test(form.phone)) {
    nextErrors.phone = 'Valid phone number is required (10-15 digits)'
  }
  
  if (!form.resumeLink || !/^https?:\/\/.+/.test(form.resumeLink)) {
    nextErrors.resumeLink = 'Valid resume link is required (must start with http:// or https://)'
  }
  
  if (form.comfortableWithOnlineClass === '' || form.comfortableWithOnlineClass === null || form.comfortableWithOnlineClass === undefined) {
    nextErrors.comfortableWithOnlineClass = 'Please select an option'
  } else if (form.comfortableWithOnlineClass === false) {
    nextErrors.comfortableWithOnlineClass = 'You must be comfortable with online classes to apply'
  }
  
  if (form.hasPenTab === '' || form.hasPenTab === null || form.hasPenTab === undefined) {
    nextErrors.hasPenTab = 'Please select an option'
  } else if (form.hasPenTab === false) {
    nextErrors.hasPenTab = 'Pen tablet is required for online teaching'
  }
  
  if (form.hasLaptopWithWebcam === '' || form.hasLaptopWithWebcam === null || form.hasLaptopWithWebcam === undefined) {
    nextErrors.hasLaptopWithWebcam = 'Please select an option'
  } else if (form.hasLaptopWithWebcam === false) {
    nextErrors.hasLaptopWithWebcam = 'Laptop with webcam is required for online teaching'
  }
  
  Object.assign(errors, nextErrors)
  for (const k of Object.keys(errors)) {
    if (!nextErrors[k]) delete errors[k]
  }
  
  return Object.keys(nextErrors).length === 0
}

async function onSubmit() {
  serverMessage.value = ''
  serverError.value = false
  
  if (!validate()) return
  
  loading.value = true
  try {
    const payload = { ...form }
    const res = await apiClient.post('/tutor-applications', payload)
    serverMessage.value = res?.data?.message || 'Application submitted successfully'
    serverError.value = false
    
    // Reset form
    Object.assign(form, {
      name: '',
      email: '',
      phone: '',
      resumeLink: '',
      comfortableWithOnlineClass: null,
      hasPenTab: null,
      hasLaptopWithWebcam: null
    })
  } catch (err) {
    serverMessage.value = err?.response?.data?.message || 'Submission failed. Please try again.'
    serverError.value = true
  } finally {
    loading.value = false
  }
}
</script>

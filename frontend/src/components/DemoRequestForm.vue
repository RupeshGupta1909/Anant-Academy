<template>
  <div id="demo-form" class="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 shadow-lg">
    <h2 class="text-2xl font-bold tracking-tight">Request a Free Demo</h2>
    <p class="mt-1 text-gray-600 text-sm">Fill the details and we’ll call you back.</p>

    <div class="mt-4">
      <div class="text-sm font-medium text-gray-700 mb-2">Step {{ step }} of 2 -</div>
      <div class="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div class="h-3 bg-brand transition-all" :style="{ width: step === 1 ? '50%' : '100%' }"></div>
      </div>
    </div>

    <form class="mt-6 space-y-4" @submit.prevent="onSubmit">
      <div v-if="step === 1" class="grid grid-cols-1 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">Parent name *</label>
          <input v-model.trim="form.parentName" type="text" class="mt-1 w-full border-gray-300 focus:border-brand focus:ring-brand transition-colors bg-white px-3 py-1.5 rounded-md" placeholder="e.g. Ananya Sharma" />
          <p v-if="errors.parentName" class="mt-1 text-sm text-red-600">{{ errors.parentName }}</p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Student name *</label>
          <input v-model.trim="form.studentName" type="text" class="mt-1 w-full border-gray-300 focus:border-brand focus:ring-brand transition-colors bg-white px-3 py-1.5 rounded-md" placeholder="e.g. Rahul Sharma" />
          <p v-if="errors.studentName" class="mt-1 text-sm text-red-600">{{ errors.studentName }}</p>
        </div>
      </div>

      <div v-if="step === 1" class="grid grid-cols-1 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">Email *</label>
          <input v-model.trim="form.email" type="email" class="mt-1 w-full border-gray-300 focus:border-brand focus:ring-brand transition-colors bg-white px-3 py-1.5 rounded-md" placeholder="name@example.com" />
          <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Parent's Mobile (WhatsApp) *</label>
          <div class="mt-1 grid grid-cols-[140px_1fr] gap-2">
            <div class="relative">
              <input 
                v-model="countryCodeSearch" 
                @focus="showCountryDropdown = true"
                @blur="setTimeout(() => showCountryDropdown = false, 200)"
                class="w-full border-gray-300 focus:border-brand focus:ring-brand transition-colors bg-white px-3 py-1.5 rounded-md text-sm"
                placeholder="Search..."
              />
              <div v-if="showCountryDropdown" class="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-48 overflow-y-auto">
                <div v-for="country in filteredCountryCodes" :key="country.value" 
                     @click="selectCountryCode(country)"
                     class="px-3 py-2 py-1 text-sm cursor-pointer hover:bg-gray-100"
                     :class="{ 'bg-brand text-white': form.phoneCountryCode === country.value }">
                  {{ country.label }}
                </div>
              </div>
            </div>
            <input v-model.trim="form.phone" type="tel" class="w-full border-gray-300 focus:border-brand focus:ring-brand transition-colors bg-white px-3 py-1.5 rounded-md" placeholder="WhatsApp number" />
          </div>
          <p v-if="errors.phoneCountryCode" class="mt-1 text-sm text-red-600">{{ errors.phoneCountryCode }}</p>
          <p v-if="errors.phone" class="mt-1 text-sm text-red-600">{{ errors.phone }}</p>
        </div>
      </div>

      <div v-if="step === 1" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">Subject *</label>
          <select v-model="form.subject" class="mt-1 w-full border-gray-300 focus:border-brand focus:ring-brand transition-colors bg-white px-3 py-1.5 rounded-md">
            <option value="">Select subject</option>
            <option v-for="s in subjects" :key="s.value" :value="s.value">{{ s.label }}</option>
          </select>
          <p v-if="errors.subject" class="mt-1 text-sm text-red-600">{{ errors.subject }}</p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Class *</label>
          <select v-model="form.classGrade" class="mt-1 w-full border-gray-300 focus:border-brand focus:ring-brand transition-colors bg-white px-3 py-1.5 rounded-md">
            <option value="">Select class</option>
            <option v-for="g in classGrades" :key="g" :value="g">Class {{ g }}</option>
          </select>
          <p v-if="errors.classGrade" class="mt-1 text-sm text-red-600">{{ errors.classGrade }}</p>
        </div>
      </div>

      <div v-if="step === 2" class="grid grid-cols-1 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">Select demo date</label>
          <input v-model="form.preferredDate" type="date" class="mt-1 w-full border-gray-300 focus:border-brand focus:ring-brand transition-colors bg-white px-3 py-1.5 rounded-md" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Preferred time</label>
          <input v-model="form.preferredTime" type="time" class="mt-1 w-full border-gray-300 focus:border-brand focus:ring-brand transition-colors bg-white px-3 py-1.5 rounded-md" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Do you have Laptop/PC/Tablet with webcam and headphone? *</label>
          <select v-model="form.hasDevice" class="mt-1 w-full border-gray-300 focus:border-brand focus:ring-brand transition-colors bg-white px-3 py-1.5 rounded-md">
            <option :value="''">- Select -</option>
            <option v-for="o in deviceOptions" :key="String(o.value)" :value="o.value">{{ o.label }}</option>
          </select>
          <p v-if="errors.hasDevice" class="mt-1 text-sm text-red-600">{{ errors.hasDevice }}</p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Preferred communication language *</label>
          <select v-model="form.preferredLanguage" class="mt-1 w-full border-gray-300 focus:border-brand focus:ring-brand transition-colors bg-white px-3 py-1.5 rounded-md">
            <option value="">- Select -</option>
            <option v-for="l in languages" :key="l.value" :value="l.value">{{ l.label }}</option>
          </select>
          <p v-if="errors.preferredLanguage" class="mt-1 text-sm text-red-600">{{ errors.preferredLanguage }}</p>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Details about your request</label>
          <textarea v-model.trim="form.notes" rows="3" class="mt-1 w-full border-gray-300 focus:border-brand focus:ring-brand transition-colors bg-white px-3 py-1.5 rounded-md" placeholder="Anything specific the tutor should know?"></textarea>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <button v-if="step === 1" type="button" class="inline-flex items-center justify-center px-5 py-1.5 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors" @click="goToStep(2)">
          Next
          <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
        <button v-if="step === 2" type="button" class="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors" @click="goToStep(1)">
          <svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          Previous
        </button>
        <button v-if="step === 2" type="submit" :disabled="loading" class="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-brand text-white font-medium hover:bg-brand-dark disabled:opacity-60 transition-colors">
          <svg v-if="loading" class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
          </svg>
          <span>{{ loading ? 'Submitting...' : 'Schedule Demo Class' }}</span>
        </button>
        <p v-if="serverMessage" :class="serverError ? 'text-red-600' : 'text-green-600'" class="text-sm">{{ serverMessage }}</p>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { SUBJECTS, CLASS_GRADES, LANGUAGES, DEVICE_OPTIONS, COUNTRY_CODES, searchCountryCodes } from '../constants'
import apiClient from '../services/apiClient'

const route = useRoute()
const subjects = SUBJECTS
const classGrades = CLASS_GRADES
const languages = LANGUAGES
const deviceOptions = DEVICE_OPTIONS
const countryCodes = COUNTRY_CODES

const form = reactive({
  parentName: '',
  studentName: '',
  email: '',
  phone: '',
  phoneCountryCode: '+91',
  subject: '',
  classGrade: '',
  preferredDate: '',
  preferredTime: '',
  notes: '',
  preferredLanguage: '',
  hasDevice: ''
})

// Pre-fill subject from query parameter
onMounted(() => {
  const subjectParam = route.query.subject
  if (subjectParam && ['M', 'P', 'C', 'B'].includes(subjectParam)) {
    form.subject = subjectParam
  }
})

const errors = reactive({})
const loading = ref(false)
const serverMessage = ref('')
const serverError = ref(false)
const step = ref(1)

// Country code search functionality
const countryCodeSearch = ref('')
const showCountryDropdown = ref(false)

const filteredCountryCodes = computed(() => {
  return searchCountryCodes(countryCodeSearch.value)
})

function selectCountryCode(country) {
  form.phoneCountryCode = country.value
  countryCodeSearch.value = country.label
  showCountryDropdown.value = false
}

function goToStep(next) {
  if (next === 2 && !validateStep1()) return
  step.value = next
}

function validate() {
  const nextErrors = {}
  if (!form.parentName) nextErrors.parentName = 'Parent name is required'
  if (!form.studentName) nextErrors.studentName = 'Student name is required'
  if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Valid email is required'
  if (!form.phoneCountryCode || !/^\+\d{1,3}$/.test(form.phoneCountryCode)) nextErrors.phoneCountryCode = 'Select country code'
  if (!form.phone || !/^\d{6,15}$/.test(form.phone)) nextErrors.phone = 'Enter a valid phone number'
  if (!form.subject) nextErrors.subject = 'Select a subject'
  if (!form.classGrade) nextErrors.classGrade = 'Select class'
  if (!form.preferredLanguage) nextErrors.preferredLanguage = 'Select language'
  if (form.hasDevice === '') nextErrors.hasDevice = 'Please select an option'
  Object.assign(errors, nextErrors)
  for (const k of Object.keys(errors)) {
    if (!nextErrors[k]) delete errors[k]
  }
  return Object.keys(nextErrors).length === 0
}

function validateStep1() {
  const nextErrors = {}
  if (!form.parentName) nextErrors.parentName = 'Parent name is required'
  if (!form.studentName) nextErrors.studentName = 'Student name is required'
  if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Valid email is required'
  if (!form.phoneCountryCode || !/^\+\d{1,3}$/.test(form.phoneCountryCode)) nextErrors.phoneCountryCode = 'Select country code'
  if (!form.phone || !/^\d{6,15}$/.test(form.phone)) nextErrors.phone = 'Enter a valid phone number'
  if (!form.subject) nextErrors.subject = 'Select a subject'
  if (!form.classGrade) nextErrors.classGrade = 'Select class'
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
    const res = await apiClient.post('/demo-requests', payload)
    serverMessage.value = res?.data?.message || 'Request submitted successfully'
    serverError.value = false
    Object.assign(form, {
      parentName: '', studentName: '', email: '', phone: '', phoneCountryCode: '+91', subject: '', classGrade: '', preferredDate: '', preferredTime: '', notes: '', preferredLanguage: '', hasDevice: ''
    })
    countryCodeSearch.value = ''
    step.value = 1
  } catch (err) {
    serverMessage.value = err?.response?.data?.message || 'Submission failed. Please try again.'
    serverError.value = true
  } finally {
    loading.value = false
  }
}
</script>



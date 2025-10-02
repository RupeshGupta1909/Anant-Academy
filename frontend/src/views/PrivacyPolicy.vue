<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex items-center justify-between">
          <router-link to="/" class="flex items-center gap-2">
            <img src="/icon.ico" alt="AnantAcademy Logo" class="h-8 w-8 rounded-lg" />
            <span class="text-xl font-semibold text-gray-900">{{ companyName }}</span>
          </router-link>
          <router-link to="/" class="text-gray-600 hover:text-gray-900 transition-colors">← Back to Home</router-link>
        </div>
      </div>
    </header>

    <!-- Content -->
    <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="bg-white rounded-lg shadow-sm p-8">
        <h1 class="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div class="prose prose-lg max-w-none">
          <p class="text-gray-600 mb-6">Last updated: {{ currentDate }}</p>
          
          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
            <p class="text-gray-700 mb-4">
              We collect information you provide directly to us, such as when you create an account, book a demo class, or contact us for support.
            </p>
            <ul class="list-disc list-inside text-gray-700 space-y-2">
              <li>Personal information (name, email, phone number)</li>
              <li>Student information (class, subject preferences)</li>
              <li>Communication preferences and feedback</li>
              <li>Payment information (processed securely through third-party providers)</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p class="text-gray-700 mb-4">We use the information we collect to:</p>
            <ul class="list-disc list-inside text-gray-700 space-y-2">
              <li>Provide and improve our educational services</li>
              <li>Schedule and conduct demo classes</li>
              <li>Communicate with you about your classes and our services</li>
              <li>Process payments and manage your account</li>
              <li>Send you important updates and notifications</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing</h2>
            <p class="text-gray-700 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:
            </p>
            <ul class="list-disc list-inside text-gray-700 space-y-2">
              <li>To trusted service providers who assist us in operating our platform</li>
              <li>When required by law or to protect our rights</li>
              <li>In connection with a business transfer or acquisition</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
            <p class="text-gray-700 mb-4">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">5. Your Rights</h2>
            <p class="text-gray-700 mb-4">You have the right to:</p>
            <ul class="list-disc list-inside text-gray-700 space-y-2">
              <li>Access and update your personal information</li>
              <li>Request deletion of your account and data</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of your data</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">6. Contact Us</h2>
            <p class="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="text-gray-700">Email: privacy@anantacademy.com</p>
              <p class="text-gray-700">Phone: +91 98765 43210</p>
            </div>
          </section>
        </div>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import AppFooter from '../components/AppFooter.vue'
import { COMPANY_NAME } from '../constants'

const companyName = COMPANY_NAME
const currentDate = computed(() => new Date().toLocaleDateString('en-US', { 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
}))
</script>

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
        <h1 class="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div class="prose prose-lg max-w-none">
          <p class="text-gray-600 mb-6">Last updated: {{ currentDate }}</p>
          
          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p class="text-gray-700 mb-4">
              By accessing and using AnantAcademy's services, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
            <p class="text-gray-700 mb-4">
              AnantAcademy provides online educational services including personalized tutoring, demo classes, and educational content for students in classes 6-12.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
            <p class="text-gray-700 mb-4">As a user of our service, you agree to:</p>
            <ul class="list-disc list-inside text-gray-700 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of your account</li>
              <li>Use the service only for lawful purposes</li>
              <li>Respect other users and instructors</li>
              <li>Not share your account credentials with others</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">4. Payment Terms</h2>
            <p class="text-gray-700 mb-4">
              Payment for services must be made in advance. All fees are non-refundable unless otherwise stated in our Refund Policy.
            </p>
            <ul class="list-disc list-inside text-gray-700 space-y-2">
              <li>Fees are charged per class or package as selected</li>
              <li>Payment methods include credit/debit cards and digital wallets</li>
              <li>Prices may be subject to change with prior notice</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">5. Class Scheduling and Cancellation</h2>
            <p class="text-gray-700 mb-4">
              Classes must be scheduled in advance. Cancellation policies apply as follows:
            </p>
            <ul class="list-disc list-inside text-gray-700 space-y-2">
              <li>Free cancellation up to 24 hours before class</li>
              <li>50% refund for cancellations within 24 hours</li>
              <li>No refund for no-shows or cancellations within 2 hours</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">6. Intellectual Property</h2>
            <p class="text-gray-700 mb-4">
              All content, materials, and intellectual property provided through our service remain the property of AnantAcademy or its licensors.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p class="text-gray-700 mb-4">
              AnantAcademy shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use of our services.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">8. Termination</h2>
            <p class="text-gray-700 mb-4">
              We reserve the right to terminate or suspend your account at any time for violation of these terms or for any other reason at our discretion.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">9. Contact Information</h2>
            <p class="text-gray-700 mb-4">
              For questions about these Terms of Service, please contact us:
            </p>
            <div class="bg-gray-50 p-4 rounded-lg">
              <p class="text-gray-700">Email: legal@anantacademy.com</p>
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

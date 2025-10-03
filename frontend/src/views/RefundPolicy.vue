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
        <h1 class="text-4xl font-bold text-gray-900 mb-8">Refund Policy</h1>
        
        <div class="prose prose-lg max-w-none">
          <p class="text-gray-600 mb-6">Last updated: {{ currentDate }}</p>
          
          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">1. 100% Risk-Free Money Back Guarantee</h2>
            <p class="text-gray-700 mb-4">
              We offer a 100% risk-free money-back guarantee for all our services. If you're not completely satisfied with your experience, we'll provide a full refund.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">2. Refund Eligibility</h2>
            <p class="text-gray-700 mb-4">You are eligible for a refund if:</p>
            <ul class="list-disc list-inside text-gray-700 space-y-2">
              <li>You cancel your subscription within 7 days of purchase</li>
              <li>Technical issues prevent you from accessing classes</li>
              <li>You're not satisfied with the quality of instruction</li>
              <li>We are unable to provide the promised service</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">3. Refund Process</h2>
            <p class="text-gray-700 mb-4">To request a refund:</p>
            <ol class="list-decimal list-inside text-gray-700 space-y-2">
              <li>Contact our support team at support@anantacademy.co.in</li>
              <li>Provide your order number and reason for refund</li>
              <li>We'll review your request within 2 business days</li>
              <li>Approved refunds will be processed within 5-7 business days</li>
            </ol>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">4. Partial Refunds</h2>
            <p class="text-gray-700 mb-4">
              For package purchases, partial refunds may be available based on:
            </p>
            <ul class="list-disc list-inside text-gray-700 space-y-2">
              <li>Number of classes already attended</li>
              <li>Time remaining in your subscription</li>
              <li>Reason for cancellation</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">5. Class Cancellation Refunds</h2>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Cancellation Timeline:</h3>
              <ul class="text-gray-700 space-y-1">
                <li><strong>24+ hours before class:</strong> 100% refund</li>
                <li><strong>2-24 hours before class:</strong> 50% refund</li>
                <li><strong>Less than 2 hours:</strong> No refund</li>
                <li><strong>No-show:</strong> No refund</li>
              </ul>
            </div>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">6. Refund Methods</h2>
            <p class="text-gray-700 mb-4">
              Refunds will be processed using the same payment method used for the original purchase:
            </p>
            <ul class="list-disc list-inside text-gray-700 space-y-2">
              <li>Credit/Debit cards: 5-7 business days</li>
              <li>Digital wallets: 3-5 business days</li>
              <li>Bank transfers: 7-10 business days</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">7. Non-Refundable Items</h2>
            <p class="text-gray-700 mb-4">The following are not eligible for refunds:</p>
            <ul class="list-disc list-inside text-gray-700 space-y-2">
              <li>Completed individual classes</li>
              <li>Downloaded materials or resources</li>
              <li>Services used beyond the refund period</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">8. Contact for Refunds</h2>
            <p class="text-gray-700 mb-4">
              For refund requests or questions about this policy, please contact us:
            </p>
            <div class="bg-gray-50 p-4 rounded-lg">
               <p class="text-gray-700">Email: support@anantacademy.co.in</p>
               <p class="text-gray-700">Phone: +91 73790 82567</p>
              <p class="text-gray-700">Response time: Within 24 hours</p>
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

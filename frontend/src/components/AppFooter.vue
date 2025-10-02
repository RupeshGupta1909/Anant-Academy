<template>
  <footer class="bg-gray-800 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center gap-2 mb-4">
            <div class="h-8 w-8 rounded-lg bg-brand text-white grid place-items-center font-semibold text-sm">AA</div>
            <span class="text-xl font-semibold">{{ companyName }}</span>
          </div>
          <p class="text-gray-300 text-sm leading-relaxed">
            Empowering students with personalized online education. Expert teachers, flexible scheduling, and proven results for classes 6-12.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li><router-link to="/" class="text-gray-300 hover:text-white text-sm transition-colors">Home</router-link></li>
            <li><router-link to="/book-demo" class="text-gray-300 hover:text-white text-sm transition-colors">Book Demo</router-link></li>
            <li><a href="#subjects" class="text-gray-300 hover:text-white text-sm transition-colors">Subjects</a></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Contact</h3>
          <ul class="space-y-2 text-sm text-gray-300">
            <li>📧 hello@anantacademy.com</li>
            <li>📞 +91 98765 43210</li>
            <li>🕒 24x7 Support</li>
            <li>📍 India, UAE, US, UK</li>
          </ul>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="border-t border-gray-700 mt-8 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="text-sm text-gray-400">
            © {{ currentYear }} {{ companyName }} | All Rights Reserved
          </div>
          <div class="flex space-x-6 text-sm">
            <router-link to="/privacy-policy" class="text-gray-400 hover:text-white transition-colors">Privacy Policy</router-link>
            <router-link to="/terms-of-service" class="text-gray-400 hover:text-white transition-colors">Terms of Service</router-link>
            <router-link to="/refund-policy" class="text-gray-400 hover:text-white transition-colors">Refund Policy</router-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { COMPANY_NAME } from '../constants'

const companyName = COMPANY_NAME
const currentYear = computed(() => new Date().getFullYear())
</script>

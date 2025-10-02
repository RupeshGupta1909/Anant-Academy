<template>
  <div>
    <header class="bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="h-9 w-9 rounded-lg bg-brand text-white grid place-items-center font-semibold">AA</div>
          <router-link to="/" class="text-xl font-semibold">{{ companyName }}</router-link>
        </div>
        <router-link to="/" class="text-sm text-gray-700 hover:text-gray-900">Back to Home</router-link>
      </div>
    </header>

    <main class="bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <section class="space-y-6">
          <div class="mb-4">
            <img src="/onlineconnet3.PNG?url" alt="Online Class" class="w-full h-40 object-cover rounded-lg" />
          </div>
          <h1 class="text-3xl font-extrabold tracking-tight text-gray-900">All you need to know for Online Class</h1>
          <ul class="space-y-6">
            <li class="flex items-start gap-4">
              <span class="h-9 w-9 grid place-items-center rounded-full bg-emerald-100 text-emerald-700">✓</span>
              <p class="text-gray-700">Make sure you have all the necessary devices required for live classes- <strong>Laptop/PC</strong> (with good quality <strong>Webcam</strong> and <strong>Headphone</strong>), Hi-speed <strong>Internet</strong> connection (Broadband/ JioFi WiFi is recommended).</p>
            </li>
            <li class="flex items-start gap-4">
              <span class="h-9 w-9 grid place-items-center rounded-full bg-emerald-100 text-emerald-700">✓</span>
              <p class="text-gray-700">If you are using <strong>Mobile / Tab</strong> to attend the class, keep enabled <strong>Screen Rotation</strong> and watch in <strong>Landscape Mode</strong>.</p>
            </li>
            <li class="flex items-start gap-4">
              <span class="h-9 w-9 grid place-items-center rounded-full bg-emerald-100 text-emerald-700">✓</span>
              <p class="text-gray-700">Sit relax and choose a place where no one disturbs and has no noise surroundings during class.</p>
            </li>
            <li class="flex items-start gap-4">
              <span class="h-9 w-9 grid place-items-center rounded-full bg-emerald-100 text-emerald-700">✓</span>
              <p class="text-gray-700">Avoid any downloading on your system during the live class.</p>
            </li>
            <!-- <li class="flex items-start gap-4">
              <span class="h-9 w-9 grid place-items-center rounded-full bg-emerald-100 text-emerald-700">✓</span>
              <p class="text-gray-700">Before live class, update your Chrome browser to the latest version.</p>
            </li> -->
          </ul>
        </section>
        <section>
          <DemoRequestForm />
        </section>
      </div>
    </main>
    
    <TestimonialsSection />
    
    <AppFooter />
  </div>
</template>

<script setup>
import DemoRequestForm from '../components/DemoRequestForm.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'
import AppFooter from '../components/AppFooter.vue'
import { COMPANY_NAME } from '../constants'
const companyName = COMPANY_NAME
</script>



<template>
  <div>
    <header class="bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <img src="/icon.ico" alt="AnantAcademy Logo" class="h-9 w-9 rounded-lg" />
          <span class="text-xl font-semibold">{{ companyName }}</span>
        </div>
        <router-link to="/book-demo" class="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-brand text-white font-medium hover:bg-brand-dark">Book a Demo</router-link>
      </div>
    </header>

    <main>
      <HeroSection />
      <section id="one-on-one" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 text-center">Learn with 1-on-1 personalized online tuition classes</h2>
        <p class="mt-2 text-center text-gray-600 text-sm">1-on-1 classes are fully customizable, personalized sessions</p>
        <div class="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <div v-for="g in [6,7,8,9,10,11]" :key="g" class="p-4 rounded-xl border bg-white text-center">
            <div class="text-sm font-medium">Online Math</div>
            <div class="text-xs text-gray-600">Tuition for Class {{ g }}</div>
            <a class="mt-2 inline-block text-xs text-brand">1-on-1 Classes</a>
          </div>
          <div class="p-4 rounded-xl border bg-white text-center">
            <div class="text-sm font-medium">Online Math</div>
            <div class="text-xs text-gray-600">Tuition for Class 12</div>
            <a class="mt-2 inline-block text-xs text-brand">1-on-1 Classes</a>
          </div>
          <div class="p-4 rounded-xl border bg-white text-center">
            <div class="text-sm font-medium">Online Physics</div>
            <div class="text-xs text-gray-600">Tuition for Class 11</div>
            <a class="mt-2 inline-block text-xs text-brand">1-on-1 Classes</a>
          </div>
          <div class="p-4 rounded-xl border bg-white text-center">
            <div class="text-sm font-medium">Online Physics</div>
            <div class="text-xs text-gray-600">Tuition for Class 12</div>
            <a class="mt-2 inline-block text-xs text-brand">1-on-1 Classes</a>
          </div>
          <div class="p-4 rounded-xl border bg-white text-center">
            <div class="text-sm font-medium">Online Chemistry</div>
            <div class="text-xs text-gray-600">Tuition for Class 11</div>
            <a class="mt-2 inline-block text-xs text-brand">1-on-1 Classes</a>
          </div>
          <div class="p-4 rounded-xl border bg-white text-center">
            <div class="text-sm font-medium">Online Chemistry</div>
            <div class="text-xs text-gray-600">Tuition for Class 12</div>
            <a class="mt-2 inline-block text-xs text-brand">1-on-1 Classes</a>
          </div>
        </div>
      </section>

      <section class="bg-gray-50 border-t border-b">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 text-center">Online Skills Classes for Kids</h2>
          <p class="mt-2 text-center text-gray-600 text-sm">Join our personalized 1-on-1 classes in coding and chess, taught by expert teachers</p>
          <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="p-6 rounded-xl border bg-white">
              <div class="font-medium">Scratch Programming Classes for Kids</div>
              <div class="text-xs text-gray-600">Grades 4 to 5</div>
              <a class="mt-2 inline-block text-sm text-brand">View Details</a>
            </div>
            <div class="p-6 rounded-xl border bg-white">
              <div class="font-medium">Web Development for Kids</div>
              <div class="text-xs text-gray-600">Grades 6 to 8</div>
              <a class="mt-2 inline-block text-sm text-brand">View Details</a>
            </div>
            <div class="p-6 rounded-xl border bg-white">
              <div class="font-medium">Python Programming for Kids</div>
              <div class="text-xs text-gray-600">Grades 8 to 12</div>
              <a class="mt-2 inline-block text-sm text-brand">View Details</a>
            </div>
            <div class="p-6 rounded-xl border bg-white">
              <div class="font-medium">Chess Classes for Kids</div>
              <div class="text-xs text-gray-600">Age 6 to 16</div>
              <a class="mt-2 inline-block text-sm text-brand">View Details</a>
            </div>
          </div>
        </div>
      </section>

      <AdvantagesSection />
      <MoneyBackGuarantee />
      <FAQAccordion />
    </main>
    
    <AppFooter />
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import AdvantagesSection from '../components/AdvantagesSection.vue'
import MoneyBackGuarantee from '../components/MoneyBackGuarantee.vue'
import FAQAccordion from '../components/FAQAccordion.vue'
import AppFooter from '../components/AppFooter.vue'
import { COMPANY_NAME } from '../constants'
const companyName = COMPANY_NAME
</script>



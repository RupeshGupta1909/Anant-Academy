<template>
  <div>
    <header class="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div class="flex items-center justify-between gap-3 min-h-10">
          <!-- Logo + name: always visible, can shrink on mobile -->
          <router-link to="/" class="flex items-center gap-2 min-w-0 flex-shrink">
            <img src="/icon.ico" alt="Anant Academy Logo" class="h-8 w-8 sm:h-9 sm:w-9 rounded-lg flex-shrink-0" />
            <span class="text-base sm:text-xl font-semibold text-gray-900 truncate">{{ companyName }}</span>
          </router-link>

          <!-- Desktop: buttons in header -->
          <div class="hidden md:flex items-center gap-3 flex-shrink-0">
            <router-link to="/join-as-tutor" class="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-50 text-sm whitespace-nowrap">Join as Tutor</router-link>
            <router-link to="/book-demo" class="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-brand text-white font-medium hover:bg-brand-dark text-sm whitespace-nowrap">Book a Demo</router-link>
          </div>

          <!-- Mobile: 3-bar menu button -->
          <button
            type="button"
            class="md:hidden flex-shrink-0 p-2.5 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
            :aria-label="'Open menu'"
            @click="menuOpen = !menuOpen"
          >
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path v-if="!menuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Mobile: dropdown menu -->
        <div
          v-show="menuOpen"
          class="md:hidden mt-3 pt-3 border-t border-gray-200 flex flex-col gap-2"
        >
          <router-link to="/book-demo" class="block w-full text-center py-3 rounded-lg bg-brand text-white font-medium hover:bg-brand-dark" @click="menuOpen = false">Book a Demo</router-link>
          <router-link to="/join-as-tutor" class="block w-full text-center py-3 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-50" @click="menuOpen = false">Join as Tutor</router-link>
        </div>
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
            <router-link to="/book-demo" class="mt-2 inline-block px-3 py-1.5 rounded-md bg-brand text-white text-xs font-medium hover:bg-brand-dark transition-colors">1-on-1 Classes</router-link>
          </div>
          <div class="p-4 rounded-xl border bg-white text-center">
            <div class="text-sm font-medium">Online Math</div>
            <div class="text-xs text-gray-600">Tuition for Class 12</div>
            <router-link to="/book-demo" class="mt-2 inline-block px-3 py-1.5 rounded-md bg-brand text-white text-xs font-medium hover:bg-brand-dark transition-colors">1-on-1 Classes</router-link>
          </div>
          <div class="p-4 rounded-xl border bg-white text-center">
            <div class="text-sm font-medium">Online Physics</div>
            <div class="text-xs text-gray-600">Tuition for Class 11</div>
            <router-link to="/book-demo" class="mt-2 inline-block px-3 py-1.5 rounded-md bg-brand text-white text-xs font-medium hover:bg-brand-dark transition-colors">1-on-1 Classes</router-link>
          </div>
          <div class="p-4 rounded-xl border bg-white text-center">
            <div class="text-sm font-medium">Online Physics</div>
            <div class="text-xs text-gray-600">Tuition for Class 12</div>
            <router-link to="/book-demo" class="mt-2 inline-block px-3 py-1.5 rounded-md bg-brand text-white text-xs font-medium hover:bg-brand-dark transition-colors">1-on-1 Classes</router-link>
          </div>
          <div class="p-4 rounded-xl border bg-white text-center">
            <div class="text-sm font-medium">Online Chemistry</div>
            <div class="text-xs text-gray-600">Tuition for Class 11</div>
            <router-link to="/book-demo" class="mt-2 inline-block px-3 py-1.5 rounded-md bg-brand text-white text-xs font-medium hover:bg-brand-dark transition-colors">1-on-1 Classes</router-link>
          </div>
          <div class="p-4 rounded-xl border bg-white text-center">
            <div class="text-sm font-medium">Online Chemistry</div>
            <div class="text-xs text-gray-600">Tuition for Class 12</div>
            <router-link to="/book-demo" class="mt-2 inline-block px-3 py-1.5 rounded-md bg-brand text-white text-xs font-medium hover:bg-brand-dark transition-colors">1-on-1 Classes</router-link>
          </div>
          <div class="p-4 rounded-xl border bg-white text-center">
            <div class="text-sm font-medium">Online Biology</div>
            <div class="text-xs text-gray-600">Tuition for Class 11</div>
            <router-link to="/book-demo" class="mt-2 inline-block px-3 py-1.5 rounded-md bg-brand text-white text-xs font-medium hover:bg-brand-dark transition-colors">1-on-1 Classes</router-link>
          </div>
          <div class="p-4 rounded-xl border bg-white text-center">
            <div class="text-sm font-medium">Online Biology</div>
            <div class="text-xs text-gray-600">Tuition for Class 12</div>
            <router-link to="/book-demo" class="mt-2 inline-block px-3 py-1.5 rounded-md bg-brand text-white text-xs font-medium hover:bg-brand-dark transition-colors">1-on-1 Classes</router-link>
          </div>
        </div>
      </section>

      <section class="bg-gray-50 border-t border-b">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 text-center">Online Skills Classes for Kids</h2>
          <p class="mt-2 text-center text-gray-600 text-sm">Join our personalized 1-on-1 classes in coding and chess, taught by expert teachers</p>
          <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="p-6 rounded-xl border bg-white relative">
              <span class="absolute top-2 right-2 px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Coming Soon</span>
              <div class="font-medium">Scratch Programming Classes for Kids</div>
              <div class="text-xs text-gray-600">Grades 4 to 5</div>
              <button disabled class="mt-2 inline-block text-sm text-gray-400 cursor-not-allowed">View Details</button>
            </div>
            <div class="p-6 rounded-xl border bg-white relative">
              <span class="absolute top-2 right-2 px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Coming Soon</span>
              <div class="font-medium">Web Development for Kids</div>
              <div class="text-xs text-gray-600">Grades 6 to 8</div>
              <button disabled class="mt-2 inline-block text-sm text-gray-400 cursor-not-allowed">View Details</button>
            </div>
            <div class="p-6 rounded-xl border bg-white relative">
              <span class="absolute top-2 right-2 px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Coming Soon</span>
              <div class="font-medium">Python Programming for Kids</div>
              <div class="text-xs text-gray-600">Grades 8 to 12</div>
              <button disabled class="mt-2 inline-block text-sm text-gray-400 cursor-not-allowed">View Details</button>
            </div>
            <div class="p-6 rounded-xl border bg-white relative">
              <span class="absolute top-2 right-2 px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Coming Soon</span>
              <div class="font-medium">Chess Classes for Kids</div>
              <div class="text-xs text-gray-600">Age 6 to 16</div>
              <button disabled class="mt-2 inline-block text-sm text-gray-400 cursor-not-allowed">View Details</button>
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
import { ref } from 'vue'
import HeroSection from '../components/HeroSection.vue'
import AdvantagesSection from '../components/AdvantagesSection.vue'
import MoneyBackGuarantee from '../components/MoneyBackGuarantee.vue'
import FAQAccordion from '../components/FAQAccordion.vue'
import AppFooter from '../components/AppFooter.vue'
import { COMPANY_NAME } from '../constants'

const companyName = COMPANY_NAME
const menuOpen = ref(false)
</script>



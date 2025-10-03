<template>
  <section class="bg-gradient-to-r from-indigo-50 to-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">Personalized live classes with India's best teachers</h1>
        <p class="mt-4 text-gray-700">Give your child access to an international-standard education with AnantAcademy. We empower kids with necessary skills that regular schools don't teach.</p>
        <div class="mt-4 flex flex-wrap gap-2 text-sm">
          <span class="px-3 py-1 rounded-full bg-white border text-gray-700">Math</span>
          <span class="px-3 py-1 rounded-full bg-white border text-gray-700">Physics</span>
          <span class="px-3 py-1 rounded-full bg-white border text-gray-700">Chemistry</span>
          <span class="px-3 py-1 rounded-full bg-white border text-gray-700">Biology</span>
        </div>
        <div class="mt-6 flex items-center gap-3">
          <router-link to="/book-demo" class="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-brand text-white font-medium hover:bg-brand-dark">Book a Demo Class</router-link>
          <a href="#one-on-one" class="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium">Learn more</a>
        </div>
        <p class="mt-2 text-xs text-gray-500">* Limited Spots Remaining</p>
      </div>
      <div class="hidden md:block">
        <img :src="heroSrc" alt="Hero" class="rounded-xl shadow-md object-cover w-full h-[360px]" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { HERO_IMAGE } from '../constants'
const heroSrc = HERO_IMAGE
</script>



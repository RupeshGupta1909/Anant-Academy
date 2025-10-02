<template>
  <section class="bg-white py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Trusted by section -->
      <div class="text-center mb-4">
        <p class="text-lg text-gray-800 mb-2">Trusted by</p>
        <div class="flex justify-center mb-2">
          <div class="flex space-x-1">
            <span class="text-yellow-400 text-2xl">★★★★★</span>
          </div>
        </div>
        <p class="text-4xl font-bold text-emerald-600 mb-2">{{ trustStats.students }} Students</p>
        <p class="text-gray-600">from {{ trustStats.countries }}</p>
      </div>

      <!-- Loved by students and parents -->
      <div class="mb-8">
        <h2 class="text-3xl font-extrabold text-gray-900 text-center mb-8">Loved by students and parents!</h2>
        
        <!-- Two column carousels -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Student feedback carousel -->
          <div>
            <h3 class="text-xl font-semibold text-gray-800 mb-6 text-center">Student Feedback</h3>
            <div class="bg-emerald-100 rounded-2xl p-8 relative">
              <p class="text-lg text-gray-800 leading-relaxed mb-4">
                "{{ currentStudentFeedback.text }}"
              </p>
              <p class="text-sm font-medium text-gray-600">- {{ currentStudentFeedback.name }}, {{ currentStudentFeedback.class }}</p>
              <div class="flex justify-center mt-6 space-x-2">
                <button 
                  v-for="(feedback, index) in studentFeedbacks" 
                  :key="feedback.id"
                  @click="currentStudentIndex = index"
                  :class="currentStudentIndex === index ? 'bg-emerald-600' : 'bg-emerald-300'"
                  class="w-3 h-3 rounded-full transition-colors"
                ></button>
              </div>
            </div>
          </div>

          <!-- Parent feedback carousel -->
          <div>
            <h3 class="text-xl font-semibold text-gray-800 mb-6 text-center">Parent Feedback</h3>
            <div class="bg-gray-50 rounded-2xl p-8 relative">
              <p class="text-lg text-gray-800 leading-relaxed mb-4">
                "{{ currentParentFeedback.text }}"
              </p>
              <p class="text-sm font-medium text-gray-600 text-center">{{ currentParentFeedback.name }}, {{ currentParentFeedback.location }}</p>
              <div class="flex justify-center mt-6 space-x-2">
                <button 
                  v-for="(feedback, index) in parentFeedbacks" 
                  :key="feedback.id"
                  @click="currentParentIndex = index"
                  :class="currentParentIndex === index ? 'bg-gray-600' : 'bg-gray-300'"
                  class="w-3 h-3 rounded-full transition-colors"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { STUDENT_FEEDBACKS, PARENT_FEEDBACKS, TRUST_STATS } from '../constants/feedback'

const studentFeedbacks = STUDENT_FEEDBACKS
const parentFeedbacks = PARENT_FEEDBACKS
const trustStats = TRUST_STATS

const currentStudentIndex = ref(0)
const currentParentIndex = ref(0)

const currentStudentFeedback = computed(() => studentFeedbacks[currentStudentIndex.value])
const currentParentFeedback = computed(() => parentFeedbacks[currentParentIndex.value])

// Auto-rotate carousels
setInterval(() => {
  currentStudentIndex.value = (currentStudentIndex.value + 1) % studentFeedbacks.length
}, 5000)

setInterval(() => {
  currentParentIndex.value = (currentParentIndex.value + 1) % parentFeedbacks.length
}, 6000)
</script>

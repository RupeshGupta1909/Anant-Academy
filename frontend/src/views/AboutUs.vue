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
        <h1 class="text-4xl font-bold text-gray-900 mb-8">About Us</h1>

        <div class="prose prose-lg max-w-none">
          <section class="mb-8">
            <p class="text-gray-700 mb-4">
              Anant Academy is a student-focused educational institute providing one-to-one personalized classes for students from Class 6 to Class 12. We believe that every student is unique, and effective learning happens when teaching is customized according to the student's pace, strengths, and academic needs.
            </p>
            <p class="text-gray-700 mb-4">
              Our goal is to build strong conceptual understanding, confidence, and academic excellence through focused individual attention and quality teaching.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p class="text-gray-700 mb-4">
              Our mission is to deliver high-quality personalized education that helps students:
            </p>
            <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Understand concepts clearly and deeply</li>
              <li>Improve academic performance</li>
              <li>Develop logical thinking and problem-solving skills</li>
              <li>Prepare confidently for school and competitive examinations</li>
            </ul>
            <p class="text-gray-700 mb-4">
              We emphasize concept clarity over rote learning, creating a stress-free and supportive learning environment.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Why Choose Anant Academy?</h2>
            <ul class="list-disc list-inside text-gray-700 space-y-2">
              <li>One-to-one personal attention</li>
              <li>Classes for Class 6th to 12th (CBSE & State Boards)</li>
              <li>Experienced and dedicated faculty</li>
              <li>Strong focus on fundamentals and clarity</li>
              <li>Regular assessments and doubt-solving</li>
              <li>Result-oriented and student-friendly teaching approach</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Subjects We Offer</h2>
            <ul class="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Physics</li>
              <li>Mathematics</li>
              <li>Chemistry</li>
              <li>Biology</li>
            </ul>
            <p class="text-gray-700 mb-4">
              Each subject is taught using a structured, step-by-step approach, starting from basics and progressing towards exam-oriented preparation.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Our Teaching Approach</h2>
            <p class="text-gray-700 mb-4">At Anant Academy, learning is:</p>
            <ul class="list-disc list-inside text-gray-700 space-y-2">
              <li>Concept-based and interactive</li>
              <li>Tailored to each student's learning pace</li>
              <li>Supported by regular practice and feedback</li>
              <li>Focused on long-term understanding and confidence building</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Founder & CEO</h2>
            <p class="text-gray-700 mb-4">
              Anant Academy is founded and led by
              <a
                :href="founderLinkedInUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-600 hover:text-blue-800 underline font-medium"
              >Nihal Kumar</a>, a professional engineer and passionate educator.
            </p>
            <p class="text-gray-700 mb-4">
              He is an alumnus of NIT Mizoram, holding a B.Tech degree in Electrical & Electronics Engineering (EEE), and a Gold Medalist. He is also an alumnus of Jawahar Navodaya Vidyalaya (JNV), Bahuar, Sonbhadra.
            </p>
            <p class="text-gray-700 mb-4">
              Nihal Kumar has served as an ex-faculty at Unacademy (Kota offline centre) and brings 4+ years of teaching experience in both offline and online modes, teaching students from Class 6 to Class 12.
            </p>
            <p class="text-gray-700 mb-4">
              With a strong belief in personalized learning and conceptual clarity, he established Anant Academy to provide focused one-to-one education that helps students build strong fundamentals and achieve long-term academic success.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">Join Anant Academy</h2>
            <p class="text-gray-700 mb-4">
              If you are looking for one-to-one personal tuition for Class 6 to Class 12, Anant Academy provides the right environment for focused learning and academic growth.
            </p>
            <ul class="list-none text-gray-700 space-y-2 mb-6">
              <li>📘 Personalized guidance</li>
              <li>🎯 Concept-based teaching</li>
              <li>📞 Book a free demo class today</li>
            </ul>
            <router-link
              to="/book-demo"
              class="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Book a Free Demo
            </router-link>
          </section>
        </div>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import AppFooter from '../components/AppFooter.vue'
import { COMPANY_NAME } from '../constants'

const companyName = COMPANY_NAME
const founderLinkedInUrl = 'https://www.linkedin.com/in/nknihalkumar'
</script>

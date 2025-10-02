<template>
  <section class="bg-white">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 text-center">Frequently Asked Questions</h2>
      <div class="mt-8 divide-y divide-gray-200 border rounded-xl bg-white">
        <details v-for="(item, idx) in items" :key="idx" class="group p-4">
          <summary class="flex cursor-pointer list-none items-center justify-between text-left">
            <span class="font-medium text-gray-900">{{ item.q }}</span>
            <span class="ml-4 text-gray-400 group-open:rotate-180 transition-transform">⌄</span>
          </summary>
          <p class="mt-2 text-gray-600">{{ item.a }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [
  { q: 'What devices do I need for classes?', a: 'A Laptop/PC with webcam and headphone, or a tablet/mobile with stable internet.' },
  { q: 'Which classes and subjects are available?', a: 'Classes 6–12 for Physics, Chemistry, Maths and Biology.' },
  { q: 'Are classes 1-on-1?', a: 'Yes, we offer 1-on-1 sessions and small-group batches.' },
  { q: 'How do I book a demo?', a: 'Click Book a Demo on the homepage and submit the form with your preferred date/time.' },
]
</script>



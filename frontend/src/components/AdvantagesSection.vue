<template>
  <section class="bg-indigo-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div class="hidden md:block">
        <img src="/advantage.jpg" alt="Advantages" class="rounded-xl shadow-md object-cover w-full h-[360px]" />
      </div>
      <div>
        <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">LearnNest Advantages</h2>
        <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div class="flex items-start gap-3">
            <span class="h-9 w-9 grid place-items-center rounded-full bg-indigo-100 text-indigo-700">👨‍🏫</span>
            <div>
              <div class="font-semibold">Top Expert Teachers</div>
              <p class="text-sm text-gray-600">Learn from India's best teachers</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <span class="h-9 w-9 grid place-items-center rounded-full bg-indigo-100 text-indigo-700">👥</span>
            <div>
              <div class="font-semibold">1‑on‑1 or Small Group Batches</div>
              <p class="text-sm text-gray-600">Smaller batch size, more personal attention</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <span class="h-9 w-9 grid place-items-center rounded-full bg-indigo-100 text-indigo-700">🎥</span>
            <div>
              <div class="font-semibold">Interactive Live Classes</div>
              <p class="text-sm text-gray-600">Real time live classes, just like offline classroom</p>
            </div>
          </div>
          <div class="flex items-start gap-3">
            <span class="h-9 w-9 grid place-items-center rounded-full bg-indigo-100 text-indigo-700">📝</span>
            <div>
              <div class="font-semibold">Assessments</div>
              <p class="text-sm text-gray-600">Quizzes, assessments, reports to evaluate outcomes</p>
            </div>
          </div>
        </div>
        <div class="mt-8">
          <router-link to="/book-demo" class="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-brand text-white font-medium hover:bg-brand-dark">Book a Demo Class</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// purely presentational
</script>



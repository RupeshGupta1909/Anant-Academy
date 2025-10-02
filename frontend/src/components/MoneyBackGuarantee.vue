<template>
  <section class="bg-blue-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div class="hidden md:block md:order-2">
        <img src="/guarantee.jpg" alt="Money Back Guarantee" class="rounded-xl shadow-md object-contain w-full h-[360px]" />
      </div>
      <div class="md:order-1">
        <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">Not Satisfied? 100% Risk-Free Money Back Guarantee!</h2>
        <p class="mt-4 text-gray-700">We will put every effort to provide you best learning experience ever. Still, for some reason, if you are not satisfied with our teachers, we will return the rest of the money within 14 days after your purchase.</p>
        <div class="mt-6">
          <router-link to="/book-demo" class="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-brand text-white font-medium hover:bg-brand-dark">Book a Demo Class</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// purely presentational
</script>

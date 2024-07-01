<script setup>
const letters = 'ABCDEFGHIJRKMNOPQRSTUVWXYZ'
</script>

<template>
  <div class="flex justify-center gap-2 mt-2">
    <router-link v-for="letter of letters.split('')" :to="{name: 'byLetter', params: { letter }}" :key="letter">
      {{ letter }}
    </router-link>
  </div>
</template>
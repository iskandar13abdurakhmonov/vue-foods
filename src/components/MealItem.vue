<script setup>

import YouTubeButton from '../components/YouTubeButton.vue'

const { meal } = defineProps({
  meal: Object,
  required: true
})
</script>

<template>
  <div class="bg-white shadow rounded-xl">
    <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
      <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl h-48 w-full object-cover">
    </router-link>
    <div class="p-3">
      <h3 class=" py-2 font-semibold">{{ meal.strMeal }}</h3>
      <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi consequatur culpa cumque
        doloribus et
        id, illum iure libero minus, molestiae nulla odio omnis provident quam quidem quos reiciendis vitae!</p>
      <div class="flex items-center justify-between">
        <YouTubeButton :href="meal.strYoutube"/>
      </div>
    </div>
  </div>
</template>
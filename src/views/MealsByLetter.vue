<script setup>
import {computed, onMounted, watch} from "vue";
import {useRoute} from "vue-router";
import store from "../store/index.js";
import MealItem from '../components/MealItem.vue';

const route = useRoute()

const letters = 'ABCDEFGHIJRKMNOPQRSTUVWXYZ'
const meals = computed(() => store.state.mealsByLetter)

watch(route, () => {
  store.dispatch('searchMealsLetter', route.params.letter)
})

onMounted(() => {
  store.dispatch('searchMealsLetter', route.params.letter)
})
</script>

<template>
  <div class="flex justify-center gap-2 mt-2">
    <router-link v-for="letter of letters.split('')" :to="{name: 'byLetter', params: { letter }}" :key="letter">
      {{ letter }}
    </router-link>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem v-for="meal of meals" :meal="meal" key="meal.idMeal"/>
  </div>
</template>
<script setup>

import {onMounted, ref} from "vue";
import axiosClient from "../axiosClient.js";

const ingredients = ref([])

onMounted(() => {
  axiosClient.get('list.php?c=list').then(({data}) => {
    ingredients.value = data.meals
  })
})

</script>

<template>
  <div>
    <div v-for="ingredient of ingredients" :key="ingredient.idMeal">
      <h3>{{ ingredient.strIngredient }}</h3>
      <p>{{ ingredient.description }}</p>
    </div>
  </div>
</template>
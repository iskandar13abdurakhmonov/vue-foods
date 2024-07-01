<script setup>
import {computed, onMounted, ref, watch} from "vue";
import store from "../store/index.js";
import {useRoute, useRouter} from 'vue-router';
import YouTubeButton from "../components/YouTubeButton.vue";
import MealItem from "../components/MealItem.vue";

const route = useRoute();
const router = useRouter();

const keyword = ref('');
const meals = computed(() => store.state.searchedMeals);
console.log(meals)

function searchMeals() {
  store.dispatch('searchMeals', keyword.value);
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});

watch(keyword, (newKeyword) => {
  if (newKeyword) {
    router.push({name: route.name, params: {name: newKeyword}});
  }
  searchMeals();
});

</script>

<template>
  <div class="p-8 pb-0">
    <input type="text" class="rounded border-2 border-gray-200 w-full" v-model="keyword"
           placeholder="Search for Meals" @change="searchMeals"/>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem v-for="meal of meals" :meal="meal" key="meal.idMeal"/>
  </div>
</template>

<script setup>
import axiosClient from "../axiosClient.js";
import {onMounted, ref} from "vue";

const ingredients = ref([])

onMounted(async () => {
  const response = await axiosClient.get('list.php?i=list')

  ingredients.value = response.data
})

</script>

<template>
  <div class="flex flex-col p-8 ">
    <div>
      <input type="text" class="rounded border-2 border-gray-200 w-full" placeholder="Search for Meals"/>
    </div>
  </div>
</template>
import axiosClient from "../axiosClient.js";

export function searchMeals({commit}, keyword) {
    axiosClient.get(`search.php?s=${keyword}`).then(({data}) => {
        commit('setSearchedMeals', data.meals)
    })
}

export function searchMealsLetter({commit}, letter) {
    axiosClient.get(`search.php?f=${letter}`).then(({data}) => {
        commit('setMealsByLetter', data.meals)
    })
}

export function searchMealsIngredient({commit}, ingredient) {
    axiosClient.get(`filter.php?i=${ingredient}`).then(({data}) => {
        commit('setMealsByIngredients', data.meals)
    })
}

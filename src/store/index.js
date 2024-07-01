import { createStore } from 'vuex'
import state from './state.js'
import * as actions from './actions.js'
import * as getters from './getters.js'
import * as mutations from './mutations.js'

const store = createStore({
    state, actions, mutations, getters,
})

export default  store
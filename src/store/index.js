import Vue from 'vue'
import Vuex from 'vuex'
import bridge from '../bridge/dispatch' // named bridge for convinience

Vue.use(Vuex)

// I usually modularize the store, 
// but since we are only dealing with tasks, 
// we can handle them here
export default new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    setAllTasks(state, payload) {
      state.tasks = payload;
    }
  },
  actions: {
    setAllTasks(context, payload) {
      context.commit('setAllTasks', payload);
    },
    createTask(context, payload) {
      bridge.createTask(payload);
    },
    readAllTasks() {
      bridge.readAllTasks();
    },
    updateTask(context, payload) {
      bridge.updateTask(payload);
    },
    deleteTask(context, payload) {
      bridge.deleteTask(payload);
    },
  },
  modules: {
  }
})

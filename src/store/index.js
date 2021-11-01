import Vue from 'vue'
import Vuex from 'vuex'
import bridge from '../bridge/dispatch' // named bridge for convinience
import { setSelected, clearSelected, portSelected } from './utils'

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
      state.tasks = portSelected(state.tasks, payload)
    },
    selectTask(state, payload) {
      state.tasks = setSelected(payload, state.tasks)
    },
    clearSelected(state) {
      state.tasks = clearSelected(state.tasks)
    }
  },
  actions: {
    setAllTasks(context, payload) {
      context.commit('setAllTasks', payload);
    },
    createTask(context, payload) {
      context.commit('clearSelected');
      bridge.createTask(payload);
    },
    readAllTasks() {
      bridge.readAllTasks();
    },
    updateTask(context, payload) {
      context.commit('selectTask', payload.id);
      bridge.updateTask(payload);
    },
    deleteTask(context, payload) {
      context.commit('clearSelected');
      bridge.deleteTask(payload);
    },
    clearSelected(context) {
      context.commit('clearSelected');
    },
    setSelected(context, payload) {
      context.commit('selectTask', payload);
    }
  },
  modules: {
  }
})

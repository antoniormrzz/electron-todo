const { ipcRenderer } = window.require("electron");
import store from '../store';

export default function registerListeners() {
  ipcRenderer.on('storage:all', (event, arg) => {
    store.dispatch('setAllTasks', arg)
  })
}
const { ipcRenderer } = window.require("electron");
import store from '../store';

export default function registerListeners(EventBus) {
  ipcRenderer.on('storage:all', (event, arg) => {
    store.dispatch('setAllTasks', arg)
  })
  ipcRenderer.on('display:shortcuts', () => {
    alert(`
    List of keyboard shortcuts:

    Edit & New pages:
    Save: ctrl/command + S

    Selected task:
    Select up: up arrow
    Select down: down arrow
    Toggle complete: enter/return
    Edit: ctrl/command + E
    Delete: ctrl/command + delete
    `)
  })
  ipcRenderer.on('key:save', () => {
    EventBus.$emit('key:save');
  })
  ipcRenderer.on('key:up', () => {
    EventBus.$emit('key:up');
  })
  ipcRenderer.on('key:down', () => {
    EventBus.$emit('key:down');
  })
  ipcRenderer.on('key:del', () => {
    EventBus.$emit('key:del');
  })
  ipcRenderer.on('key:edit', () => {
    EventBus.$emit('key:edit');
  })
  ipcRenderer.on('key:toggle-complete', () => {
    EventBus.$emit('key:toggle-complete');
  })
}
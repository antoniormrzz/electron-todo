// Send events to electron process
const { ipcRenderer } = window.require("electron");

function createTask(task) {
  ipcRenderer.send('storage:create', task)
}

function readAllTasks() {
  ipcRenderer.send('storage:all')
}

function updateTask(task) {
  ipcRenderer.send('storage:update', task)
}

function deleteTask(id) {
  ipcRenderer.send('storage:delete', id)
}

module.exports = {
  createTask,
  readAllTasks,
  updateTask,
  deleteTask,
}
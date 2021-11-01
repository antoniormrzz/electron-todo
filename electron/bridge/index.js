const { ipcMain } = require('electron');

module.exports = (taskRepo) => {
  // OCD closure
  // this is not optimized to it's best, ideally we would not
  // get all tasks after each transaction, we would update the list
  // based on the result of the transaction and the object in memory instead.
  // e.g. if edit successful, just modify UI state based on edit object.
  const store = taskRepo;
  ipcMain.on('storage:create', async (event, arg) => {
    await store.create(arg);
    const allTasks = await store.getAll();
    event.reply('storage:all', allTasks);
  });
  ipcMain.on('storage:all', async (event) => {
    const allTasks = await store.getAll();
    event.reply('storage:all', allTasks);
  });
  ipcMain.on('storage:update', async (event, arg) => {
    await store.update(arg);
    const allTasks = await store.getAll();
    event.reply('storage:all', allTasks);
  });
  ipcMain.on('storage:delete', async (event, arg) => {
    await store.delete(arg);
    const allTasks = await store.getAll();
    event.reply('storage:all', allTasks);
  });
}
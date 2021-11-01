const { app, BrowserWindow, globalShortcut } = require('electron');
const path = require('path');
const initDB = require('./store');
const initBridge = require('./bridge');
const initMenu = require('./Menu');
const emitter = require('./bridge/emitter');
const registerShortcuts = require('./utils/shortcuts');
let _dao;
let emit;

async function initAPP() {
  try {
    const { dao, taskRepo } = await initDB(path.resolve(__dirname, '..', 'database.db'));
    initBridge(taskRepo);
    _dao = dao;
    const win = new BrowserWindow({
      height: 600,
      width: 800,
      webPreferences: {
        nodeIntegration: true,
        enableRemoteModule: true,
        contextIsolation: false
      },
      title: 'ToDo',
    });
    emit = emitter(win);
    initMenu(emit);
    win.setTitle('ToDo');
    win.loadFile(path.join(__dirname, '..', 'dist', 'index.html'));
    win.webContents.openDevTools();
  } catch (error) {
    console.log(error);
    app.quit();
  }

}

app.whenReady().then(() => {
  registerShortcuts(globalShortcut,emit);
}).then(initAPP);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    _dao.close();
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    initAPP();
  }
});

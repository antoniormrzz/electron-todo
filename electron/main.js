const { app, BrowserWindow } = require('electron');
const path = require('path');
const initDB = require('./store');
const initBridge = require('./bridge');
let _dao;

async function initAPP() {
  try {
    const { dao, taskRepo } = await initDB(path.resolve(__dirname, '..', 'database.db'));
    initBridge(taskRepo);
    _dao = dao;
    const win = new BrowserWindow({
      height: 600,
      width: 800,
      webPreferences: {
        nodeIntegration: true
      },
      title: 'ToDo',
    });

    win.setTitle('ToDo');
    win.loadFile(path.join(__dirname, '..', 'dist', 'index.html'));
    win.webContents.openDevTools();
  } catch (error) {
    console.log(error);
    app.quit();
  }

}

app.whenReady().then(initAPP);

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
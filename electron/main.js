const { app, BrowserWindow } = require('electron');
const path = require('path');
const initDB = require('./store');
const initBridge = require('./bridge');
const initMenu = require('./Menu');
const emitter = require('./bridge/emitter');
let _dao;
let emit;

async function initAPP() {
  try {
    const { dao, taskRepo } = await initDB(path.resolve(app.getPath('userData'), 'database.db'));
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
    win.loadFile(path.join(__dirname, '..', 'dist', 'index.html'));
    win.setTitle('ToDo');
    // win.webContents.openDevTools();
  } catch (error) {
    console.log(error);
    app.quit();
  }

}

app.whenReady().then(initAPP);

// macOS apps don't close when the window is closed
// ideally dao would not close with this event,
// instead we would split init function into two
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
  _dao.close();
});

// macOS apps don't close when the window is closed
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    initAPP();
  }
});

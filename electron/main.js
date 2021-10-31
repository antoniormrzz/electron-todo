const { app, BrowserWindow } = require('electron');
const sqlite3 = require('sqlite3');
const path = require('path');
const db = new sqlite3.Database(path.join(__dirname,'..','database.db'));

function createWindow() {
  const win = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      nodeIntegration: true
    },
    title: 'My App',
  });

  win.setTitle('My App');
  win.loadFile(path.join(__dirname,'..','dist','index.html'));
  win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    db.close();
    app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
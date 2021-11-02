// emitter wrapper to emit key events to UI
module.exports = function (mw) {
  let mainWindow = mw;
  return {
    displayShortcuts: () => {
      mainWindow.webContents.send('display:shortcuts');
    }
    , keySave: () => {
      mainWindow.webContents.send('key:save');
    }
    , keyArrowUp: () => {
      mainWindow.webContents.send('key:up');
    }
    , keyArrowDown: () => {
      mainWindow.webContents.send('key:down');
    }
    , keyDel: () => {
      mainWindow.webContents.send('key:del');
    }
    , keyEdit: () => {
      mainWindow.webContents.send('key:edit');
    }
    , keyToggleComplete: () => {
      mainWindow.webContents.send('key:toggle-complete');
    }
  }
}
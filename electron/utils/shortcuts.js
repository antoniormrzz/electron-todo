module.exports = function (globalShortcut,emit){
  globalShortcut.register('CommandOrControl+S', () => {
    // save
    emit.keySave();
  })
  globalShortcut.register('Up', () => {
    // up
    emit.keyArrowUp();
  })
  globalShortcut.register('Down', () => {
    // down
    emit.keyArrowDown();
  })
  globalShortcut.register('CommandOrControl+Delete', () => {
    // edit
    emit.keyDel();
  })
  globalShortcut.register('CommandOrControl+S', () => {
    // delete
    emit.keyEdit();
  })
  globalShortcut.register('Enter', () => {
    // complete
    emit.keyToggleComplete();
  })
}







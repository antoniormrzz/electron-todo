// App menu template with shortcuts
const { Menu } = require('electron');

module.exports = function initMenu(emit) {
  const template = [
    ...(process.platform === 'darwin' ? [{
      label: 'ToDo',
      submenu: [
        { role: 'quit' }
      ]
    }] : []),
    {
      label: 'Actions',
      submenu: [{
        label: 'Save', 
        accelerator: 'CommandOrControl+S',
        click: async () => {
          emit.keySave();
        }
      },{
        label: 'Select up', 
        accelerator: 'Up',
        click: async () => {
          emit.keyArrowUp();
        }
      },{
        label: 'Select down', 
        accelerator: 'Down',
        click: async () => {
          emit.keyArrowDown();
        }
      },{
        label: 'Delete task', 
        accelerator: 'CommandOrControl+Delete',
        click: async () => {
          emit.keyDel();
        }
      },{
        label: 'Edit task', 
        accelerator: 'CommandOrControl+E',
        click: async () => {
          emit.keyEdit();
        }
      },{
        label: 'Toggle completed', 
        accelerator: 'Enter',
        click: async () => {
          emit.keyToggleComplete();
        }
      }
      ]
    },
    {
      label: 'More',
      submenu: [{
        label: 'Shortcuts',
        click: async () => {
          emit.displayShortcuts();
        }
      },
      process.platform === 'darwin' ? { role: 'close' } : { role: 'quit' }
      ]
    }
  ]

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}

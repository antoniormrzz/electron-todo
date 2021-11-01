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

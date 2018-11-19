const { app, BrowserWindow, Menu } = require('electron')

let win

function createWindow () {
  win = new BrowserWindow({ width: 800, height: 600 })

  win.loadURL('https://www.windows93.net')

  setMainMenu()

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

function setMainMenu() {
  const template = [
    {
      label: 'Scripts',
      submenu: [
        {
          label: 'ThemeMaster by PhantomDoom741',
          click() {
              win.webContents.executeJavaScript('var script = document.createElement(\"script\"); script.src = \'https://cdn.jsdelivr.net/gh/PhantomDoom741/ThemeMaster/thminstaller.js\'; document.head.appendChild(script);')
          }
        }
      ]
    }
  ];
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

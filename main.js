const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')
const shell = require('electron').shell

function createWindow () {
  const win = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('src/index.html')
  
  
  win.webContents.openDevTools()
  
  const modal = new BrowserWindow({width: 500, height: 250})
  modal.loadFile('src/authors.html')

  let menu = Menu.buildFromTemplate([
    {
      label: 'Menu',
      submenu: [
        {
          label: 'Awtorlar',
          click() {() => modal.show}
        },
        { type: 'separator' },
        {
          label: 'Çykmak',
          click() { app.quit() }
        }
      ]
    }
  ])

  Menu.setApplicationMenu(menu);
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

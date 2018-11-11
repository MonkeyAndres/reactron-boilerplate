const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')
const {
  default: installExtension,
  REACT_DEVELOPER_TOOLS,
  REDUX_DEVTOOLS
} = require('electron-devtools-installer')

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, '../assets/icons/main.ico')
  })

  console.log('Electron running...')

  if (isDev) {
    installExtension(REACT_DEVELOPER_TOOLS)
      .then(installExtension(REDUX_DEVTOOLS)) // Delete if not using Redux
      .then(name => {
        console.log(`Added extension ${name}.`)
        mainWindow.loadURL(`http://localhost:1234/`)
      })
      .catch(console.log)
  } else {
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'))
  }

  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function() {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function() {
  if (mainWindow === null) {
    createWindow()
  }
})

const { app, BrowserWindow } = require('electron')
const store = require('electron-settings');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow() {
  var windowState = store.get('window');
  // Create the browser window.
  win = new BrowserWindow({
    x: windowState && windowState.bounds.x || undefined,
    y: windowState && windowState.bounds.y || undefined,
    width: windowState && windowState.bounds.width || 800,
    height: windowState && windowState.bounds.height || 600,
    title: "Kassa",
    show: false
  })

  if (windowState && windowState.isMaximized) {
    win.maximize();
  }

  // and load the index.html of the app.
  win.loadFile('index.html')

  // Open the DevTools.
  //win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })

  // Show when ready, from https://blog.avocode.com/4-must-know-tips-for-building-cross-platform-electron-apps-f3ae9c2bffff
  win.on('ready-to-show', function () {
    win.show();
    win.focus();
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// Emitted before the application starts closing its windows.
app.on('before-quit', () => {

  var max = win.isMaximized();
  store.set('window', { isMaximized: max });

  var bounds = win.getBounds();
  store.set('window.bounds', {
    x: bounds && bounds.x,
    y: bounds && bounds.y,
    width: bounds && bounds.width,
    height: bounds && bounds.height,
  })
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

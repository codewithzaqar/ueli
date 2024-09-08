var { app, globalShortcut, BrowserWindow } = require('electron')

var mainWindow = null

app.on('window-all-closed', function() {
    if(process.platform != 'darwin') {
        app.quit()
    }
})

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        //frame: false
    })

    mainWindow.loadURL('file://' + __dirname + '/index.html')

    mainWindow.on('closed', function() {
        mainWindow = null
    })

    globalShortcut.register('alt+space', function () {
        if(mainWindow.isVisible())
            mainWindow.hide()
        else
            mainWindow.show()
    })
})
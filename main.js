'use strict';

const {app, BrowserWindow, dialog} = require('electron');
const path = require('path');
const url = require('url');
const tinycolor = require("tinycolor2");


app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

let mainWindow;
module.exports.mainWindow = mainWindow;

app.on('ready', function(){
    mainWindow = new BrowserWindow({
        icon: path.join(__dirname, 'icon.png'),
        backgroundColor: '#2e2c29', 
        minHeight: 580, minWidth: 900, 
        maxHeight: 580, maxWidth: 900, 
        frame: false, 
        show: false
    });

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    mainWindow.once('ready-to-show', function() {
      mainWindow.show()
    });

    // mainWindow.openDevTools();
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
});
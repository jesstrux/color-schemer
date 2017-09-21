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
app.on('ready', function(){
    mainWindow = new BrowserWindow({minHeight: 580, minWidth: 900, maxHeight: 580, maxWidth: 900, frame: false});
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    // mainWindow.openDevTools();
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
});
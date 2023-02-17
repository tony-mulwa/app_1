require("dotenv").config();
const path = require("node:path");
const { app, BrowserWindow } = require("electron");

// const debug_mode = true ? process.env.DEV_MODE === "true" : false;
const debug_mode = false;
const isMac = true ? process.platform === "darwin" : false;

// mainWindows
function createMainWindow() {
  const mainWindow = new BrowserWindow({
    width: debug_mode ? 800 : 800,
    height: 600,
  });

  mainWindow.loadFile(path.join(__dirname, "src/templates/index.html"));

  // openDevTools
  if (debug_mode) mainWindow.webContents.openDevTools();
}

// start app
app.whenReady().then(() => {
  createMainWindow();

  //   check if there's no open window
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });
});

// close all windows(windows & linux)
app.on("window-all-closed", () => {
  if (!isMac) app.quit();
});

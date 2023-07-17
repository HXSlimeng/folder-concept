const { contextBridge, ipcRenderer } = require("electron");
contextBridge.exposeInMainWorld("ELEC", {
  minimize: () => ipcRenderer.send("minimize"),
});

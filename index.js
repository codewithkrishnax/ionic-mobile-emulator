import { app, BrowserWindow } from "electron";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let win;

app.whenReady().then(() => {
    win = new BrowserWindow({
        width: 430,
        height: 680,
        transparent: true, // ✅ Transparent window
        frame: false,      // ✅ No title bar / border
        resizable: true,
        movable:true,
        backgroundColor: "#00000000",
        center: true,
        webPreferences: {
            webviewTag: true,         // ✅ enable <webview>
            contextIsolation: true,
            sandbox: false
        },
    });

    win.loadFile("index.html");
    // win.webContents.openDevTools(); // optional

    win.setMenuBarVisibility(false);
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});

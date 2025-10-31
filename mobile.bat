@echo off
:: ===============================================
:: Ionic Mobile Emulator Launcher
:: Author: CodeWithKrishna
:: ===============================================

echo.
echo 🚀 Launching Ionic Mobile Emulator...
echo.

:: Optional: check if ionic server is running
echo Checking if Ionic server (http://localhost:8100) is live...
ping -n 2 127.0.0.1 >nul

:: Start the Electron emulator
cd /d "%~dp0"
npm start

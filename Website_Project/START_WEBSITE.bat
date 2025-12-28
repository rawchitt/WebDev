@echo off
cls
echo ========================================
echo   Lewis Hamilton Website Launcher
echo ========================================
echo.

REM Check if port 8000 is already in use
netstat -ano | findstr :8000 | findstr LISTENING >nul
if %errorlevel% equ 0 (
    echo WARNING: Port 8000 is already in use!
    echo Please close any other servers first.
    echo.
    pause
    exit /b 1
)

echo Starting local server on port 8000...
echo.

REM Start server in a new window
start "Lewis Hamilton Server" /MIN python -m http.server 8000

REM Wait for server to start (using ping as a timer workaround)
ping 127.0.0.1 -n 4 > nul

REM Open browser
echo Opening website in your browser...
start "" http://localhost:8000/index.html

echo.
echo ========================================
echo SUCCESS! Server is running!
echo ========================================
echo.
echo Your website is now open in the browser at:
echo http://localhost:8000/index.html
echo.
echo The server is running in a minimized window.
echo.
echo To STOP the server:
echo   Close the "Lewis Hamilton Server" window
echo   OR run: taskkill /F /IM python.exe
echo ========================================
echo.
pause

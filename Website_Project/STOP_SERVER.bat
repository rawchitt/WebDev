@echo off
echo ========================================
echo   Stopping All Python Servers
echo ========================================
echo.

REM Check if any Python servers are running
netstat -ano | findstr :8000 | findstr LISTENING >nul
if %errorlevel% neq 0 (
    echo No servers found running on port 8000.
    echo.
    pause
    exit /b 0
)

echo Found servers running on port 8000:
netstat -ano | findstr :8000 | findstr LISTENING
echo.

echo Stopping all Python processes...
taskkill /F /IM python.exe 2>nul

if %errorlevel% equ 0 (
    echo.
    echo SUCCESS! All Python servers stopped.
) else (
    echo.
    echo No Python processes were running.
)

echo.
pause

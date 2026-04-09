@echo off
echo.
echo  ╔══════════════════════════════╗
echo  ║         NEXUS  v1.0          ║
echo  ╚══════════════════════════════╝
echo.
echo  Starting Nexus...
echo.

:: Start backend
echo  [1/2] Starting backend (port 8000)...
start "Nexus Backend" cmd /k "cd backend && pip install -r requirements.txt -q && uvicorn main:app --reload --port 8000"

timeout /t 3 /nobreak >nul

:: Start frontend
echo  [2/2] Starting frontend (port 3000)...
start "Nexus Frontend" cmd /k "cd frontend && npm install --silent && npm run dev"

timeout /t 4 /nobreak >nul

:: Open browser
echo.
echo  Opening Nexus in your browser...
start http://localhost:3000

echo.
echo  Nexus is running.
echo  Backend: http://localhost:8000
echo  Frontend: http://localhost:3000
echo.
echo  Close the backend and frontend windows to stop Nexus.
pause

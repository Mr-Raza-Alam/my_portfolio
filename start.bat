@echo off
echo Starting My Portfolio Project...

echo Starting Backend Server...
start cmd /k "cd backend && node server.js"

echo Starting Frontend Server...
start cmd /k "cd frontend && npm run dev"

echo Both servers have been launched in separate terminal windows!

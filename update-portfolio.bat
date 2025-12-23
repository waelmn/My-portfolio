@echo off
echo Updating portfolio...

:: 1️⃣ Stage all changes
git add .

:: 2️⃣ Commit with a message (change text if you want)
set /p msg=Enter commit message: 
git commit -m "%msg%"

:: 3️⃣ Pull latest changes from GitHub
git pull origin main --rebase

:: 4️⃣ Push to GitHub
git push origin main

:: 5️⃣ Deploy React app to GitHub Pages
npm run deploy

echo Portfolio updated and deployed successfully!
pause

# Test Production Build Script for Windows
Write-Host "🧪 Testing Production Build for Samad Nursing Home" -ForegroundColor Cyan

# Step 1: Build Backend
Write-Host "Step 1: Building Backend..." -ForegroundColor Yellow
Set-Location "server"
npm run build
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Backend build successful" -ForegroundColor Green
} else {
    Write-Host "❌ Backend build failed" -ForegroundColor Red
    exit 1
}

# Step 2: Build Frontend
Write-Host "Step 2: Building Frontend..." -ForegroundColor Yellow
Set-Location "../client"
npm run build
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Frontend build successful" -ForegroundColor Green
} else {
    Write-Host "❌ Frontend build failed" -ForegroundColor Red
    exit 1
}

# Step 3: Type Checking
Write-Host "Step 3: Type Checking..." -ForegroundColor Yellow
Set-Location "../server"
npm run type-check
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Backend type check passed" -ForegroundColor Green
} else {
    Write-Host "❌ Backend type check failed" -ForegroundColor Red
    exit 1
}

Set-Location "../client"
npx tsc --noEmit
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Frontend type check passed" -ForegroundColor Green
} else {
    Write-Host "❌ Frontend type check failed" -ForegroundColor Red
    exit 1
}

Write-Host "🎉 All tests passed! Ready for deployment." -ForegroundColor Green
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Copy env.snh to .env.snh and configure variables"
Write-Host "2. Push to GitHub"
Write-Host "3. Deploy backend to Render"
Write-Host "4. Deploy frontend to Vercel"
Write-Host "5. Set environment variables in deployment platforms"
Write-Host "6. Test the live deployment" 
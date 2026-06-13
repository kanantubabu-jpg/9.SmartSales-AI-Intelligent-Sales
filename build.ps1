$ErrorActionPreference = "Stop"

if (-not (Test-Path -Path ".venv")) {
    python -m venv .venv
}

Write-Host "Activating virtual environment..."
. .\.venv\Scripts\Activate.ps1

Write-Host "Installing dependencies..."
python -m pip install --upgrade pip
python -m pip install -r requirements.txt

Write-Host "Installing frontend dependencies..."
if (-not (Test-Path -Path "frontend/node_modules")) {
    Push-Location frontend
    npm install
    Pop-Location
}

Write-Host "Building frontend assets..."
Push-Location frontend
npm run build
Pop-Location

Write-Host "Build complete."
Write-Host "Run backend: uvicorn backend.app.main:app --reload --host 127.0.0.1 --port 8000"
Write-Host "Run frontend: streamlit run frontend/app.py"

# SmartSales AI Platform

An end-to-end intelligent sales forecasting and inventory optimization platform.

## Overview

This prototype includes:
- FastAPI backend for forecasting, inventory recommendations, EV analysis, anomaly detection, pricing guidance, and supplier ranking.
- Streamlit frontend dashboard for exploring forecasts, KPIs, and natural-language sales copilot queries.
- Sample dataset and data processing pipeline for realistic sales and inventory analysis.

## Run locally

1. Create and activate a Python virtual environment.

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
```

2. Install Python dependencies.

```powershell
pip install -r requirements.txt
```

3. Install frontend dependencies.

```powershell
cd frontend
npm install
cd ..
```

4. Start the backend server.

```powershell
uvicorn backend.app.main:app --reload --host 127.0.0.1 --port 8000
```

5. Start the Streamlit dashboard.

```powershell
streamlit run frontend/app.py
```

## Build

1. Build the frontend bundle.

```powershell
cd frontend
npm run build
cd ..
```

2. (Optional) Use the setup script to install Python dependencies and prepare the local environment.

```powershell
.\build.ps1
```

## Render deployment

This project includes `render.yaml` for Render deployment.

- Build command:

```bash
pip install -r requirements.txt
```

- Start command:

```bash
streamlit run app.py --server.address 0.0.0.0 --server.port $PORT --server.headless true
```

- Python version:

  - `pythonVersion: 3.10.13`

If Render still uses Python 3.14, set the service Python version in the Render dashboard to `3.10.13` or re-run the deployment using `render.yaml`.

## Setup

- Use the PowerShell setup script to create the virtual environment and install dependencies:

```powershell
.\build.ps1
```

- After setup, start the backend and frontend as shown above.

## Project layout

- `backend/` - FastAPI application and service layer.
- `frontend/` - Streamlit dashboard UI.
- `data/` - Sample sales and inventory dataset.
- `requirements.txt` - Python dependencies.

## Notes

- The backend uses SQLite for local prototype storage.
- The ML pipeline uses a simple time-series regression model and can be extended with Prophet, XGBoost, or LSTM.
- The sales copilot endpoint supports natural-language queries over business metrics.

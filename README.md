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

2. Install dependencies.

```powershell
pip install -r requirements.txt
```

3. Start the backend server.

```powershell
uvicorn backend.app.main:app --reload --host 127.0.0.1 --port 8000
```

4. Start the Streamlit dashboard.

```powershell
streamlit run frontend/app.py
```

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

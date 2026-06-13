# AI-Driven Customer Analytics

Live Application: https://nec-crt-project-1-ai-driven-1.onrender.com

This project provides a Streamlit-based customer analytics platform for exploring customer data, filtering by name/salary/age, making product recommendations, predicting monthly transactions, performing segmentation, income analysis, and churn detection.

## Local Run

1. Install dependencies:
	```bash
	pip install -r requirements.txt
	```
2. Generate datasets if needed:
	```bash
	python data_generator.py
	```
3. Launch the app:
	```bash
	streamlit run app.py
	```

## Render Deployment

This repository is prepared for Render hosting.

- `render.yaml` configures the web service.
- Build command: `pip install -r requirements.txt`
- Start command: `streamlit run app.py --server.address 0.0.0.0 --server.port $PORT --server.headless true`
- Streamlit runtime settings are in `.streamlit/config.toml`

Important: the CRUD actions currently save to CSV files in the app runtime. On Render, filesystem changes are not persistent across restarts, so add a database if you need saved edits to survive redeploys.

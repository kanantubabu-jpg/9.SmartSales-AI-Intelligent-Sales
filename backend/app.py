from flask import Flask, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
CORS(app) # Allow all domains for frontend

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({
        'status': 'success',
        'message': 'SmartSales AI Backend is running',
        'version': '1.0.0'
    }), 200

@app.route('/api/analytics/dashboard', methods=['GET'])
def get_dashboard_data():
    # Mock data for demonstration, normally would query DB and ML models
    return jsonify({
        'stats': {
            'revenue': '$124,563',
            'sales': '3,421',
            'customers': '1,234',
            'inventory': '98%'
        },
        'chart_data': [
            {'name': 'Jan', 'revenue': 4000, 'profit': 2400},
            {'name': 'Feb', 'revenue': 3000, 'profit': 1398},
            {'name': 'Mar', 'revenue': 2000, 'profit': 9800},
            {'name': 'Apr', 'revenue': 2780, 'profit': 3908},
            {'name': 'May', 'revenue': 1890, 'profit': 4800},
            {'name': 'Jun', 'revenue': 2390, 'profit': 3800},
            {'name': 'Jul', 'revenue': 3490, 'profit': 4300},
        ],
        'insights': [
            {
                'type': 'demand',
                'level': 'high',
                'message': 'Expected 45% increase in "Electronics" category next week due to seasonal trends.'
            },
            {
                'type': 'risk',
                'level': 'critical',
                'message': 'Product SKU-994 is projected to stock out in 4 days at current sales velocity.'
            }
        ]
    }), 200

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)

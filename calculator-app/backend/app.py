import json
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def getNumbers(req_data):
    try:
        data = json.loads(req_data)
        num1 = float(data.get('num1', 0)) 
        num2 = float(data.get('num2', 0))
        return num1, num2
    except:
        return 0, 0

@app.route('/api/add', methods=['POST'])
def add():
    num1, num2 = getNumbers(request.data)
    return {'result': num1 + num2}

@app.route('/api/subtract', methods=['POST']) 
def subtract():
    num1, num2 = getNumbers(request.data)
    return {'result': num1 - num2}

if __name__ == '__main__':
    app.run(port=5000)

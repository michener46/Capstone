from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Mock database
users = {'user': 'password', 'user2': 'password2'}
sso_tokens = {'user': 'token1', 'user2': 'token2'}

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    if username in users and users[username] == password:
        return jsonify(ssoToken=sso_tokens[username]), 200
    return "Invalid credentials", 400

@app.route('/check_sso', methods=['POST'])
def check_sso():
    data = request.json
    token = data.get('token')
    if token in sso_tokens.values():
        return "Valid SSO", 200
    return "Invalid SSO", 400

if __name__ == '__main__':
    app.run(port=5000)

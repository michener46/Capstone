from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/login', methods=['POST'])
def login():
    if not request.json or 'username' not in request.json or 'password' not in request.json:
        return jsonify({"error": "Invalid input"}), 400  # Example error
    return jsonify({"success": "Login successful"}), 200  # Success

@app.route('/check_token', methods=['GET'])
def check_token():
    token = request.headers.get('Authorization')
    if not token or token != "valid_token":
        return jsonify({"error": "Invalid or missing token"}), 401  # Example error
    return jsonify({"success": "Token valid"}), 200  # Success

if __name__ == '__main__':
    app.run(debug=True)
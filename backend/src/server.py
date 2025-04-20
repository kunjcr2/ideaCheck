from flask import Flask, request, jsonify
from flask_cors import CORS
from agents import Agents

agent = Agents()

app = Flask(__name__)
CORS(app)

# api route for chatbot and calling the model
@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.get_json()

    user_message = data.get('message')
    if not user_message:
        return jsonify({'error': 'No message provided'}), 400

    response = agent.run(user_message)

    if not response:
        return jsonify({'error': 'No response generated'}), 500
    
    return jsonify({'content': response}), 200

# api route for getting the feedback on the chatbot if its working or not
@app.route('/api/feedback', methods=['GET'])
def feedback():
    return jsonify({'content': 'API is working'}), 200

if __name__ == '__main__':
    app.run(debug=True, port=5176)
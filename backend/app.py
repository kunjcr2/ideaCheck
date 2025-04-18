from flask import Flask, request, jsonify
from langchain_openai import ChatOpenAI
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)

# Get OpenAI API key from environment variables
api_key = os.getenv("OPENAI_API_KEY")
if not api_key:
    raise ValueError("OPENAI_API_KEY is not set in the environment variables.")

# Initialize ChatOpenAI model
llm = ChatOpenAI(api_key=api_key)

@app.route("/api/chat", methods=["POST"])
def chat():
    try:
        data = request.get_json()
        user_message = data.get("message")
        if not user_message:
            return jsonify({"error": "Message is required."}), 400

        # Generate response using ChatOpenAI
        response = llm.invoke(user_message)

        # Extract text from AIMessage object
        if hasattr(response, 'content'):
            response_text = response.content
        else:
            response_text = str(response)

        return jsonify({"response": response_text})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/api/health", methods=["GET"])
def health_check():
    return jsonify({"status": "API is running."})

if __name__ == "__main__":
    app.run(debug=True)
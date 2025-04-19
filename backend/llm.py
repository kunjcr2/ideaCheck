from langchain_openai import ChatOpenAI
from langchain.prompts import PromptTemplate

import os
from dotenv import load_dotenv

class LLM:
    def __init__(self, model_name: str = "gpt-4o-mini", temperature: float = 0.7, max_tokens: int = 500, top_p: float = 0.9, api_key: str = os.getenv("OPENAI_API_KEY")):
        self.model_name = model_name
        self.temperature = temperature
        self.max_tokens = max_tokens
        self.top_p = top_p
    
        self.llm = ChatOpenAI(
            model=self.model_name,
            temperature=self.temperature,
            max_tokens=self.max_tokens,
            top_p=self.top_p,
            api_key=api_key,
        )

    def generate_response(self, prompt: str) -> str:
        response = self.llm(prompt)
        return response
from langchain_openai import ChatOpenAI

import os
from dotenv import load_dotenv

class LLM:
    def __init__(self, model_name: str = "gpt-4o-mini", temperature: float = 0.7, max_tokens: int = 500, top_p: float = 0.9, api_key: str = os.getenv("OPENAI_API_KEY")):
        '''
        Initialize the LLM with the specified parameters.
        Args:
            model_name (str): The name of the model to use.
            temperature (float): Sampling temperature for randomness.
            max_tokens (int): Maximum number of tokens to generate.
            top_p (float): Nucleus sampling parameter.
            api_key (str): API key for OpenAI.
        '''
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

    def generate(self, prompt: str) -> str:
        '''
        Generate a response from the LLM using the provided prompt.
        Args:
            prompt (str): The input prompt for the LLM.
        Returns:
            str: The generated response from the LLM.
        '''
        response = self.llm.invoke(prompt)
        return response.content
    
    def get_llm(self):
        '''
        Get the LLM instance.
        Returns:
            ChatOpenAI: The LLM instance.
        '''
        return self.llm
from langchain.agents import initialize_agent, AgentType
from langchain.agents import Tool

from llm import LLM
from tools import Tools

class Agents:
    """
    This class is responsible for initializing the agents used in the application.
    It uses the Langchain library to create agents that can perform various tasks.
    Currently, it initializes a Google Search agent and an Other agent.
    """
    def __init__(self):
        self.tools = Tools()
        self.llm = LLM()
        
        self.google_search_agent = initialize_agent(
            tools=[
                Tool(
                    name="Google Search",
                    func=self.tools.google_search,
                    description="Use ONLY to check if a startup idea exists. For startup or project ideas ONLY. Pass the relavent and return the result.",
                ),
                Tool(
                    name="Idea Generator",
                    func=self.llm.generate,
                    description="Use this to generate ONLY 1 startup idea. return idea ONLY in one sentence.",
                ),
                # Tool(
                #     name="Workflow",
                #     func=self.llm.generate,
                #     description="Use this to generate a workflow for the startup idea. return workflow ONLY in 2-3 sentences.",
                # ),
                Tool(
                    name="Other",
                    func=self.tools.other,
                    description="Use this to answer any other question. DO NOT USE YOUR KNOWLEDGE.",
                )
            ],
            llm=self.llm.get_llm(),
            agent_type=AgentType.ZERO_SHOT_REACT_DESCRIPTION,
            max_iterations=3,
        )
    
    def run(self, query):
        """
        This method runs the Google Search agent with the provided query.
        It returns the response from the agent.
        """
        return self.google_search_agent.invoke(query)
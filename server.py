import os
from fastapi import FastAPI
from pydantic import BaseModel
from langchain_core.runnables import RunnableConfig
from fastapi.middleware.cors import CORSMiddleware

from graph import graph
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins = ["*"], #Give frontend url
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"]
)

class QueryRequest(BaseModel): #Tried sending just plain text as request but didnt work, had to create this class
    query: str


@app.post("/ask")
async def ask_agent(request: QueryRequest):
    try:
        state = {
            "messages": [{"role": "user", "content": request.query }], 
            "search_query": [], #need to pass them to avoid KeyError
            "web_research_result": [],
            "sources_gathered": []
        }

        result = graph.invoke(state, config=RunnableConfig)
        return {
            "answer": result["messages"][-1].content, #-1 because, the last one contains ai response
            "sources": result.get("sources_gathered", [])
        }
    except Exception as e:
        return {"error": str(e)}


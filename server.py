import os
import asyncio
import json 
from fastapi.responses import StreamingResponse
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
    async def event_generator():
        state = {
            "messages": [{"role": "user", "content": request.query }], 
            "search_query": [], #need to pass them to avoid KeyError
            "web_research_result": [],
            "sources_gathered": []
        }

        result = graph.invoke(state, config=RunnableConfig()) #should instantiate with () otherwise we get error
        
        #--This is the concept of SSE - Server Sent Events 
        #Streaming Search queries 
        for q in result.get("search_query", []):
            payload = {"stage": "Generating Search Queries", "content": q}
            yield f"event: step\ndata: {json.dumps(payload)}\n\n" #yeild used for sending partial responses 
            await asyncio.sleep(0.3)
        
        #Streaming Web search results 
        for r in result.get("web_research_result", []):
            payload = {"stage": "Web Research", "content": r}
            yield f"event: step\ndata: {json.dumps(payload)}\n\n"
            await asyncio.sleep(0.3)
        
        #Stream reflection knowledge gap only if available
        if "knowledge_gap" in result:
            payload = {"stage": "Reflection", "content": result["knowledge_gap"]}
            yield f"event: step\ndata: {json.dumps(payload)}\n\n"
            await asyncio.sleep(0.3)

        #Streaming sources(citations) 
        for s in result.get("sources_gathered", []):
            payload = {"stage": "Source", "content": s}
            yield f"event: step\ndata: {json.dumps(payload)}\n\n"
            await asyncio.sleep(0.3)

        #Streaming final answer 
        final_answer = result["messages"][-1].content 
        payload = {"stage": "Final Answer", "content": final_answer}
        yield f"event: final_answer\ndata: {json.dumps(payload)}\n\n"
        
        #Signal end of stream
        yield "event: end\ndata: {}\n\n"

    return StreamingResponse(event_generator(), media_type="text/event-stream")
  


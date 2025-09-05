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

        #graph.invoke() will pause the entire execution until entire graph completes execution
        #Intermediate Streaming results wont be possible because of it 
        #result = graph.invoke(state, config=RunnableConfig()) #should instantiate with () otherwise we get error
        final_answer = None #tracking final answer separately
            
        #--This is the concept of SSE - Server Sent Events 
        async for event in graph.astream_events(state, config=RunnableConfig()):
        
            if event["event"] == "on_chain_end" and "search_query" in event["data"]:
                for q in event["data"]["search_query"]:
                    payload = {"stage": "Generating Search Queries", "content": q}
                    yield f"event: step\ndata: {json.dumps(payload)}\n\n"
                    


            elif event["event"] == "on_chain_end" and "web_research_result" in event["data"]:
                for r in event["data"]["web_research_result"]:
                    payload = {"stage": "Web Research", "content": r}
                    yield f"event: step\ndata: {json.dumps(payload)}\n\n"
                    

            elif event["event"] == "on_chain_end" and "knowledge_gap" in event["data"]:
                payload = {"stage": "Reflection", "content": event["data"]["knowledge_gap"]}
                yield f"event: step\ndata: {json.dumps(payload)}\n\n"
            
            
            elif event["event"] == "on_chain_end" and "sources_gathered" in event["data"]:
                for s in event["data"]["sources_gathered"]:
                    payload = {"stage": "Source", "content": s}
                    yield f"event: step\ndata: {json.dumps(payload)}\n\n"

             # Capture final state when the *root graph* finishes
            elif event["event"] == "on_chain_end" and event.get("name") == "graph":
                messages = event["data"].get("messages", [])
                if messages:
                    final_answer = messages[-1].content

        #Streaming final answer 
        if final_answer:
            payload = {"stage": "Final Answer", "content": final_answer}
            yield f"event: final_answer\ndata: {json.dumps(payload)}\n\n"
        
        #Signal end of stream
        yield "event: end\ndata: {}\n\n"

    return StreamingResponse(event_generator(), media_type="text/event-stream")
  


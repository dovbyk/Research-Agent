# Research-Agent

This is a research agent much like that of how Perplexity Agent works. Created using Langgraph and Gemini API for answer generation and web search


## Features

- 🧠 Powered by a LangGraph agent for advanced research and conversational AI.
- 🔍 Dynamic search query generation using Google Gemini models.
- 🌐 Integrated web research via Google Search API.
- 🤔 Reflective reasoning to identify knowledge gaps and refine searches.
- 📄 Generates answers with citations from gathered sources.
- 🔄 Hot-reloading for both frontend and backend during development.

## Graphical Representaion of the Agent

This is a high-level backend workflow of the agent. 
The core of the backend is a LangGraph agent defined in `graph.py`. It follows these steps:

<img src="./agent.png" title="Agent Flow" alt="Agent Flow" width="50%">


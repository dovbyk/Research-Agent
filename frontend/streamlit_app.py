import streamlit as st
import httpx
import json
import time

# ----------- CONFIG -----------
BACKEND_URL = "http://127.0.0.1:8000/ask"  # change to your Render URL after deploy
st.set_page_config(page_title="AI Research Agent", page_icon="🔎", layout="wide")

# ----------- UI HEADER ----------
st.title("🔎 Research Agent")
st.caption("Perplexity-style AI with LangGraph + FastAPI + Streamlit")

# ----------- INPUT ----------
query = st.chat_input("Ask me anything...")

if query:
    st.session_state["progress"] = []
    st.session_state["final_answer"] = ""
    st.session_state["sources"] = []

    # Layout areas
    progress_area = st.container()
    final_area = st.container()
    sources_area = st.container()

    with httpx.stream("POST", BACKEND_URL, json={"query": query}, timeout=None) as r:
        stage_placeholder = None

        for line in r.iter_lines():
            if not line or not line.startswith("data:"):
                continue

            try:
                payload = json.loads(line.replace("data: ", ""))
            except:
                continue

            # ----- Handle streamed stages -----
            if "stage" in payload:
                stage = payload["stage"]
                content = payload["content"]

                # Display stage
                with progress_area:
                    st.markdown(f"### 🔄 {stage}")
                    if isinstance(content, list):
                        for item in content:
                            st.write(f"- {item}")
                    else:
                        st.write(content)

                # Save progress for debugging if needed
                st.session_state["progress"].append((stage, content))

            # ----- Handle final answer -----
            if payload.get("stage") == "Final Answer":
                text = payload["content"]
                # typewriter animation
                answer_placeholder = final_area.empty()
                displayed = ""
                for word in text.split():
                    displayed += word + " "
                    answer_placeholder.markdown(f"## ✨ {displayed}")
                    time.sleep(0.05)

            # ----- Handle sources -----
            if payload.get("stage") == "Source":
                st.session_state["sources"].append(payload["content"])

    # ---- After stream ends, show sources ----
    if st.session_state["sources"]:
        with sources_area:
            st.markdown("### 📚 Sources")
            cols = st.columns(2)
            for i, src in enumerate(st.session_state["sources"]):
                col = cols[i % 2]
                with col:
                    st.markdown(
                        f"""
                        <div style="padding:10px; border-radius:10px; background:#f8f9fa; margin:5px;">
                        <a href="{src['value']}" target="_blank">{src['value']}</a>
                        </div>
                        """,
                        unsafe_allow_html=True,
                    )


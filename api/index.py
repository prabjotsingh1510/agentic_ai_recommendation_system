from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import random

app = FastAPI(title="DineWise AI Backend")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

@app.get("/")
def read_root():
    return {"status": "ok", "message": "DineWise AI Backend is running"}

@app.post("/api/chat")
def chat_with_concierge(request: dict):
    user_message = request.get("message", "")
    
    # Mocking agentic response to keep local running simple for now
    responses = [
        "I've scouted 3 Mediterranean spots with outdoor seating available today.",
        "Based on your Monday patterns, you usually crave light salads.",
        "Osteria Del Sole has a 55dB average. Perfect for a business dinner."
    ]
    
    return {
        "reply": random.choice(responses),
        "confidence": random.randint(85, 98),
        "agents_involved": ["Gastronomy Pro", "Logistics Expert", "Vibe Analyst"]
    }

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)

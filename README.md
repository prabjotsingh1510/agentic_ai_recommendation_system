<div align="center">
  <img src="https://raw.githubusercontent.com/prabjotsingh1510/agentic_ai_recommendation_system/main/frontend/public/favicon.ico" alt="DineWise AI Logo" width="120" />
  
  # DineWise AI
  
  ### *The Agentic Restaurant Recommendation System*
  
  **[Next.js](https://nextjs.org/) • [FastAPI](https://fastapi.tiangolo.com/) • [TailwindCSS](https://tailwindcss.com/) • Agentic AI Architecture**
</div>

---

## 🍽️ About The Project

**DineWise AI** is a next-generation, multi-agent AI–powered web application designed to act as a personal food concierge rather than a traditional food listing platform.

Unlike standard food delivery apps, this system integrates **Agentic AI architecture**, **Retrieval-Augmented Generation (RAG)**, contextual reasoning, and adaptive learning to provide intelligent, explainable, and continuously improving restaurant recommendations.

The platform understands user intent through natural language queries (e.g., *"Romantic Italian place under ₹1500 near me"*), retrieves relevant knowledge from restaurant datasets using vector embeddings, and optimizes results using machine learning.

![DineWise AI Dashboard Preview](https://github.com/prabjotsingh1510/agentic_ai_recommendation_system/raw/main/frontend/public/favicon.ico) *(Replace this image with a real dashboard screenshot soon!)*

---

## 🚀 Key Features

### 🧠 Multi-Agent AI Architecture
- **Intent & Preference Extraction Agent**
- **RAG Knowledge Retrieval Agent**
- **ML-Based Ranking Agent**
- **Optimization & Decision Agent**
- **Conversational Concierge Agent**

### 🔍 Natural Language Smart Search
- Parses cuisine, budget, mood, dietary restrictions, group size.
- Context-aware filtering and dynamic refinement through chat.

### 📚 Retrieval-Augmented Generation (RAG)
- Embedding-based similarity search via Vector databases.
- Explains recommendation reasoning transparently.

### 💬 Conversational AI Concierge
- Persistent memory across sessions.
- Refines recommendations interactively based on feedback.

---

## 🛠️ Tech Stack

**Frontend:**
- [Next.js (React)](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- Framer Motion *(Coming Soon)*
- Google Maps API *(Coming Soon)*

**Backend:**
- [FastAPI (Python)](https://fastapi.tiangolo.com/)
- Uvicorn

**AI & Cloud Layer (Upcoming):**
- Google Vertex AI (Gemini)
- Firestore & BigQuery
- Scikit-learn & XGBoost

---

## 💻 Getting Started (Local Development)

To get a local copy up and running, follow these simple example steps.

### Prerequisites

* Ensure you have **Node.js** (v18+) and **NPM** installed.
* Ensure you have **Python** (3.9+) installed.

### Installation & Running

1. **Clone the repo**
   ```sh
   git clone https://github.com/prabjotsingh1510/agentic_ai_recommendation_system.git
   cd agentic_ai_recommendation_system
   ```

2. **Start the FastAPI Backend**
   ```sh
   cd backend
   python -m venv venv
   # On Windows:
   .\venv\Scripts\Activate.ps1
   # On Mac/Linux:
   # source venv/bin/activate
   
   pip install fastapi uvicorn
   uvicorn main:app --host 0.0.0.0 --port 8000 --reload
   ```
   *The API will be available at `http://localhost:8000`*

3. **Start the Next.js Frontend (Open a new terminal)**
   ```sh
   cd frontend
   npm install
   npm run dev
   ```
   *The App will be available at `http://localhost:3000`*

---

## 🎨 Premium SaaS-Grade UI
- Modern minimal design
- Glassmorphism UI cards
- Dark/light mode switching
- Smooth component animations

---

<div align="center">
  Built as a practical implementation of Agentic AI systems for the modern hospitality domain.
</div>

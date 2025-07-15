# Arabic Question Generation Graduation Project 

This project focuses on **automatically generating Arabic questions** from input context using a fine-tuned **AraT5 transformer model**. It also includes a complete **MERN stack web application** for user interaction and evaluation.

---

## 🧩 Project Overview

The main goal is to assist Arabic learners and educators by generating high-quality questions automatically from a given Arabic text. The project supports:
- Natural Language Processing (NLP) for the Arabic language.
- Educational tools through AI-powered question generation.
---

## 🚀 Tech Stack

### 🔗 Frontend
- React.js
- Tailwind CSS (optional)

### ⚙️ Backend
- Node.js
- Express.js
- MongoDB (for storing user data and chat history)

### 🤖 Model API
- Python
- FastAPI
- HuggingFace Transformers (AraT5 model)

---

## 📦 Features

- 💬 Input Arabic context and generate multiple questions.
- 🧠 Model fine-tuned on Arabic question generation datasets.
- 💾 Save and access previous chats (context + questions).
---

## 🛠️ Getting Started (Development Setup)

```bash
# Clone the repo
git clone https://github.com/your-username/arabic-question-generator.git
cd arabic-question-generator

# Install client and server dependencies
cd frontend
npm install

cd backend
npm install

# Start frontend and backend
npm run dev   # or use nodemon / dev script

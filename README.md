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

## 🗂️ Question and Answer Model Folder Structure

This folder contains all resources related to Arabic question generation and answering using deep learning and NLP techniques. It leverages datasets such as Arabic-SQuAD, ARCD, MLQA, and TydiQA to train and evaluate models for generating high-quality, answerable questions from Arabic context passages.

**Structure:**

- **notebooks/**: Jupyter notebooks for experiments, preprocessing, training, and evaluation.
- **scripts/**: Utility scripts for text preprocessing and testing.
- **results/**: Output and evaluation reports (e.g., generated questions, model test results).

Refer to the notebooks for step-by-step code, explanations, and example usages. Example context and generated questions are provided in the results files.

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
```

---

## 📑 References

### Model References

- [Questions Generation Model (AraT5)](https://www.kaggle.com/models/mohammed237/arat5-base-final)
- [Question Answering Model]()

### Data References

- [Arabic-SQuAD](https://www.kaggle.com/datasets/mohammed237/arabic-squad-processed)
- [ARCD](https://www.kaggle.com/datasets/mohammed237/arcd-dataset)
- [MLQA](https://www.kaggle.com/datasets/mohammed237/mlqa-data)
- [TydiQA](https://www.kaggle.com/datasets/mohammed237/tydiqa-data)

import express from 'express';
import axios from 'axios';

const router = express.Router();

//get normal questions
router.post('/', async (req, res, next) => {
    const { context } = req.body;

    try {
        // Step 1: get questions
        const qRes = await axios.post('http://127.0.0.1:8000/generate_questions', { context });
        const questions = qRes.data.questions;

        // Step 2: get answers
        const qaPairs = [];

        for (const question of questions) {
        const aRes = await axios.post('http://127.0.0.1:8000/predict_answer', {
            context,
            question
        });

        qaPairs.push({
            question: question.replace(/^\d+\.\s*/, ""), 
            answer: aRes.data.answer
        });
        }

        res.json({ questions: qaPairs });

    } catch (err) {
        console.error("Error generating Q&A:", err.message);
        next(err);
    }
});

// get MCQ questions
router.post('/mcq', async (req, res, next) => {
    const { context } = req.body;

    try {
        const qRes = await axios.post('http://127.0.0.1:8000/generate_mcq', { context });

        res.json(qRes.data);
    } catch (err) {
        console.error("Error generating MCQs:", err.message);
        next(err);
    }
});

// get True/False questions
router.post('/true_false', async (req, res, next) => {
    const { context } = req.body;

    try {
        const tfRes = await axios.post('http://127.0.0.1:8000/generate_tf', { context });
        
        res.json(tfRes.data);
    } catch (err) {
        console.error("Error generating T/F questions:", err.message);
        next(err);
    }
});

export default router;

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.route.js';
import userRoutes from './routes/user.route.js';
import questionRoutes from './routes/question.route.js';
import extractRoutes from './routes/extract.route.js';
import chatRoutes from './routes/chat.route.js';
import cors from 'cors';
dotenv.config();


mongoose.connect(process.env.MONGO)
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));


app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.use('/api/users', userRoutes);

app.use('/api/questions', questionRoutes);

app.use('/api/extract', extractRoutes);

app.use('/api/chats', chatRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.status || 500;
    const message = err.message || "Something went wrong!";
    return res.status(statusCode).json({
        success: false,
        status: statusCode,
        message
    });
})
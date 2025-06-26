import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    context: {
        type: String,
        required: true,
    },
    questions: {
        type: [
            {
                question: { type: String, required: true },
                answer: { type: String }
            }
        ],
        default: [],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Chat = mongoose.model('Chat', chatSchema);
export default Chat;
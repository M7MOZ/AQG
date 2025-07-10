import Chat from "../models/chat.model.js";
import express from 'express';
import { verifyToken } from "../controllers/auth.controller.js";
import axios from 'axios';
const router = express.Router();

// GET /api/chats
router.get("/", verifyToken, async (req, res) => {
    const chats = await Chat.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(chats);
});

// POST /api/chats
router.post("/", verifyToken, async (req, res) => {
    const { title, context, questions } = req.body;
    try {
        const chat = new Chat({ userId: req.user.id, title, context, questions });
        await chat.save();
        res.status(201).json(chat);
    } catch (err) {
        res.status(500).json({ error: "Failed to save chat" });
    }
});
// GET /api/chats/:id
router.get("/:id", verifyToken, async (req, res) => {
    const chat = await Chat.findOne({ _id: req.params.id, userId: req.user.id });
    if (!chat) return res.status(404).json("Chat not found");
    res.json(chat);
});

// DELETE /api/chats
router.delete("/", verifyToken, async (req, res) => {
    try {
        await Chat.deleteMany({ userId: req.user.id });
        res.json({ message: "All chats deleted successfully" });
    } catch (err) {
        console.error("Error deleting all chats:", err.message);
        res.status(500).json({ error: "Failed to delete all chats" });
    }
});
// DELETE /api/chats/:id
router.delete("/:id", verifyToken, async (req, res) => {
    try {
        const deletedChat = await Chat.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
        if (!deletedChat) return res.status(404).json({ error: "Chat not found" });
        res.json({ message: "Chat deleted successfully" });
    } catch (err) {
        console.error("Error deleting chat:", err.message);
        res.status(500).json({ error: "Failed to delete chat" });
    }
});



router.post("/generate_title", async (req, res, next) => {
    const { context } = req.body;

    try {
            const title = await axios.post('http://127.0.0.1:8000/generate_title', { context });
            res.json(title.data);
        }
        catch(err) {
            console.error("Error generating title:", err.message);
            next(err);
        }
    }
)

export default router;
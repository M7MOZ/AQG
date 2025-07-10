import express from 'express';
import multer from 'multer';
import Tesseract from 'tesseract.js';
import fs from 'fs';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });


router.post('/image', upload.single('file'), async (req, res, next) => {
    try {
        const imagePath = req.file.path;

        const result = await Tesseract.recognize(imagePath, 'ara', {
        logger: m => console.log(m)
        });

        fs.unlinkSync(imagePath); // Clean up
        res.json({ text: result.data.text });
    } catch (err) {
        next(err);
    }
});
export default router;

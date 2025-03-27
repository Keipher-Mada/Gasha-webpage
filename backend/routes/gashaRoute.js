import express from 'express';
import { addGasha, listGasha,removeGasha } from '../controllers/gashaController.js';
import multer from 'multer';

const gashaRouter = express.Router();

//image storage

const storage = multer.diskStorage({
  destination: 'uploads',
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

gashaRouter.post('/add', upload.single('image'), addGasha);
gashaRouter.get('/list', listGasha);
gashaRouter.post('/remove',removeGasha);

export default gashaRouter;

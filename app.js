const express = require('express');
const cors = require('cors');
const multer = require('multer');
require('dotenv').config();

const usersRouter = require('./routes/users');
const shopsRouter = require('./routes/shops');
const dishesRouter = require('./routes/dishes');
const reviewsRouter = require('./routes/reviews');
const favoritesRouter = require('./routes/favorites');

const app = express();
const port = process.env.PORT || 3000;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

app.use('/api/users', usersRouter);
app.use('/api/shops', shopsRouter);
app.use('/api/dishes', dishesRouter);
app.use('/api/reviews', reviewsRouter);
app.use('/api/favorites', favoritesRouter);

app.post('/api/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ code: 400, message: '请选择文件' });
  }
  res.json({
    code: 200,
    message: '上传成功',
    data: {
      url: `/uploads/${req.file.filename}`
    }
  });
});

app.get('/api/health', (req, res) => {
  res.json({ code: 200, message: '服务正常' });
});

app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
});
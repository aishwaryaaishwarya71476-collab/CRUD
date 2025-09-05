const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const studentRoutes = require('./routes/studentRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connection
mongoose.connect('mongodb+srv://aishwaryak24it_db_user:aish1234@crud.u2lwpjo.mongodb.net/?retryWrites=true&w=majority&appName=CRUD')
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error(err));

// Routes
app.use('/api/students', studentRoutes);

// Fallback → serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));

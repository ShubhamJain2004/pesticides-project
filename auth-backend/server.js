const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

const User = mongoose.model('User', UserSchema);

// Secret key for JWT
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

// Routes

// Signup
app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send('All fields are required');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ name, email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).send('User registered successfully');
  } catch (err) {
    res.status(400).send('Error registering user');
  }
});

// Login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send('All fields are required');
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).send('User not found');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).send('Invalid password');
  }

  const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
  res.status(200).json({ token });
});

// Protected Route Example
app.get('/protected', (req, res) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send('Access denied');
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    res.send(`Welcome, user ${decoded.userId}`);
  } catch (err) {
    res.status(401).send('Invalid token');
  }
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

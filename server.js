const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const port = 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'your_super_secret_jwt_key_here'; // Use environment variable

app.use(cors());
app.use(express.json());

// In-memory database for demonstration
const db = new sqlite3.Database(':memory:', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      )`, (err) => {
        if(err) console.log("Error creating users table", err)
      });
});

// Register endpoint
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const stmt = db.prepare('INSERT INTO users (username, password) VALUES (?, ?)');
    stmt.run(username, hashedPassword, function(err) {
      if (err) {
        if (err.message.includes('UNIQUE constraint failed')) {
          return res.status(409).json({ message: 'Username already exists.' });
        }
        return res.status(500).json({ message: 'Failed to register user.' });
      }

      // After successful registration, generate a token
      const token = jwt.sign({ username: username }, JWT_SECRET, { expiresIn: '1h' });
      res.status(201).json({ token });
    });
    stmt.finalize();
  } catch (error) {
    res.status(500).json({ message: 'Error registering user.' });
  }
});

// Login endpoint
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }

    const stmt = db.prepare('SELECT * FROM users WHERE username = ?');

    stmt.get(username, async (err, user) => {
        if (err) {
            console.log("Error during login", err)
            return res.status(500).json({ message: 'Error during login.' });
        }

        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: '1h' });
            res.json({ token });
        } else {
            res.status(401).json({ message: 'Invalid credentials.' });
        }
    })
    stmt.finalize()

});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

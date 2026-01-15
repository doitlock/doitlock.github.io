const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_DIR = path.join(__dirname, 'data');

// Simple middleware
app.use(express.json());
app.use(function (req, res, next) {
  // Basic CORS for development (if you run gulp dev on different port)
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

// Logger
app.use((req, res, next) => {
  console.log(new Date().toISOString(), req.method, req.url);
  next();
});

// Serve static files from dist (if you built the site)
const distPath = path.join(__dirname, '..', 'dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
}

// Helpers
function readJson(file) {
  try {
    const raw = fs.readFileSync(path.join(DATA_DIR, file), 'utf-8');
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}

function writeJson(file, data) {
  fs.writeFileSync(path.join(DATA_DIR, file), JSON.stringify(data, null, 2), 'utf-8');
}

// GET /api/projects - returns sample projects
app.get('/api/projects', (req, res) => {
  const projects = readJson('projects.json') || [];
  res.json({ ok: true, projects });
});

// POST /api/contact - accepts { name, email, message }
app.post('/api/contact', (req, res) => {
  const body = req.body || {};
  const { name, email, message } = body;
  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'name, email and message are required' });
  }

  const contacts = readJson('contacts.json') || [];
  const entry = {
    id: Date.now(),
    name,
    email,
    message,
    createdAt: new Date().toISOString()
  };
  contacts.push(entry);
  writeJson('contacts.json', contacts);

  // For demo we also log the message
  console.log('New contact:', entry);

  res.status(201).json({ ok: true, contact: entry });
});

// Fallback for 404
app.use((req, res) => {
  res.status(404).json({ ok: false, error: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`API + static server listening on http://localhost:${PORT}`);
});

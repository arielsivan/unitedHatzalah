const express = require('express');
const path = require('path');
const admin = require('firebase-admin');
const { log } = require('console');

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Load the service account key
const serviceAccount = require('./serviceAccount.json');

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://united-db8c8.firebaseio.com", // Replace with your actual database URL
});

// Initialize Firestore after Firebase Admin is initialized
const db = admin.firestore();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/calls', async (req, res) => {
  try {
    const newCall = { skill: 'CPR', location: 'Jerusalem' };
    const docRef = await db.collection('calls').add(newCall);
    res.status(201).send(`User added with ID: ${docRef.id}`);
  } catch (error) {
    res.status(500).send('Error adding user: ' + error.message);
  }
});

app.post('/calls', async (req, res) => {
  log(req.body);
  try {
    const { skill, location } = req.body;
    const newCall = { skill, location };
    const docRef = await db.collection('calls').add(newCall);
    res.status(201).send(`User added with ID: ${docRef.id}`);
  } catch (error) {
    res.status(500).send('Error adding user: ' + error.message);
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

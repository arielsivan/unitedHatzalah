const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const cors = require('cors');

// Initialize Firebase Admin SDK
const serviceAccount = require('./serviceAccountKey.json'); // Replace with your Firebase service account key file

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://your-project-id.firebaseio.com", // Replace with your Firebase database URL
});

const db = admin.firestore();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Add CPR Help Call to Firestore
app.post('/addCPRCall', async (req, res) => {
  try {
    const { location, patientName, contactNumber } = req.body;

    if (!location || !patientName || !contactNumber) {
      return res.status(400).send({ error: 'Missing required fields' });
    }

    const callData = {
      type: 'CPR Help',
      location,
      patientName,
      contactNumber,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    };

    const newCall = await db.collection('calls').add(callData);
    console.log('New CPR Help call added with ID:', newCall.id);

    res.status(200).send({ success: true, id: newCall.id });
  } catch (error) {
    console.error('Error adding CPR Help call:', error);
    res.status(500).send({ error: 'Failed to add CPR Help call' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

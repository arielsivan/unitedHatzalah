const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use(bodyParser.json());

// Route to handle '/create-reading' POST requests
app.post('/create-reading', (req, res) => {
    const { skill, location } = req.body;

    if (!skill || !location) {
        // Return an error if skill or location is missing
        return res.status(400).json({ success: false, message: 'Skill and location are required' });
    }

    console.log('Received skill:', skill);
    console.log('Received location:', location);

    // Simulate creating a "reading" or performing some action
    // Replace the following with your actual logic (e.g., database operation)
    const readingId = Math.floor(Math.random() * 10000); // Example reading ID

    console.log(`Created reading with ID: ${readingId}`);

    // Send success response
    res.status(200).json({
        success: true,
        message: 'Reading created successfully',
        data: { skill, location, readingId },
    });
});



// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

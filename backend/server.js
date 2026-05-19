const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Basic endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Backend is running successfully.' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

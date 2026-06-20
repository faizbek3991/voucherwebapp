const path = require('path');
require('./config/env');
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const Voucher = require('./models/Voucher');
const Category = require('./models/Category');
const User = require('./models/User');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/api/test', (req, res) => {
    res.json({ message: 'API is working!' });
});

// GET: Fetch all categories
app.get('/api/categories', async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/vouchers', require('./routes/voucherRoutes'));
app.use('/api/cart', require('./routes/cartRoutes'));

// Always serve React frontend static build
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Any route that doesn't match the API routes above should load index.html
app.get(/.*/, (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;

async function startServer() {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

startServer();

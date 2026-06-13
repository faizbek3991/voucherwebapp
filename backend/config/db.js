const mongoose = require('mongoose');
const dns = require('dns');

// Prioritize IPv4 resolution to prevent connection timeouts in Node.js 18+
dns.setDefaultResultOrder('ipv4first');

async function connectDB() {
    try {
        const mongoUri =
            process.env.MONGO_URI ||
            process.env.MONGODB_URI ||
            process.env.MONGOBD_URI;

        if (!mongoUri) {
            throw new Error('Missing MongoDB URI. Set MONGO_URI in backend/.env');
        }

        if (mongoUri.includes('<db_password>')) {
            throw new Error('MongoDB URI still contains <db_password>. Replace it in backend/.env');
        }

        await mongoose.connect(mongoUri, {
            family: 4,
            // Fail fast if connection cannot be established
            serverSelectionTimeoutMS: 5000 
        });
        console.log('MongoDB connected successfully');
        return mongoose.connection;
    } catch (error) {
        if (error.code === 8000) {
            console.error(
                'MongoDB authentication failed. Check the Atlas database username, password, and connection string in backend/.env.'
            );
        }

        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit process with failure
    }
}

module.exports = connectDB;

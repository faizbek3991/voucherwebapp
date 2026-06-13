# Voucher Reward System - MERN Stack

A Node.js/Express backend for a voucher management system featuring cart functionality and category filtering.

## Tech Stack
- Node.js & Express
- MongoDB & Mongoose
- JWT for Authentication
- Bcrypt for Password Hashing

## Setup Instructions
1. Clone the repository.
2. Navigate to the `backend` folder: `cd backend`.
3. Install dependencies: `npm install`.
4. Create a `.env` file with `PORT`, `MONGO_URI`, and `JWT_SECRET`.
5. Seed the database: `node seed.js`.
6. Start the server: `npm run dev`.

## API Endpoints
- `POST /api/vouchers` - Create a voucher
- `GET /api/vouchers` - List all vouchers (supports `?category=ID`)
- `GET /api/cart` - Manage cart items

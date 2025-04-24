// backend/server.js

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs'; // ✅ Added for file existence check
import { fileURLToPath } from 'url';
import connectDB from './config/db.js'; // MongoDB config
import userRoutes from './routes/userRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

// Load env variables
dotenv.config();

// Setup Express
const app = express();

// Connect to MongoDB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);

// Setup for serving frontend in production
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static frontend build (make sure frontend is built into backend/public/)
app.use(express.static(path.join(__dirname, 'public')));

// React frontend fallback (Single Page App support)
// app.get('*', (req, res) => {
//   const indexPath = path.join(__dirname, 'public', 'index.html');
//   if (fs.existsSync(indexPath)) {
//     res.sendFile(indexPath);
//   } else {
//     res.status(404).send('index.html not found');
//   }
// });

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/connectDB.js';
import router from './routes/index.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config(); // Load environment variables at the top

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors(
    {
        origin:process.env.FRONTEND_URL,
        credentials:true
    }
));

app.use(express.json());

app.use(cookieParser())
// API Routes
app.use("/api", router);

// Connect to Database and Start Server
connectDB()
  .then(() => {
    console.log('Connected to the database');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to the database:', error);
  });

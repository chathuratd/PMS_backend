import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

// Import cronJobs and routes
import cronJobs from './jobs/cronJobs.js';
import userRoutes from './routes/user.js';
import prescriptionRoutes from './routes/prescription.js';
import reorderRoutes from './routes/reorder.js';
import drugoutsRoutes from './routes/drugouts.js';
import LeaveoutRoutes from './routes/leaveout.js';
import medicineNameRoutes from './routes/medicinenames.js';
import salesreportsRoutes from './routes/comment.js';
import expiredRoutes from './routes/expired.js';
import abtexpiredRoutes from './routes/abtexpired.js';
import outofstockRoutes from './routes/outofstocks.js';
import abtoutofstocksRoutes from './routes/abtoutofstocks.js';
import billing from './routes/billing.js';
import staffReward from './routes/staffReward.js';
import leaderboard from './routes/leaderboard.js';
import email from './routes/sendEmail.js';
import allPres from './routes/ShowPres.js';

dotenv.config();
cronJobs.init();

const app = express();

const allowedOrigins = [process.env.REACT_APP_PROD_BASE_URL];

const corsOptions = {
    origin: (origin, callback) => {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
};

app.use(cors(corsOptions));



// Parse the request body
app.use(express.json());

// Global middleware for logging
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use('/api/user', userRoutes);
app.use('/api/prescription', prescriptionRoutes);
app.use('/api/reorder', reorderRoutes);
app.use('/api/expired', expiredRoutes);
app.use('/api/abtexpired', abtexpiredRoutes);
app.use('/api/outofstock', outofstockRoutes);
app.use('/api/abtoutofstock', abtoutofstocksRoutes);
app.use('/api/drugouts', drugoutsRoutes);
app.use('/api/medicinenames', medicineNameRoutes);
app.use('/api/billing', billing);
app.use('/api/staffReward', staffReward);
app.use('/api/leaves', LeaveoutRoutes);
app.use('/api/leaderboard', leaderboard);
app.use('/api/salesreport', salesreportsRoutes);
app.use('/api/allPres', allPres);
app.use('/api/email', email);

// Connect to the database
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Connected to db & Listening on ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));

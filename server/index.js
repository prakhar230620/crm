import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dashboardRoutes from './routes/dashboard.js';
import propertyRoutes from './routes/properties.js';
import leadRoutes from './routes/leads.js';

const app = express();
const port = 3000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/real-estate', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});

app.use(cors());
app.use(express.json());

// Routes
app.use('/api', dashboardRoutes);
app.use('/api', propertyRoutes);
app.use('/api', leadRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
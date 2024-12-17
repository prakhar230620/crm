import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  status: { type: String, enum: ['new', 'contacted', 'qualified', 'lost'], default: 'new' },
  source: { type: String },
  notes: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Lead', leadSchema);
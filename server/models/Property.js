import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  address: { type: String, required: true },
  type: { type: String, required: true },
  status: { type: String, enum: ['available', 'sold', 'pending'], default: 'available' },
  bedrooms: { type: Number },
  bathrooms: { type: Number },
  area: { type: Number },
  description: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Property', propertySchema);
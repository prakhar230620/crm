import Lead from '../models/Lead.js';

export const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find();
    res.json(leads);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createLead = async (req, res) => {
  const lead = new Lead(req.body);
  try {
    const newLead = await lead.save();
    res.status(201).json(newLead);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
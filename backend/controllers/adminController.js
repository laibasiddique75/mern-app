import Loan from '../models/Loan.js';
import User from '../models/User.js';

export const getAllApplications = async (req, res) => {
  try {
    const applications = await Loan.find().populate('user');
    res.json(applications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateStatus = async (req, res) => {
  const { id } = req.params;
  const { token, date, location } = req.body;

  try {
    const loan = await Loan.findById(id);
    if (!loan) return res.status(404).json({ message: 'Application not found' });

    loan.token = token || loan.token;
    loan.appointment = {
      date: date || new Date(),
      location: location || 'Saylani Center'
    };
    await loan.save();

    res.json({ message: 'Application updated', loan });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

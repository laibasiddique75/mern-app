import User from '../models/User.js';
import Loan from '../models/Loan.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import QRCode from 'qrcode';

export const registerUser = async (req, res) => {
  const { cnic, email, name } = req.body;

  try {
    const existing = await User.findOne({ cnic });
    if (existing) return res.status(400).json({ message: 'User already exists' });

    const tempPassword = Math.random().toString(36).slice(-8);
    const hashedPassword = await bcrypt.hash(tempPassword, 10);

    const user = await User.create({ cnic, email, name, password: hashedPassword });

    // TODO: Send tempPassword via email (use nodemailer or similar)
    console.log(`Temporary password for ${email}: ${tempPassword}`);

    res.status(201).json({ message: 'User registered, password sent via email' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const loginUser = async (req, res) => {
  const { cnic, password } = req.body;

  try {
    const user = await User.findOne({ cnic });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET);

    res.json({ token, user: { name: user.name, email: user.email, isAdmin: user.isAdmin } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const submitLoan = async (req, res) => {
  const { userId, category, subcategory, amount, period, guarantors } = req.body;

  try {
    const loan = await Loan.create({
      user: userId,
      category,
      subcategory,
      amount,
      period,
      guarantors
    });

    await User.findByIdAndUpdate(userId, { $push: { loanRequests: loan._id } });

    res.status(201).json(loan);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getSlip = async (req, res) => {
  const { id } = req.params;

  try {
    const loan = await Loan.findById(id).populate('user');
    if (!loan) return res.status(404).json({ message: 'Loan not found' });

    // Generate Token and Appointment if not present
    if (!loan.token) {
      loan.token = `SAY-${Math.floor(100000 + Math.random() * 900000)}`;
      loan.appointment = {
        date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days later
        location: 'Saylani Center, Karachi'
      };
      await loan.save();
    }

    const qrData = `${loan.token} - ${loan.user.name}`;
    const qrCode = await QRCode.toDataURL(qrData);

    res.json({
      token: loan.token,
      qrCode,
      appointment: loan.appointment,
      name: loan.user.name,
      category: loan.category
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

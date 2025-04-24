import mongoose from 'mongoose';

const guarantorSchema = new mongoose.Schema({
  name: String,
  email: String,
  location: String,
  cnic: String
});

const loanSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  category: String,
  subcategory: String,
  amount: Number,
  period: Number,
  guarantors: [guarantorSchema],
  appointment: {
    date: Date,
    location: String
  },
  token: String
});

export default mongoose.model('Loan', loanSchema);

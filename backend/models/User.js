import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  cnic: String,
  email: String,
  name: String,
  password: String,
  isAdmin: { type: Boolean, default: false },
  loanRequests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Loan' }]
});

export default mongoose.model('User', userSchema);

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const loanCategories = {
  "Wedding Loans": ["Valima", "Furniture", "Valima Food", "Jahez"],
  "Home Construction Loans": ["Structure", "Finishing", "Loan"],
  "Business Startup Loans": ["Buy Stall", "Advance Rent for Shop", "Shop Assets", "Shop Machinery"],
  "Education Loans": ["University Fees", "Child Fees Loan"],
};

const LoanForm = () => {
  const navigate = useNavigate();

  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [amount, setAmount] = useState('');
  const [period, setPeriod] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [guarantors, setGuarantors] = useState([
    { name: '', email: '', cnic: '', location: '' },
    { name: '', email: '', cnic: '', location: '' }
  ]);

  const handleGuarantorChange = (index, field, value) => {
    const updated = [...guarantors];
    updated[index][field] = value;
    setGuarantors(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      category,
      subcategory,
      amount,
      period,
      address,
      phone,
      guarantors,
    };
    console.log('Loan Form Submitted:', data);
    alert("Loan application submitted successfully!");

    // Redirect with form data
    navigate('/user-dashboard', { state: data });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded shadow space-y-6">
      <h2 className="text-2xl font-semibold text-center text-green-700">Apply for Loan</h2>

      <div>
        <label className="block font-medium">Category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)} required className="w-full border px-4 py-2 rounded">
          <option value="">Select Category</option>
          {Object.keys(loanCategories).map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {category && (
        <div>
          <label className="block font-medium">Subcategory</label>
          <select value={subcategory} onChange={(e) => setSubcategory(e.target.value)} required className="w-full border px-4 py-2 rounded">
            <option value="">Select Subcategory</option>
            {loanCategories[category].map((sub) => (
              <option key={sub}>{sub}</option>
            ))}
          </select>
        </div>
      )}

      <div>
        <label className="block font-medium">Loan Amount (PKR)</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required className="w-full border px-4 py-2 rounded" />
      </div>

      <div>
        <label className="block font-medium">Loan Period (Years)</label>
        <input type="number" value={period} onChange={(e) => setPeriod(e.target.value)} required className="w-full border px-4 py-2 rounded" />
      </div>

      <div>
        <label className="block font-medium">Address</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required className="w-full border px-4 py-2 rounded" />
      </div>

      <div>
        <label className="block font-medium">Phone Number</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required className="w-full border px-4 py-2 rounded" />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-green-600">Guarantors</h3>
        {guarantors.map((g, i) => (
          <div key={i} className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Name" value={g.name} onChange={(e) => handleGuarantorChange(i, 'name', e.target.value)} required className="border px-4 py-2 rounded" />
            <input type="email" placeholder="Email" value={g.email} onChange={(e) => handleGuarantorChange(i, 'email', e.target.value)} required className="border px-4 py-2 rounded" />
            <input type="text" placeholder="CNIC" value={g.cnic} onChange={(e) => handleGuarantorChange(i, 'cnic', e.target.value)} required className="border px-4 py-2 rounded" />
            <input type="text" placeholder="Location" value={g.location} onChange={(e) => handleGuarantorChange(i, 'location', e.target.value)} required className="border px-4 py-2 rounded" />
          </div>
        ))}
      </div>

      <button type="submit" className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition">
        Submit Loan Request
      </button>
    </form>
  );
};

export default LoanForm;

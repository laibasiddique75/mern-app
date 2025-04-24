import React, { useState } from 'react';
import axios from 'axios';

const ApplyLoan = () => {
  const [form, setForm] = useState({
    category: '',
    subcategory: '',
    amount: '',
    period: '',
    address: '',
    phone: '',
    guarantors: [{ name: '', email: '', cnic: '', location: '' }, { name: '', email: '', cnic: '', location: '' }]
  });

  const handleChange = (e, index, isGuarantor = false) => {
    const { name, value } = e.target;
    if (isGuarantor) {
      const newGuarantors = [...form.guarantors];
      newGuarantors[index][name] = value;
      setForm({ ...form, guarantors: newGuarantors });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/users/apply-loan', form);
      alert('Loan request submitted successfully!');
    } catch (error) {
      console.error(error);
      alert('Submission failed!');
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Apply for Loan</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {['category', 'subcategory', 'amount', 'period', 'address', 'phone'].map(field => (
          <input
            key={field}
            name={field}
            value={form[field]}
            onChange={handleChange}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            className="w-full border rounded p-2"
            required
          />
        ))}

        {form.guarantors.map((g, i) => (
          <div key={i} className="border p-3 rounded bg-gray-50 mt-2">
            <h4 className="font-semibold">Guarantor {i + 1}</h4>
            {['name', 'email', 'cnic', 'location'].map(field => (
              <input
                key={field}
                name={field}
                value={g[field]}
                onChange={(e) => handleChange(e, i, true)}
                placeholder={`${field.charAt(0).toUpperCase() + field.slice(1)}`}
                className="w-full border rounded p-2 my-1"
                required
              />
            ))}
          </div>
        ))}
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">Submit Loan Request</button>
      </form>
    </div>
  );
};

export default ApplyLoan;

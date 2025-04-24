import React, { useState } from 'react';

const Register = () => {
  const [cnic, setCnic] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = () => {
    // Basic validation to ensure all fields are filled
    if (!cnic || !email || !name) {
      alert('Please fill in all fields');
      return;
    }

    // Here you can add logic to send the registration request
    // For example, using fetch or axios to make an API call to your backend
    console.log('Registering with:', { cnic, email, name });
  };

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <input
        type="text"
        placeholder="CNIC"
        value={cnic}
        onChange={(e) => setCnic(e.target.value)}
        className="input mb-2 w-full p-2 border rounded"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input mb-2 w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input mb-2 w-full p-2 border rounded"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Submit
      </button>
    </div>
  );
};

export default Register;

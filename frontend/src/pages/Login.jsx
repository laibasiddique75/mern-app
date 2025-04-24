import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the hook

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize navigation

  const handleLogin = () => {
    // Simple validation
    if (!email || !password) {
      alert('Please fill in both fields');
      return;
    }

    // You can replace this with actual login logic
    console.log('Logging in with:', { email, password });

    // Redirect to LoanForm page after login
    navigate('/LoanForm');
  };

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input mb-2 w-full p-2 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input mb-2 w-full p-2 border rounded"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Login
      </button>
    </div>
  );
};

export default Login;

import { useState } from 'react';

const Calculator = () => {
  const [amount, setAmount] = useState('');
  const [period, setPeriod] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const months = period * 12;
    const monthly = amount / months;
    setResult(monthly.toFixed(2));
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl mb-4 font-bold">Loan Calculator</h2>
      <input
        type="number"
        placeholder="Loan Amount"
        className="input mb-2 w-full p-2 border rounded"
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="number"
        placeholder="Loan Period (years)"
        className="input mb-2 w-full p-2 border rounded"
        onChange={(e) => setPeriod(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={calculate}>
        Calculate
      </button>
      {result && <p className="mt-4">Estimated Monthly Payment: PKR {result}</p>}
    </div>
  );
};

export default Calculator;

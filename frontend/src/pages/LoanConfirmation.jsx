import { useLocation } from 'react-router-dom';

const LoanConfirmation = () => {
  const { state } = useLocation();

  if (!state) return <div className="p-6">No loan details available.</div>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-green-700">Loan Confirmed!</h2>
      <div className="bg-white shadow p-4 rounded space-y-2">
        <p><strong>Category:</strong> {state.category}</p>
        <p><strong>Subcategory:</strong> {state.subcategory}</p>
        <p><strong>Amount:</strong> PKR {state.amount}</p>
        <p><strong>Phone:</strong> {state.phone}</p>
        <p className="text-green-600 mt-4">Your application has been received. Please wait for token confirmation.</p>
      </div>
    </div>
  );
};

export default LoanConfirmation;

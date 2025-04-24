import { useLocation, useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <div className="p-6">No loan data found.</div>;

  const handleContinue = () => {
    navigate('/loan-confirmation', { state });
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Loan Application Details</h2>
      <div className="bg-white shadow p-4 rounded space-y-2">
        <p><strong>Category:</strong> {state.category}</p>
        <p><strong>Subcategory:</strong> {state.subcategory}</p>
        <p><strong>Amount:</strong> PKR {state.amount}</p>
        <p><strong>Period:</strong> {state.period} Years</p>
        <p><strong>Phone:</strong> {state.phone}</p>
        <button onClick={handleContinue} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
          Proceed to Confirmation
        </button>
      </div>
    </div>
  );
};

export default UserDashboard;

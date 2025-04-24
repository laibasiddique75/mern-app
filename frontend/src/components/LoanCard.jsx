const LoanCard = ({ category, subcategories, maxAmount, period }) => (
    <div className="bg-white shadow p-4 rounded-lg border border-gray-200">
      <h2 className="text-xl font-bold mb-2">{category}</h2>
      <p><strong>Subcategories:</strong> {subcategories.join(', ')}</p>
      <p><strong>Max Loan:</strong> PKR {maxAmount}</p>
      <p><strong>Loan Period:</strong> {period} years</p>
    </div>
  );
  
  export default LoanCard;
  
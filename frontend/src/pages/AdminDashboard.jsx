import { useState } from 'react';

const AdminDashboard = () => {
  const [filter, setFilter] = useState('All');
  const loans = [
    { id: 1, cnic: '12345-1234567-1', amount: 100000, status: 'Pending' },
    { id: 2, cnic: '54321-7654321-2', amount: 200000, status: 'Approved' },
  ];

  const filteredLoans = filter === 'All' ? loans : loans.filter((l) => l.status === filter);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <div className="mb-4">
        <label className="mr-2 font-semibold">Filter:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded"
        >
          <option>All</option>
          <option>Pending</option>
          <option>Approved</option>
        </select>
      </div>

      <table className="w-full border text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">CNIC</th>
            <th className="p-2">Amount</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredLoans.map((loan) => (
            <tr key={loan.id} className="border-t">
              <td className="p-2">{loan.cnic}</td>
              <td className="p-2">PKR {loan.amount}</td>
              <td className="p-2">{loan.status}</td>
              <td className="p-2 space-x-2">
                {loan.status === 'Pending' && (
                  <>
                    <button className="bg-green-600 text-white px-3 py-1 rounded">Approve</button>
                    <button className="bg-red-600 text-white px-3 py-1 rounded">Reject</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;

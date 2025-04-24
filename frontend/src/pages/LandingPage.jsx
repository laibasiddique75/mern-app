import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-white flex flex-col justify-center items-center text-center p-6">
      <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">
        Saylani Qarze Hasana System
      </h1>
      <p className="text-gray-700 text-lg mb-10 max-w-2xl">
        Welcome to the Microfinance Loan System. Apply for interest-free loans, view your application status, or manage loans as an admin.
      </p>
      <div className="space-x-4">
        <Link to="/register">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition">
            Register
          </button>
        </Link>
        <Link to="/login">
          <button className="bg-white border border-green-600 text-green-600 px-6 py-3 rounded-lg shadow hover:bg-green-100 transition">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Qarze Hasana App</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;

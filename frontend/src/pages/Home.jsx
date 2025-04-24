import LoanCard from '../components/LoanCard';

const loanData = [
  {
    category: "Wedding Loans",
    subcategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
    maxAmount: 500000,
    period: 3
  },
  {
    category: "Home Construction Loans",
    subcategories: ["Structure", "Finishing", "Loan"],
    maxAmount: 1000000,
    period: 5
  },
  {
    category: "Business Startup Loans",
    subcategories: ["Buy Stall", "Advance Rent", "Shop Assets", "Shop Machinery"],
    maxAmount: 1000000,
    period: 5
  },
  {
    category: "Education Loans",
    subcategories: ["University Fees", "Child Fees Loan"],
    maxAmount: "Based on Requirement",
    period: 4
  }
];

const Home = () => {
  return (
    <div className="p-6 grid md:grid-cols-2 gap-6">
      {loanData.map((loan, index) => (
        <LoanCard key={index} {...loan} />
      ))}
    </div>
  );
};

export default Home;

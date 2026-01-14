import { Link } from "react-router-dom";

const Navbar = ({ isVisibleprop = true }: { isVisibleprop?: boolean }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 border-b border-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center relative">
        <Link to="/" className="text-2xl font-bold text-white tracking-tighter">
          AVENIR '26
        </Link>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
          <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
          <a href="/#about" className="text-gray-300 hover:text-white transition-colors">About</a>
          <Link to="/events" className="text-gray-300 hover:text-white transition-colors">Events</Link>
          <Link to="/team" className="text-gray-300 hover:text-white transition-colors">Team</Link>
          <a href="/#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded text-sm transition-colors cursor-pointer">
            Register Now
          </button>
          {/* Mobile Menu Placeholder */}
          <div className="md:hidden">
            <Link to="/events" className="text-sm text-purple-400 mr-4">Events</Link>
            <Link to="/team" className="text-sm text-purple-400">Team</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

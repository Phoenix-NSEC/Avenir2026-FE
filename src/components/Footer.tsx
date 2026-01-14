const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-2xl font-bold text-purple-400 mb-4">AVENIR '26</h3>
          <p className="text-gray-400">
            Netaji Subhash Engineering College<br />
            Techno City, Garia, Kolkata - 700152
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 text-gray-300">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-purple-300">Home</a></li>
            <li><a href="#" className="hover:text-purple-300">Events</a></li>
            <li><a href="#" className="hover:text-purple-300">Team</a></li>
            <li><a href="#" className="hover:text-purple-300">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 text-gray-300">Connect</h4>
          <div className="flex justify-center md:justify-start space-x-4 text-2xl text-gray-400">
            {/* Social Icons Placeholder */}
            <span>[FB]</span>
            <span>[IG]</span>
            <span>[LI]</span>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            &copy; 2026 Phoenix NSEC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

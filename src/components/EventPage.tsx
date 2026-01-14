import { Link } from "react-router-dom";

const EventPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen pt-20 pb-12 px-4 text-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-purple-400">Events</h1>
          <Link to="/" className="text-gray-400 hover:text-white">&larr; Back to Home</Link>
        </div>

        <p className="text-gray-400 mb-12">Explore our upcoming technical and cultural events.</p>

        {/* Placeholder Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors">
              <div className="h-40 bg-gray-700 rounded mb-4 flex items-center justify-center text-gray-500">
                Event Image
              </div>
              <h3 className="text-xl font-semibold mb-2">Event Title {i}</h3>
              <p className="text-gray-400 text-sm mb-4">
                Description of the event goes here. This is a placeholder for future content.
              </p>
              <button className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded text-white font-medium">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventPage;

import { Link } from "react-router-dom";

const Events = () => {
  return (
    <div className="container mx-auto py-12 text-center">
      <h2 className="text-3xl font-bold mb-4 text-white">Events</h2>
      <p className="text-gray-400 mb-8">Discover our upcoming events and activities.</p>
      <Link to="/events" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded transition-colors">
        See More
      </Link>
    </div>
  );
};
export default Events;
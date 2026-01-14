const Team = () => {
  return (
    <div className="bg-gray-900 min-h-screen pt-20 pb-12 px-4 text-white">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-purple-400">Our Team</h1>
        <p className="text-center text-gray-400 mb-12">Meet the people behind Avenir 2026</p>

        {/* Placeholder Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-lg border border-gray-700 flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-700 rounded-full mb-4 flex items-center justify-center text-2xl font-bold text-gray-500">
                ?
              </div>
              <h3 className="text-xl font-semibold">Team Member {i}</h3>
              <p className="text-purple-300">Role Title</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
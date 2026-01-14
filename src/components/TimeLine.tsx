const TimeLine = () => {
  return (
    <section className="py-20 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Timeline</h2>
        <p className="text-gray-400 mb-8">Schedule of events coming soon.</p>

        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="p-4 bg-gray-800 rounded border border-gray-700">
            <h3 className="text-xl font-semibold text-purple-300">Day 1</h3>
            <p className="text-gray-400">// TODO: Event schedule</p>
          </div>
          <div className="p-4 bg-gray-800 rounded border border-gray-700">
            <h3 className="text-xl font-semibold text-purple-300">Day 2</h3>
            <p className="text-gray-400">// TODO: Event schedule</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeLine;

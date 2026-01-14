const FAQ = () => {
  return (
    <section className="py-20 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>

        <div className="grid gap-6 max-w-3xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-purple-300">When is the event?</h3>
            <p className="text-gray-400">May 9-12, 2026 (Tentative)</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2 text-purple-300">How do I register?</h3>
            <p className="text-gray-400">Registration links will be available soon on this website.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
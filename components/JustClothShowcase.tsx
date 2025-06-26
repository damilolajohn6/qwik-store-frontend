const JustClothingShowcase = () => {
  return (
    <section className="text-center py-10 bg-[#F7E6E0AA]">
      <h1
        className="text-[76px] font-black text-6xl mb-8 text-[#014421]"
        style={{ fontFamily: "'Newsreader', serif" }}
      >
        Just Clothing
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-green-100 to-gray-400 p-4 rounded-lg">
          <img
            src="/2.png"
            alt="Model in yellow outfit"
            className="w-full object-cover rounded-md"
          />
        </div>
        <div className="bg-gradient-to-br from-green-100 to-gray-400 p-4 rounded-lg">
          <img
            src="/1.png"
            alt="Model in blue outfit"
            className="w-full object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default JustClothingShowcase;

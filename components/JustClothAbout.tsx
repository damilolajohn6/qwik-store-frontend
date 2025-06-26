import Image from "next/image";
import Link from "next/link";

const JustClothAbout = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <section className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-6 py-12">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <div className="bg-gray-200 rounded-lg overflow-hidden">
            <Image
              src="/just.png" // Replace with actual image path
              alt="Just Clothing"
              width={500}
              height={700}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Text Content Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold mb-6">Just Clothing</h2>
          <p className="text-gray-700 mb-4">
            Welcome to Just Clothing, where fashion meets simplicity and
            simplicity meets style and comfort in its most authentic form. We
            believe in the power of clothing to express your style because we
            understand that true style doesn’t always need to be complicated. We
            are committed to providing pieces that are effortlessly chic, easy
            to wear, and true to who you are.
          </p>
          <p className="text-gray-700 mb-4">
            At Just Clothing, we focus on creating versatile and comfortable
            clothing with the modern individual in mind—someone who values
            quality and comfort. Each collection is designed with modern and
            effortless style in mind, and crafted from quality fabrics to ensure
            lasting wear.
          </p>
          <p className="text-gray-700 mb-4">
            In a world of fast fashion, we focus on quality over quantity,
            offering pieces that stand the test of time. Our journey is rooted
            in simplicity, and we are proud to share it with you.
          </p>
          <Link href="/collections">
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition">
              See More
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default JustClothAbout;

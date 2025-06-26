import { FaInstagram } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-[#2A2829] text-white p-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Signup Section */}
        <div className="w-[500px] ">
          <h2 className="text-heading1-bold font-bold">
            Sign Up and Receive 15% Off
          </h2>
          <div className="mt-3 border-b border-white flex items-center">
            <input
              type="email"
              placeholder="Email: Justclothing.com"
              className="bg-transparent outline-none w-full py-2"
            />
            <span className="text-lg">&rarr;</span>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          <div>
            <h3 className="font-semibold">About</h3>
            <ul className="mt-2 space-y-1">
              <li>All Products</li>
              <li>News/Trend</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Social</h3>
            <ul className="mt-2 space-y-1">
              <li>Instagram</li>
              <li>TikTok</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Support</h3>
            <ul className="mt-2 space-y-1">
              <li>Contact</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="mt-20 flex flex-col items-center">
        <p className="text-lg font-semibold">
          Follow us for the latest trends and updates!
        </p>
        <div className="flex space-x-4 mt-3">
          <button className="bg-white p-3 rounded-full text-pink-600">
            <FaInstagram size={20} />
          </button>
          <button className="bg-white p-3 rounded-full text-gray-900">
            <IoClose size={20} />
          </button>
        </div>
      </div>

      {/* Branding */}
      <div className="mt-10 text-center text-heading1-bold font-bold text-green-200">
        Just Clothing
      </div>
    </footer>
  );
};

export default Footer;

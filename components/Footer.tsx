import { FaInstagram } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-[#2A2829] text-white px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
        {/* Signup Section */}
        <div className="w-full max-w-full sm:max-w-md">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Sign Up and Receive 15% Off
          </h2>
          <div className="mt-3 sm:mt-4 border-b border-white flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none w-full py-2 sm:py-3 text-sm sm:text-base placeholder-gray-300"
            />
            <span className="text-lg sm:text-xl flex-shrink-0">→</span>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          <div>
            <h3 className="text-sm sm:text-base font-semibold">About</h3>
            <ul className="mt-2 sm:mt-3 space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li className="hover:text-gray-300 transition-colors">
                All Products
              </li>
              <li className="hover:text-gray-300 transition-colors">
                News/Trend
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-semibold">Social</h3>
            <ul className="mt-2 sm:mt-3 space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li className="hover:text-gray-300 transition-colors">
                Instagram
              </li>
              <li className="hover:text-gray-300 transition-colors">TikTok</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-semibold">Support</h3>
            <ul className="mt-2 sm:mt-3 space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li className="hover:text-gray-300 transition-colors">Contact</li>
              <li className="hover:text-gray-300 transition-colors">
                Terms & Conditions
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="mt-8 sm:mt-10 lg:mt-12 flex flex-col items-center">
        <p className="text-sm sm:text-base lg:text-lg font-semibold text-center">
          Follow us for the latest trends and updates!
        </p>
        <div className="flex space-x-3 sm:space-x-4 mt-3 sm:mt-4">
          <button className="bg-white p-2 sm:p-3 rounded-full text-pink-600 hover:bg-gray-200 transition-colors">
            <FaInstagram size={16} className="sm:w-5 sm:h-5" />
          </button>
          <button className="bg-white p-2 sm:p-3 rounded-full text-gray-900 hover:bg-gray-200 transition-colors">
            <IoClose size={16} className="sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      {/* Branding */}
      <div className="mt-6 sm:mt-8 lg:mt-10 text-center text-xl sm:text-2xl lg:text-3xl font-bold text-green-200">
        Lina" Clothing
      </div>
    </footer>
  );
};

export default Footer;

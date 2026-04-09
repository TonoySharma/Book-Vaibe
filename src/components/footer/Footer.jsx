import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[radial-gradient(ellipse_at_70%_50%,#0f2238_0%,#070f1e_40%,#020508_100%)] ">

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10">

        {/* Logo */}
        <div className=" sm:flex-row  text-center lg:text-left">
          <h2 className="text-3xl">
            <span className="text-white">Book</span>{" "} 
             <span className="text-purple-700">Vibe</span>
          </h2>

          <p className="text-gray-400 mt-2">
            Discover your next great read since 2024
          </p>
        </div>

        {/* Explore */}
        <div className="text-white sm:flex-row  text-center">
          <h2 className="text-xl font-bold mb-3">Explore</h2>
          <ul className="space-y-2 text-gray-400">
            <li>All Books</li>
            <li>Top Rated</li>
            <li>New Arrivals</li>
            <li>Categories</li>
          </ul>
        </div>

        {/* Account */}
        <div className="text-white sm:flex-row  text-center">
          <h2 className="text-xl font-bold mb-3">Account</h2>
          <ul className="space-y-2 text-gray-400">
            <li>Sign In</li>
            <li>Sign Up</li>
            <li>My Read List</li>
            <li>Reading History</li>
          </ul>
        </div>

        {/* Legal */}
        <div className="text-white sm:flex-row  text-center">
          <h2 className="text-xl font-bold mb-3">Legal</h2>
          <ul className="space-y-2 text-gray-400">
            <li>Terms of use</li>
            <li>Privacy policy</li>
            <li>Cookie policy</li>
          </ul>
        </div>

      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-700 text-center py-5">
        <p className="text-gray-400">
          <FaRegCopyright className="inline mr-2" />
          {new Date().getFullYear()} BookVibe. All Rights Reserved.
        </p>
      </div>

    </div>
  );
};

export default Footer;
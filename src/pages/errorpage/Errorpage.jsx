import React from "react";

const Errorpage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-500 to-indigo-600 text-white px-4">
      
      {/* Error Code */}
      <h1 className="text-8xl font-extrabold mb-4">404</h1>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-center">
        Oops! Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-200 text-center max-w-md mb-6">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <button
        onClick={() => (window.location.href = "/")}
        className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-full shadow-lg cursor-pointer hover:bg-gray-100 transition duration-300"
      >
        🔙 Go Back Home
      </button>

      {/* Extra Design Circle */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-purple-400 rounded-full opacity-20 blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-indigo-400 rounded-full opacity-20 blur-2xl"></div>
    </div>
  );
};

export default Errorpage;

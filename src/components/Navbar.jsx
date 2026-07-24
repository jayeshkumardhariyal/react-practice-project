import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  let token = localStorage.getItem("token");
  // console.log(token);

  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-black shadow-2xl border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-slate-900 px-4 py-2 rounded-lg">
                <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 hover:from-purple-300 hover:to-cyan-300 transition-all duration-300 cursor-pointer">
                  <Link to={"/"}>CRUD-APP</Link>
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex gap-6 items-center">
            {token ? (
              <nav className="flex gap-6 items-center">
                <button
                  className="relative group px-6 py-2 font-bold text-lg bg-cyan-400 rounded-2xl cursor-pointer  group-hover:opacity-100 transition-opacity duration-300 rounded-lg "
                  onClick={handleLogOut}
                >
                  Logout
                </button>
              </nav>
            ) : (
              <nav className="flex gap-6 items-center">
                {" "}
                <Link
                  to={"/login"}
                  className="relative group px-6 py-2 font-bold text-lg text-slate-100 overflow-hidden rounded-lg transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  <span className="relative flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full group-hover:w-3 transition-all duration-300"></span>
                    Login
                  </span>
                </Link>
                <Link
                  to={"/signup"}
                  className="relative group px-8 py-3 font-bold text-lg text-white rounded-lg overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-110"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 opacity-100 group-hover:opacity-110 transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full group-hover:animate-pulse"></span>
                    Signup
                  </span>
                </Link>
              </nav>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

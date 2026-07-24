import React, { useState } from "react";
import axios from "axios";

const SignupPage = () => {
  const [formData, SetFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    let { name, value } = e.target;
    SetFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      let resp = await axios.post("http://localhost:5000/users", formData);
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Main Card */}
        <div className="relative group">
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>

          {/* Card Content */}
          <div className="relative bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-700">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
                Create Account
              </h1>
              <p className="text-slate-400 text-sm">
                Join us and get started today
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Username Input */}
              <div className="group/input">
                <label className="block text-sm font-semibold text-slate-300 mb-2 group-hover/input:text-purple-400 transition-colors">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                  value={formData.username}
                  onChange={handleChange}
                  name="username"
                  className="w-full px-4 py-3 rounded-xl bg-slate-700 border-2 border-slate-600 text-white placeholder-slate-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-300 hover:border-slate-500"
                />
              </div>

              {/* Email Input */}
              <div className="group/input">
                <label className="block text-sm font-semibold text-slate-300 mb-2 group-hover/input:text-pink-400 transition-colors">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  name="email"
                  className="w-full px-4 py-3 rounded-xl bg-slate-700 border-2 border-slate-600 text-white placeholder-slate-400 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 transition-all duration-300 hover:border-slate-500"
                />
              </div>

              {/* Password Input */}
              <div className="group/input">
                <label className="block text-sm font-semibold text-slate-300 mb-2 group-hover/input:text-cyan-400 transition-colors">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  name="password"
                  className="w-full px-4 py-3 rounded-xl bg-slate-700 border-2 border-slate-600 text-white placeholder-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 transition-all duration-300 hover:border-slate-500"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="relative w-full mt-8 px-6 py-3 font-bold text-lg text-white rounded-xl overflow-hidden group/btn transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                {/* Button Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 transition-all duration-300"></div>

                {/* Button Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-0 group-hover/btn:opacity-100 blur transition-opacity duration-300"></div>

                {/* Button Text */}
                <span className="relative flex items-center justify-center gap-2">
                  <span>Create Account</span>
                  <svg
                    className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </button>
            </form>

            {/* Footer */}
            <div className="mt-6 text-center">
              <p className="text-slate-400 text-sm">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-purple-400 font-semibold hover:text-pink-400 transition-colors"
                >
                  Login here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

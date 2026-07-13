import React, { useState } from 'react';
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi'; // Feather icons
import { Link } from 'react-router-dom';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Salon Sign Up:', formData);
    // Add signup logic here (API call etc.)
  };

  return (
    <div className="min-h-screen bg-[#F9FBFA] flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans selection:bg-[#1B4D43] selection:text-white">
      <div className="w-full max-w-[1100px] h-auto lg:h-[650px] bg-white rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(27,77,67,0.06)] flex flex-col lg:flex-row">
        
        {/* Left Side: Brand Section */}
        <div
          className="hidden lg:flex flex-col justify-between w-1/2 p-12 relative text-white bg-cover bg-center"
          style={{ 
            backgroundImage: `linear-gradient(rgba(27, 77, 67, 0.8), rgba(27, 77, 67, 0.95)), url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1000')` 
          }}
        >
          <div className="font-serif text-2xl font-bold tracking-wider">LUMINOUS.</div>
          
          <div className="space-y-4">
            <h2 className="font-serif text-4xl font-medium leading-tight">
              Begin Your <br />Luxury Journey
            </h2>
            <p className="font-light text-sm text-white/80 leading-relaxed max-w-md">
              Create your boutique salon account to book premium services, track your stylist history, and enjoy tailor‑made luxury care.
            </p>
          </div>
          
          <div className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} Luminous Salon & Spa. All rights reserved.
          </div>
        </div>

        {/* Right Side: Form Section */}
        <div className="flex-1 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
          <div className="mb-8">
            <h1 className="font-serif text-3xl sm:text-4xl text-[#1B4D43] font-medium tracking-tight mb-2">
              Create Account
            </h1>
            <p className="text-gray-500 text-sm">
              Fill in your details to join our premium salon community.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Input */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#1B4D43]">
                Email Address
              </label>
              <div className="relative group">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400 group-focus-within:text-[#1B4D43] transition-colors">
                  <FiMail size={18} />
                </span>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="name@example.com"
                  className="w-full pl-11 pr-4 py-3.5 bg-[#F9FBFA] border border-gray-200 rounded-xl text-sm transition-all focus:outline-none focus:border-[#1B4D43] focus:bg-white focus:ring-4 focus:ring-[#1B4D43]/5 text-gray-800 placeholder-gray-400"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-xs font-semibold uppercase tracking-wider text-[#1B4D43]">
                Password
              </label>
              <div className="relative group">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400 group-focus-within:text-[#1B4D43] transition-colors">
                  <FiLock size={18} />
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  required
                  placeholder="••••••••"
                  className="w-full pl-11 pr-12 py-3.5 bg-[#F9FBFA] border border-gray-200 rounded-xl text-sm transition-all focus:outline-none focus:border-[#1B4D43] focus:bg-white focus:ring-4 focus:ring-[#1B4D43]/5 text-gray-800 placeholder-gray-400"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-600 transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>
            </div>

            {/* Confirm Password Input */}
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="block text-xs font-semibold uppercase tracking-wider text-[#1B4D43]">
                Confirm Password
              </label>
              <div className="relative group">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400 group-focus-within:text-[#1B4D43] transition-colors">
                  <FiLock size={18} />
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  required
                  placeholder="••••••••"
                  className="w-full pl-11 pr-12 py-3.5 bg-[#F9FBFA] border border-gray-200 rounded-xl text-sm transition-all focus:outline-none focus:border-[#1B4D43] focus:bg-white focus:ring-4 focus:ring-[#1B4D43]/5 text-gray-800 placeholder-gray-400"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-2 py-3.5 bg-[#1B4D43] hover:bg-[#133931] text-white font-semibold rounded-xl text-sm tracking-wide shadow-[0_4px_12px_rgba(27,77,67,0.15)] transition-all transform active:scale-[0.98]"
            >
              Sign Up
            </button>
          </form>

          {/* Redirect to Login */}
          <div className="mt-8 text-center text-sm text-gray-500">
            Already have an account?{' '}
            <Link to="/login" className="text-[#1B4D43] font-semibold hover:underline">
              Sign In
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

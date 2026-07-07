import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLock, FiEye, FiEyeOff, FiStar, FiArrowRight } from 'react-icons/fi';
import { RiScissorsCutLine } from 'react-icons/ri';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Premium Salon Login:', formData);
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] flex items-center justify-center p-6 font-sans antialiased relative overflow-hidden">
      
      {/* Soft Ambient Glows using your color palette */}
      <div className="absolute top-[-5%] right-[-5%] w-96 h-96 bg-[#A855F7]/8  rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-5%] left-[-5%] w-96 h-96 bg-[#F472B6]/8 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-[#1B4D43]/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Main Container */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[420px] bg-[#F9FAFB] border border-gray-200/60 rounded-3xl p-8 shadow-[0_25px_60px_rgba(27,77,67,0.04)] relative z-10"
      >
        
        {/* Header Section with Deep Green #1B4D43 + White Icon */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-14 h-14 bg-[#1B4D43] rounded-2xl flex items-center justify-center shadow-lg shadow-[#1B4D43]/20 border border-emerald-800/20 relative group">
            {/* White Icon inside Deep Green Badge */}
            <RiScissorsCutLine className="text-white group-hover:rotate-45 transition-transform duration-300" size={24} />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F472B6] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#F472B6]"></span>
            </span>
          </div>
          
          <h2 className="text-2xl font-bold tracking-tight text-[#111827] mt-4">
            CTV <span className="text-[#1B4D43]">Saloon</span>
          </h2>
          <p className="text-xs font-medium text-[#6B7280] mt-1.5 flex items-center gap-1">
            <FiStar className="text-[#EAB308] fill-[#EAB308]" size={12} /> 
            Premium Management Portal
          </p>
        </div>

        {/* Input Fields Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Email Address */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-widest text-[#6B7280] block ml-1">
              Email Address
            </label>
            <div className="relative flex items-center group">
              {/* Luxury Gold Icon Accent */}
              <span className="absolute left-4 text-[#EAB308] flex items-center justify-center pointer-events-none">
                <FiMail size={18} />
              </span>
              <input
                type="email"
                required
                placeholder="management@ctvsaloon.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-12 pr-4 py-3.5 bg-[#FFFFFF] border border-gray-200 rounded-2xl text-sm text-[#111827] placeholder-gray-400 focus:outline-none focus:border-[#1B4D43] focus:ring-4 focus:ring-[#1B4D43]/5 transition-all duration-200"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <div className="flex justify-between items-center ml-1">
              <label className="text-xs font-semibold uppercase tracking-widest text-[#6B7280]">
                Password
              </label>
              {/* Purple Highlight Link */}
              <a href="#forgot" className="text-xs font-medium text-[#A855F7] hover:text-[#F472B6] transition-colors">
                Forgot?
              </a>
            </div>
            <div className="relative flex items-center group">
              <span className="absolute left-4 text-[#EAB308] flex items-center justify-center pointer-events-none">
                <FiLock size={18} />
              </span>
              <input
                type={showPassword ? 'text' : 'password'}
                required
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full pl-12 pr-12 py-3.5 bg-[#FFFFFF] border border-gray-200 rounded-2xl text-sm text-[#111827] placeholder-gray-400 focus:outline-none focus:border-[#1B4D43] focus:ring-4 focus:ring-[#1B4D43]/5 transition-all duration-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 text-[#6B7280] hover:text-[#111827] transition-colors"
              >
                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </button>
            </div>
          </div>

          {/* Remember Option */}
          <div className="flex items-center pt-1 ml-1">
            <input
              id="remember"
              type="checkbox"
              className="w-4 h-4 rounded border-gray-300 text-[#1B4D43] focus:ring-0 cursor-pointer accent-[#1B4D43]"
            />
            <label htmlFor="remember" className="ml-2.5 text-xs font-medium text-[#6B7280] cursor-pointer select-none">
              Keep me logged in
            </label>
          </div>

          {/* Primary Action Button: #1B4D43 with White Text -> Hovers to Purple #A855F7 */}
          <button
            type="submit"
            className="w-full py-3.5 bg-[#1B4D43] hover:bg-[#A855F7] active:bg-purple-700 text-white font-semibold rounded-2xl text-sm transition-all duration-300 shadow-lg shadow-[#1B4D43]/10 flex items-center justify-center gap-2 group mt-4"
          >
            Sign In to Dashboard
            <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200 text-white" size={16} />
          </button>
        </form>

        {/* Footer info */}
        <div className="text-center mt-8 pt-5 border-t border-gray-100 text-[11px] text-[#6B7280]">
          Secured Workspace • Powered by CTV Ecosystem
        </div>

      </motion.div>
    </div>
  );
};

export default Login;
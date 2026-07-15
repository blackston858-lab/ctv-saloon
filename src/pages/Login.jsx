import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLock, FiEye, FiEyeOff, FiArrowRight } from 'react-icons/fi';
import { RiDoubleQuotesR } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Salon Login:', formData);
  };

  // Motion variants for staggered loading (matching Signup exactly)
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.06,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans selection:bg-[#1B4D43]/10 selection:text-[#1B4D43] antialiased">
      <div className="w-full max-w-[1100px] bg-white rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(27,77,67,0.04)] border border-stone-100 flex flex-col lg:flex-row min-h-[600px] lg:h-[700px]">
        
        {/* Left Side: Brand Panel (Visible on desktop) */}
        <div
          className="hidden lg:flex flex-col justify-between w-1/2 p-12 relative text-white bg-cover bg-center overflow-hidden"
          style={{ 
            backgroundImage: `linear-gradient(rgba(27, 77, 67, 0.75), rgba(27, 77, 67, 0.95)), url('https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=1000')` 
          }}
        >
          {/* Subtle Ambient Light Overlay */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#C5A880]/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10">
            <span className="font-serif text-2xl font-bold tracking-widest text-[#EAD0A8]">LUMINOUS.</span>
          </div>

          {/* Social Proof / Glassmorphic Testimonial */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl p-6 relative z-10 shadow-xl max-w-sm self-start my-auto"
          >
            <RiDoubleQuotesR className="text-[#C5A880] text-3xl mb-3" />
            <p className="text-white/90 text-sm font-light leading-relaxed">
              "The booking experience is entirely seamless. In just two taps, I've secured my stylist and customized my entire boutique salon visit."
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-stone-300 overflow-hidden border border-white/20">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100" 
                  alt="Client portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Sophia Martinez</p>
                <p className="text-[10px] text-white/60">Verified Member</p>
              </div>
            </div>
          </motion.div>
          
          <div className="relative z-10 flex justify-between items-center text-[11px] text-white/50 tracking-wider">
            <span>&copy; {new Date().getFullYear()} Luminous Salon & Spa.</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms & Privacy</span>
          </div>
        </div>

        {/* Right Side: Form Panel */}
        <div className="flex-1 p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-white">
          
          {/* Logo element for mobile viewports */}
          <div className="lg:hidden mb-6">
            <span className="font-serif text-xl font-bold tracking-widest text-[#1B4D43]">LUMINOUS.</span>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-md mx-auto"
          >
            {/* Header Title */}
            <motion.div variants={itemVariants} className="mb-8">
              <h1 className="font-serif text-3xl sm:text-4xl text-[#1B4D43] font-medium tracking-tight mb-2">
                Welcome Back
              </h1>
              <p className="text-stone-500 text-sm">
                Sign in to manage your appointments and personalized beauty profile.
              </p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Email Address */}
              <motion.div variants={itemVariants} className="space-y-1.5">
                <label htmlFor="email" className="block text-[11px] font-bold uppercase tracking-wider text-stone-500">
                  Email Address
                </label>
                <div className="relative group">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-stone-400 group-focus-within:text-[#1B4D43] transition-colors pointer-events-none">
                    <FiMail size={18} />
                  </span>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="name@example.com"
                    className="w-full pl-11 pr-4 py-3 bg-[#FAF9F6] border border-stone-200 rounded-xl text-sm transition-all duration-200 focus:outline-none focus:border-[#1B4D43] focus:bg-white focus:ring-4 focus:ring-[#1B4D43]/5 text-stone-800 placeholder-stone-400"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </motion.div>

              {/* Password */}
              <motion.div variants={itemVariants} className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label htmlFor="password" className="block text-[11px] font-bold uppercase tracking-wider text-stone-500">
                    Password
                  </label>
                  <a href="#forgot" className="text-xs font-semibold text-[#C5A880] hover:text-[#a88a62] transition-colors">
                    Forgot?
                  </a>
                </div>
                <div className="relative group">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-stone-400 group-focus-within:text-[#1B4D43] transition-colors pointer-events-none">
                    <FiLock size={18} />
                  </span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    required
                    placeholder="••••••••"
                    className="w-full pl-11 pr-12 py-3 bg-[#FAF9F6] border border-stone-200 rounded-xl text-sm transition-all duration-200 focus:outline-none focus:border-[#1B4D43] focus:bg-white focus:ring-4 focus:ring-[#1B4D43]/5 text-stone-800 placeholder-stone-400"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-4 text-stone-400 hover:text-stone-600 transition-colors focus:outline-none"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                  </button>
                </div>
              </motion.div>

              {/* Keep me logged in */}
              <motion.div variants={itemVariants} className="flex items-center pt-1 ml-1">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 rounded border-stone-300 text-[#1B4D43] focus:ring-0 cursor-pointer accent-[#1B4D43]"
                />
                <label htmlFor="remember" className="ml-2.5 text-xs font-medium text-stone-500 cursor-pointer select-none">
                  Keep me logged in
                </label>
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={itemVariants} className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#1B4D43] hover:bg-[#133931] active:bg-[#0c231e] text-white font-semibold rounded-xl text-sm tracking-wide shadow-md shadow-[#1B4D43]/10 hover:shadow-lg hover:shadow-[#1B4D43]/15 transition-all flex items-center justify-center gap-2 group"
                >
                  Sign In to Salon
                  <FiArrowRight className="group-hover:translate-x-0.5 transition-transform duration-200" size={16} />
                </button>
              </motion.div>
            </form>

            {/* Redirect / Alternative Action */}
            <motion.div variants={itemVariants} className="mt-6 text-center text-sm text-stone-500">
              Don’t have an account yet?{' '}
              <Link to="/signup" className="text-[#1B4D43] font-semibold hover:text-[#C5A880] transition-colors">
                Sign Up
              </Link>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
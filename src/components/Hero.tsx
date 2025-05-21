import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen pt-24 flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(67,56,202,0.1),rgba(10,10,10,0)_50%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.5,
              type: "spring",
              stiffness: 100
            }}
            className="relative mb-8"
          >
            <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-gray-800 relative">
              <img 
                src="https://files.catbox.moe/7l56ie.jpg" 
                alt="Profile Avatar" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10"></div>
            </div>
            {/* Animated glow effect */}
            <div className="absolute -inset-0.5 rounded-full blur-sm bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-cyan-500/30 animate-pulse"></div>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4"
          >
            Selamat Datang di <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500">Portofolio Saya</span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xl text-gray-400 max-w-3xl mb-8"
          >
            Menyediakan layanan pengembangan bot WhatsApp, panel hosting, dan solusi otomatisasi untuk kebutuhan digital Anda.
          </motion.p>
          
          <motion.a
            href="https://wa.me/6281234567890" 
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 15px rgba(124, 58, 237, 0.5)" 
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white font-medium py-3 px-8 rounded-full flex items-center gap-2 transition-all duration-300"
          >
            <MessageCircle size={20} />
            Hubungi Saya
          </motion.a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          delay: 1,
          duration: 1.5, 
          repeat: Infinity,
          repeatType: "loop"
        }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-gray-500 flex justify-center">
          <div className="w-1 h-3 bg-blue-500 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};
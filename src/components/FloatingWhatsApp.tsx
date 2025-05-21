import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/6285727264161?text=Halo, saya tertarik dengan layanan Anda"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi via WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1.5
      }}
      whileHover={{ 
        scale: 1.1,
        boxShadow: "0 0 15px rgba(37, 99, 235, 0.5)"
      }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg"
    >
      <MessageCircle size={26} />
      
      {/* Animated pulse ring */}
      <span className="absolute inset-0 rounded-full border-4 border-green-500/60 animate-ping"></span>
    </motion.a>
  );
};
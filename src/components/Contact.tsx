import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.05),transparent_50%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Hubungi <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-purple-500">Saya</span>
          </motion.h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-violet-500 to-purple-500 mx-auto mb-6"
          />
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400 max-w-2xl mx-auto mb-10"
          >
            Tertarik dengan layanan saya? Silakan hubungi untuk konsultasi dan penawaran khusus sesuai kebutuhan Anda.
          </motion.p>
        </div>
        
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 md:p-10 text-center"
        >
          <h3 className="text-2xl font-bold mb-6 text-white">Konsultasi Gratis!</h3>
          <p className="text-gray-300 mb-8">
            Dapatkan solusi terbaik untuk kebutuhan digital Anda. Saya siap membantu mengembangkan solusi yang tepat dan efisien.
          </p>
          
          <motion.a
            href="https://wa.me/6285727264161?text=Halo, saya tertarik dengan layanan Anda. Bisakah kita berdiskusi lebih lanjut?" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(124, 58, 237, 0.5)" 
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-medium py-4 px-8 rounded-xl text-lg transition-all duration-300 animate-pulse-slow"
          >
            <MessageCircle size={24} />
            Hubungi via WhatsApp
          </motion.a>
          
          <div className="mt-8 text-gray-400">
            <p>Atau kirim email ke:</p>
            <a 
              href="mailto:rasyaanaufall@gmail.com" 
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              rasyaanaufall@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
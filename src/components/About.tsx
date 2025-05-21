import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(29,78,216,0.05),transparent_50%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 
            variants={variants}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Tentang <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">Saya</span>
          </motion.h2>
          
          <motion.div
            variants={variants}
            className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"
          />
          
          <motion.p 
            variants={variants}
            className="text-gray-300 text-lg leading-relaxed mb-6"
          >
            Saya seorang pengembang yang fokus pada layanan hosting, panel, dan otomasi bot WhatsApp. Dengan pengalaman dalam pengembangan web dan server, saya membantu bisnis dan individu memanfaatkan kekuatan otomatisasi untuk meningkatkan efisiensi operasional.
          </motion.p>
          
          <motion.p 
            variants={variants}
            className="text-gray-400 text-lg leading-relaxed mb-6"
          >
            Spesialisasi saya meliputi pengembangan bot WhatsApp untuk otomatisasi pesan dan layanan pelanggan, setup panel hosting dengan Pterodactyl, dan konfigurasi VPS untuk berbagai kebutuhan. Saya memastikan solusi yang saya berikan berjalan dengan performa tinggi, aman, dan mudah digunakan.
          </motion.p>
          
          <motion.p 
            variants={variants}
            className="text-cyan-400 text-lg font-medium"
          >
            "Otomatisasi adalah kunci untuk menghemat waktu dan sumber daya Anda"
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
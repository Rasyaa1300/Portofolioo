import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageSquare, Server, Globe, Terminal, ArrowRight } from 'lucide-react';

interface Product {
  title: string;
  description: string;
  icon: React.ReactNode;
  price: string;
  color: string;
}

export const Products: React.FC = () => {
  const products: Product[] = [
    {
      title: 'Script Bot WhatsApp',
      description: 'Bot WhatsApp dengan fitur lengkap untuk otomatisasi pesan, respons, dan layanan pelanggan.',
      icon: <MessageSquare size={32} />,
      price: 'Rp 40.000',
      color: 'from-green-500 to-emerald-700'
    },
    {
      title: 'Panel Pterodactyl',
      description: 'Instalasi dan konfigurasi panel Pterodactyl untuk manajemen game, server dan aplikasi.',
      icon: <Server size={32} />,
      price: 'Rp 10.000',
      color: 'from-blue-500 to-indigo-700'
    },
    {
      title: 'Admin Panel Pterodactyl',
      description: 'Panel administrasi khusus untuk layanan hosting dengan interface yang intuitif.',
      icon: <Globe size={32} />,
      price: 'Rp 20.000',
      color: 'from-purple-500 to-violet-700'
    },
    {
      title: 'Vps Digital Ocean & Vultr',
      description: 'Vps Digital Ocean Dan Vultr',
      icon: <Terminal size={32} />,
      price: 'Rp 25.000',
      color: 'from-red-500 to-rose-700'
    }
  ];

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="products" className="py-20 lg:py-28 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(76,29,149,0.05),transparent_70%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Produk <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">Digital</span>
          </motion.h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto mb-6"
          />
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Solusi digital untuk meningkatkan efisiensi bisnis dan layanan Anda melalui otomatisasi dan sistem yang andal.
          </motion.p>
        </div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden transition-all duration-300 group"
            >
              <div className="p-6 md:p-8 h-full flex flex-col">
                <div className={`w-14 h-14 rounded-lg mb-6 flex items-center justify-center bg-gradient-to-br ${product.color}`}>
                  <div className="text-white">
                    {product.icon}
                  </div>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
                  {product.title}
                </h3>
                
                <p className="text-gray-400 mb-6 flex-grow">
                  {product.description}
                </p>
                
                <div className="mt-auto">
                  <p className="text-2xl font-bold text-white mb-4">
                    {product.price}
                  </p>
                  
                  <a 
                    href={`https://wa.me/6285727264161?text=Halo, saya tertarik dengan produk ${product.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white font-medium py-3 px-6 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 group-hover:shadow-lg"
                  >
                    Order via WhatsApp
                    <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CreditCard, Copy, Check, Smartphone } from 'lucide-react';

interface PaymentMethod {
  name: string;
  code: string;
  icon: React.ReactNode;
}

export const Payment: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [copiedMethod, setCopiedMethod] = useState<string | null>(null);

  const paymentMethods: PaymentMethod[] = [
    { name: 'Dana', code: '081234567890', icon: <Smartphone size={20} /> },
    { name: 'OVO', code: '081234567890', icon: <Smartphone size={20} /> },
    { name: 'Gopay', code: '081234567890', icon: <Smartphone size={20} /> },
    { name: 'BCA', code: '1234567890', icon: <CreditCard size={20} /> },
  ];

  const handleCopyCode = (methodName: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedMethod(methodName);
    setTimeout(() => setCopiedMethod(null), 2000);
  };

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
    hidden: { y: 20, opacity: 0 },
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
    <section id="payment" className="py-20 lg:py-28 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,58,138,0.05),transparent_60%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Metode <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">Pembayaran</span>
          </motion.h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-6"
          />
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Berbagai pilihan metode pembayaran untuk kemudahan transaksi Anda.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* QRIS Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex justify-center"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-80 transition duration-300"></div>
                <div className="relative bg-slate-800 p-4 rounded-2xl">
                  <div className="bg-white p-2 rounded-lg">
                    <img 
                      src="https://images.pexels.com/photos/7876439/pexels-photo-7876439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="QRIS Code" 
                      className="max-w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-center text-sm text-gray-400 mt-2">QRIS - Scan untuk Pembayaran</p>
                </div>
              </div>
            </motion.div>
            
            {/* Other Payment Methods */}
            <div>
              <motion.div 
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="space-y-4"
              >
                <h3 className="text-lg font-medium text-gray-300 mb-4">Metode Pembayaran Lain:</h3>
                
                {paymentMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 flex items-center justify-between transition-all duration-300 hover:bg-slate-800"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-blue-400">
                        {method.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-white">{method.name}</h4>
                        <p className="text-sm text-gray-400">{method.code}</p>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => handleCopyCode(method.name, method.code)}
                      className="text-gray-400 hover:text-white focus:outline-none transition-colors duration-300"
                      aria-label={`Copy ${method.name} code`}
                    >
                      {copiedMethod === method.name ? (
                        <Check size={20} className="text-green-500" />
                      ) : (
                        <Copy size={20} />
                      )}
                    </button>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
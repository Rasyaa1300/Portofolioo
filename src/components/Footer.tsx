import React from 'react';
import { motion } from 'framer-motion';
import { Github, MessageCircle, MessageSquare } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/rasyaaofficial', 
      icon: <Github size={18} />
    },
    { 
      name: 'Telegram', 
      url: 'https://t.me/RasyaaOfficial', 
      icon: <MessageSquare size={18} />
    },
    { 
      name: 'WhatsApp', 
      url: 'https://wa.me/6285727264161', 
      icon: <MessageCircle size={18} />
    },
  ];

  return (
    <footer className="py-8 border-t border-slate-800/50 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-400 text-center md:text-left">
              &copy; {currentYear} Rasyaa Beginner For Programming All rights reserved.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center space-x-4 mt-4 md:mt-0"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: '#60a5fa' }}
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
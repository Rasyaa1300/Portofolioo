import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, Server, Database, Terminal, 
  CloudLightning, Shield, Zap, GitBranch, 
  Globe, BarChart 
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
}

export const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'Node.js', icon: <Code size={32} /> },
    { name: 'JavaScript', icon: <Terminal size={32} /> },
    { name: 'Tailwind CSS', icon: <Code size={32} /> },
    { name: 'MongoDB', icon: <Database size={32} /> },
    { name: 'Pterodactyl', icon: <Server size={32} /> },
    { name: 'Html', icon: <Zap size={32} /> },
    { name: 'Css', icon: <BarChart size={32} /> },
    { name: 'Git', icon: <GitBranch size={32} /> },
    { name: 'Nginx', icon: <Globe size={32} /> },
    { name: 'Cloud Engginer', icon: <CloudLightning size={32} /> },
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
    <section id="skills" className="py-20 lg:py-28 relative">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,64,175,0.05),transparent_70%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Keahlian <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Teknis</span>
          </motion.h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"
          />
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Teknologi dan platform yang saya kuasai untuk mengembangkan solusi digital yang handal dan efisien.
          </motion.p>
        </div>
        
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)"
              }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 flex flex-col items-center group transition-all duration-300"
            >
              <div className="text-blue-400 mb-3 group-hover:text-blue-300 transition-colors duration-300">
                {skill.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors duration-300">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
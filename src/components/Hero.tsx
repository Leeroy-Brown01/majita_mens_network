import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  children?: ReactNode;
  height?: string;
}

const Hero = ({ 
  title, 
  subtitle, 
  backgroundImage, 
  backgroundVideo, 
  children,
  height = '600px' 
}: HeroProps) => {
  return (
    <div className="hero" style={{ height }}>
      {backgroundVideo && (
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      )}
      {backgroundImage && !backgroundVideo && (
        <div 
          className="hero-image" 
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      <div className="hero-overlay" />
      
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-title"
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle"
          >
            {subtitle}
          </motion.p>
        )}
        
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-actions"
          >
            {children}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Hero;

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import './Card.css';

interface CardProps {
  title: string;
  image?: string;
  children: ReactNode;
  footer?: ReactNode;
  onClick?: () => void;
  className?: string;
}

const Card = ({ title, image, children, footer, onClick, className = '' }: CardProps) => {
  return (
    <motion.div
      className={`card ${className}`}
      onClick={onClick}
      whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)' }}
      transition={{ duration: 0.3 }}
    >
      {image && (
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
      )}
      
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <div className="card-body">{children}</div>
      </div>
      
      {footer && <div className="card-footer">{footer}</div>}
    </motion.div>
  );
};

export default Card;

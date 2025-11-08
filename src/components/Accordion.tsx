import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import type { AccordionItem as AccordionItemType } from '../types';
import './Accordion.css';

interface AccordionProps {
  items: AccordionItemType[];
}

const Accordion = ({ items }: AccordionProps) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="accordion">
      {items.map((item) => (
        <div key={item.id} className="accordion-item">
          <button
            className={`accordion-header ${activeId === item.id ? 'active' : ''}`}
            onClick={() => toggleItem(item.id)}
          >
            <span>{item.title}</span>
            <motion.div
              animate={{ rotate: activeId === item.id ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaChevronDown />
            </motion.div>
          </button>
          
          <AnimatePresence>
            {activeId === item.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="accordion-content-wrapper"
              >
                <div 
                  className="accordion-content"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Accordion;

import { useEffect } from 'react';
import './NotificationModal.css';

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  type: 'success' | 'error';
}

function NotificationModal({ isOpen, onClose, title, message, type }: NotificationModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className={`modal-icon ${type}`}>
          {type === 'success' ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="15" y1="9" x2="9" y2="15" />
              <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
          )}
        </div>
        <h2 className="modal-title">{title}</h2>
        <p className="modal-message">{message}</p>
        <button className={`modal-btn ${type}`} onClick={onClose}>
          {type === 'success' ? 'Great!' : 'Try Again'}
        </button>
      </div>
    </div>
  );
}

export default NotificationModal;

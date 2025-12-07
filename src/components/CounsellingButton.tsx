import { Link } from 'react-router-dom';
import { FaLifeRing } from 'react-icons/fa';
import './CounsellingButton.css';

function CounsellingButton() {
  return (
    <Link to="/contact" className="counselling-help-button" title="Need counselling support?">
      <FaLifeRing className="help-icon" />
      <span className="help-text">Need Help?</span>
    </Link>
  );
}

export default CounsellingButton;

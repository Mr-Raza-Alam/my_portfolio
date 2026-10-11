import { useState, useRef, useEffect } from 'react';
import { Download, ChevronDown, FileText } from 'lucide-react';

const ResumeDropdown = ({ 
  buttonClass = 'btn btn-resume', 
  iconSize = 14, 
  align = 'right',
  label = 'Resume',
  onItemClick 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleSelect = () => {
    setIsOpen(false);
    if (onItemClick) {
      onItemClick();
    }
  };

  return (
    <div className="resume-dropdown-container" ref={dropdownRef}>
      <button
        type="button"
        className={`${buttonClass} resume-dropdown-trigger`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <Download size={iconSize} />
        <span>{label}</span>
        <ChevronDown 
          size={iconSize} 
          className="dropdown-chevron"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        />
      </button>

      {isOpen && (
        <div className={`resume-dropdown-menu align-${align}`}>
          <div className="resume-dropdown-header">
            <span>SELECT DOCUMENT</span>
          </div>

          <a
            href="/Raza_Alam_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="resume-dropdown-item"
            onClick={handleSelect}
          >
            <div className="dropdown-item-icon">
              <FileText size={16} />
            </div>
            <div className="dropdown-item-info">
              <div className="dropdown-item-title">
                1-Page Resume
                <span className="dropdown-badge">Standard</span>
              </div>
              <p className="dropdown-item-desc">Concise overview tailored for fast recruiter screening</p>
            </div>
          </a>

          <a
            href="/Raza_Alam_CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="resume-dropdown-item"
            onClick={handleSelect}
          >
            <div className="dropdown-item-icon">
              <FileText size={16} />
            </div>
            <div className="dropdown-item-info">
              <div className="dropdown-item-title">
                Comprehensive CV
                <span className="dropdown-badge">Full</span>
              </div>
              <p className="dropdown-item-desc">In-depth technical breakdown & full project details</p>
            </div>
          </a>
        </div>
      )}
    </div>
  );
};

export default ResumeDropdown;

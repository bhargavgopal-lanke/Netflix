import React from "react";

const Footer = () => {    
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-content">
          <span>Questions? Call 1-844-505-2993 (Toll-Free)</span>
          <ul className="footer-links">
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Netflix Shop
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Cookie Preferences
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Corporate Information
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Do not share or sell my personal information
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Ad Choices
              </a>
            </li>
          </ul>
          <select className="language-selector">
            <option value="en">English</option>
            <option value="es">Espanol</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Footer;

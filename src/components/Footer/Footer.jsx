import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
      <div className="footer1">
            <p>
              Credits: photos from <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash.com</a>, icons from <a href="https://icons8.com" target="_blank" rel="noopener noreferrer">Icons8</a>, graphics from <a href="https://craftwork.design" target="_blank" rel="noopener noreferrer">craftwork.design</a>.
            </p>
          </div>

        <div className="footer2">
            <p>Made with ✨❤️ at nFactorial in 2022.</p>
        </div> 
        </div>
    </footer>
  );
};

export default Footer;

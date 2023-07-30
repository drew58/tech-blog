import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="p">Contact:<u>Andrewenhoro2019@gmail.com</u> | Phone: <u>+234 8163 226 986</u></p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/enahoro-andrew-1610061b4" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/drew58" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://twitter.com/Mutantdreww" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <p className="po">&copy; 2023 My Awesome Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

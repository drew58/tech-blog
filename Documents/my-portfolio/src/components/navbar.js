import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary header text-center navbar-nav">
      <div className="navbar-nav ml-auto"> {/* Add the ml-auto class here */}
        <Link to="/home" className="nav-link active">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/contact" className="nav-link">Contacts</Link>
      </div>
    </nav>
  );
};

export default Navbar;

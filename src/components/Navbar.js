import React from 'react';
// import profilePic from '../assets/profile.jpg'; 

function Navbar() {

  // --- Helper Function for Smooth Scrolling ---
  const handleScroll = (e, targetId) => {
    e.preventDefault(); // Prevents the URL from changing immediately (standard jump)
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container-fluid px-5">
        
        {/* BRAND / LOGO SECTION */}
        {/* We also add smooth scroll here to go back to top/home */}
        <a 
          className="navbar-brand d-flex align-items-center" 
          href="#about" 
          onClick={(e) => handleScroll(e, 'about')}
          style={{ cursor: 'pointer' }}
        >
          {/* Profile Image Circle */}
          <div className="rounded-circle overflow-hidden mr-2" style={{width: '45px', height: '45px'}}>
            <img 
              src="./priya.png" 
              alt="Profile" 
              style={{width: '100%', height: '100%', objectFit: 'cover'}} 
            />
          </div>
          {/* Name */}
          <span className="font-weight-bold text-uppercase text-dark" style={{letterSpacing: '1px'}}>
            Priya Prasad
          </span>
        </a>

        {/* MOBILE TOGGLE BUTTON */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAVIGATION LINKS */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto font-weight-bold">
            
            {/* 1. Home Link */}
            <li className="nav-item">
              <a 
                className="nav-link text-dark text-uppercase px-3" 
                href="#about"
                onClick={(e) => handleScroll(e, 'about')}
              >
                Home
              </a>
            </li>

            {/* 2. Experience Link (Make sure your section has id="experience") */}
            <li className="nav-item">
              <a 
                className="nav-link text-dark text-uppercase px-3" 
                href="#experience"
                onClick={(e) => handleScroll(e, 'experience')}
              >
                Experience
              </a>
            </li>

            {/* 3. Projects Link (If you have one, typically crucial for portfolios) */}
            <li className="nav-item">
              <a 
                className="nav-link text-dark text-uppercase px-3" 
                href="#skills"
                onClick={(e) => handleScroll(e, 'skills')}
              >
                Skills
              </a>
            </li>

            {/* 4. Contact Link */}
            <li className="nav-item">
              <a 
                className="nav-link text-dark text-uppercase px-3" 
                href="#contact"
                onClick={(e) => handleScroll(e, 'contact')}
              >
                Contact
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
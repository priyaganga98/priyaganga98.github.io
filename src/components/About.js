import React from "react";
import '../About.css';
import aboutBg from "../About.png";
function About() {
  const sectionStyle = {
    backgroundImage: `url(${aboutBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    minHeight: '100vh',
  };

  const handleScroll = (e, targetId) => {
    e.preventDefault(); // Prevents the URL from changing immediately (standard jump)
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="hero-section position-relative overflow-hidden" style={sectionStyle}>

      {/* 1. SOCIAL SIDEBAR (Fixed Left) */}
      <div className="d-none d-lg-flex flex-column position-absolute social-sidebar">        
        <a href="https://www.linkedin.com/in/priya-prasad-96a73b184/" target="_blank" rel="noreferrer" className="social-icon">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://github.com/priyaganga98" target="_blank" rel="noreferrer" className="social-icon">
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a href="https://drive.google.com/file/d/1XX9qmjikSMMMHe7vzVdbXmG50maTWZ3n/view?usp=sharing" target="_blank" rel="noreferrer" className="social-icon">
          <i className="fas fa-file-alt fa-2x"></i> {/* Resume Icon */}
        </a>
      </div>

      {/* 2. MAIN CENTERED CONTENT */}
      <div className="container h-100 d-flex flex-column justify-content-center align-items-center text-center" style={{ minHeight: '100vh' }}>

        {/* Big Headline */}
        <h1 className="display-3 font-weight-bold text-uppercase mb-4" style={{ letterSpacing: '3px' }}>
          Hey, I'm Priya Prasad
        </h1>

        {/* Subtitle / Bio */}
        <p className="bold-text lead mb-5" style={{ maxWidth: '800px', fontSize: '1.2rem', lineHeight: '1.8' }}>
          Senior Application Developer with over 5 years of experience in Java development, RESTful API design, UI development, and test automation.
          Currently engineering AI agents and enterprise workflows while ensuring software quality through Playwright automation.
        </p>
        {/* Purple CTA Button */}
        <a
          href="#projects"
          className="btn btn-custom-yellow px-5 py-3 font-weight-bold text-uppercase shadow-lg" onClick={(e) => handleScroll(e, 'projects')}>
          Projects
        </a>

      </div>

      {/* 3. MOUSE SCROLL INDICATOR (Bottom Center) */}
      <div className="mouse-container">
        <div className="mouse"></div>
      </div>

    </section>
  );
}

export default About;
import React from 'react';
import '../App.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="row align-items-center">

          {/* === LEFT COLUMN: Title & Info === */}
          <div className="col-lg-5 mb-5 mb-lg-0 text-white d-flex flex-column justify-content-center h-100">

            {/* Italic Title */}
            <h1 className="contact-title fst-italic">
              Reach out <br /> to me!
            </h1>
          </div>

          {/* === RIGHT COLUMN: The Form === */}
          <div className="col-lg-7 pe-lg-5">
            <form className="contact-form">

              {/* Contact Email (Pushed to bottom) */}
              {/* Email Pill */}
              <a href="mailto:priyaganga98@gmail.com" className="social-pill">
                <i className="bi bi-envelope" style={{ marginRight: '15px' }}></i>
                priyaganga98@gmail.com
              </a>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
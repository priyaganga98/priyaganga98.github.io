import React from 'react';
import '../App.css'; // Ensure your CSS file is imported

function Experience() {

  return (
    <section id="experience" className="position-relative">

      {/* 1. Header Section */}
      <div className="section-header pt-5">
        <h2 className="section-title">Experience</h2>
        <div className="section-line"></div>
      </div>

      {/* 2. The Content Card */}
      <div className="container">
        <div className="experience-card">

          {/* === ORACLE === */}
          <div className="mb-5">
            {/* Logo & Company Name Row */}
            <div className="d-flex align-items-center mb-0">
              <div>
                <div className="exp-company">Oracle</div>
                <div className="exp-location">Thiruvananthapuram, Kerala, India · 4 yrs 2 mos</div>
              </div>
            </div>

            {/* The Timeline of Roles */}
            <div className="role-container">
              {/* Role 1 */}
              <div className="role-item current mb-4 position-relative">
                <div className="timeline-dot"></div>
                <div className="exp-role-title">Senior Application Developer</div>
                <div className="exp-date">Apr 2024 - Present · 1 yr 10 mos</div>
                <div className="exp-desc">
                  <ul className="mb-0 ps-3">
                    <li className="mb-1">Engineered AI agents using Oracle AI Agent Studio during an internal Oracle hackathon, integrating them with REST APIs to automate
                      enterprise workflows.</li>
                    <li className="mb-1">Implemented Playwright UI automation framework with daily execution via cron, significantly improving regression coverage and
                      reducing UI and REST API defects by 95%.</li>
                    <li className="mb-0">Built user interfaces for multiple applications using Visual Builder Cloud Service (VBCS).</li>
                    <li className="mb-0">Set up and scheduled JMeter performance tests across multiple environments; monitored results and system metrics to ensure high
                      performance, stability, and reliability.</li>

                  </ul>
                </div>
                {/* <div className="d-flex flex-wrap gap-3 mt-3">
                  <span className="skill-badge">Oracle ADF</span>
                  <span className="skill-badge">Java</span>
                  <span className="skill-badge">VBCS</span>
                  <span className="skill-badge">Playwright</span>
                </div> */}
              </div>

              {/* Role 2 */}
              <div className="role-item position-relative">
                <div className="timeline-dot"></div>
                <div className="exp-role-title">Application Developer</div>
                <div className="exp-date">Dec 2021 - Apr 2024 · 2 yrs 5 mos</div>
                <div className="exp-desc">
                  <ul className="mb-0 ps-3">
                    <li className="mb-1">Implemented and maintained REST API endpoints, collaborating closely with front-end developers to ensure seamless API integration.</li>
                    <li className="mb-1">Designed, developed, and tested Jersey-based APIs, ensuring efficient inter-service communication, performance optimization, and
adherence to operational standards.</li>
                    <li className="mb-1">Built and maintained a JMeter test suite to automate functional and performance testing, validating application stability under varying
load conditions.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* === INCTURE === */}
          <div className="mb-5">
            <div className="d-flex align-items-center mb-0">
              <div>
                <div className="exp-company">Incture Technologies</div>
                <div className="exp-location">Bengaluru, Karnataka, India · 1 yr 3 mos</div>
              </div>
            </div>

            <div className="role-container">
              <div className="role-item mb-4 position-relative">
                <div className="timeline-dot"></div>
                <div className="exp-role-title">Associate Software Engineer</div>
                <div className="exp-date">Jan 2021 - Dec 2021 · 1 yr</div>
                <div className="exp-desc">
                  <ul className="mb-0 ps-3">
                    <li className="mb-1">Designed and developed RESTful APIs for enterprise products, ensuring high performance and scalability.</li>
                    <li className="mb-1">Collaborated with a 20+ member product development team to maintain code quality and resolve bugs efficiently.</li>
                    <li className="mb-1">Delivered client implementations for multiple clients, reducing support tickets by 20%.</li>
                    <li className="mb-1">Integrated and configured multiple external systems (3 systems) using publicly available APIs.</li>
                    <li className="mb-1">Assisted the development team in supporting the application across both QA and production environments, ensuring smooth operation
and quick issue resolution.</li>
                  </ul>
                </div>
              </div>

              <div className="role-item position-relative">
                <div className="timeline-dot"></div>
                <div className="exp-role-title">Java Developer (Trainee)</div>
                <div className="exp-date">Oct 2020 - Jan 2021 · 4 mos</div>
                <div className="exp-desc">
                  <ul className="mb-0 ps-3">
                    <li className="mb-1">Developed and maintained enterprise applications using Java/J2EE technologies, resolving bugs and implementing enhancements to
improve system performance.</li>
                    <li className="mb-1">Designed and implemented RESTful APIs using Spring MVC framework, ensuring 100% accuracy and adherence to business
requirements.</li>
                    <li className="mb-1">Collaborated in Agile/Scrum teams, participating in sprint planning, daily stand-ups, and retrospectives; consistently delivered all sprint
commitments on time.</li>

                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* === ISRO === */}
          <div className="mb-0">
            <div className="d-flex align-items-center mb-0">
              <div>
                <div className="exp-company">Indian Space Research Organization (ISRO)</div>
                <div className="exp-location">Thiruvananthapuram · 3 mos</div>
              </div>
            </div>

            <div className="role-container" style={{ borderLeft: 'none' }}> {/* No line needed for single bottom item if preferred */}
              <div className="role-item position-relative">
                <div className="timeline-dot"></div>
                <div className="exp-role-title">Intern</div>
                <div className="exp-date">July 2019 - Sept 2019</div>
                <div className="exp-desc">
                  <ul className="mb-0 ps-3">
                    <li className="mb-1">Collaborated with a 4-member Agile team to develop a Spring MVC application with role-based access control.</li>
                    <li className="mb-1">Designed and implemented RESTful APIs to support application functionality and third-party integrations.</li>
                    <li className="mb-1">Participated in design reviews, providing recommendations to improve system architecture, scalability, and maintainability.</li>

                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div> {/* End Experience Card */}
      </div> {/* End Container */}
    </section>
  );
}

export default Experience;
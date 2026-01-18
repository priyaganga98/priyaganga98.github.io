import React, { useState } from "react";
import { projects } from "../data";
import '../App.css';

function Project() {
  // 1. State for tracking the current page
  const [activePage] = useState(0);

  // 2. Configuration: How many items to show at once?
  const itemsPerPage = 3;

  // 4. Get only the projects for the CURRENT page
  const currentProjects = projects.slice(
    activePage * itemsPerPage,
    (activePage * itemsPerPage) + itemsPerPage
  );

  return (
    <section id="projects" style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingBottom: '50px' }}>

      {/* Header */}
      <div className="container text-center pt-5 mb-5">
        <h1 className="fw-bold text-uppercase dark-text" style={{ letterSpacing: '2px', fontSize: '2.5rem' }}>
          Projects
        </h1>
        {/* Optional: Little purple line under title */}
        <div style={{ width: '60px', height: '5px', background: '#FFD41D', margin: 'auto', borderRadius: '5px' }}></div>
      </div>

      <div className="container">

        {/* The Grid: Displays 3 items side-by-side */}
        <div className="row">
          {currentProjects.map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">

              {/* Clean Card Design (No Flip) */}
              <div className="slider-card h-100 mb-4 d-flex flex-column text-start"> {/* Added text-start for Left Align */}

                <h3 className="slider-title mb-1">{project.title}</h3>

                {/* Subtitle (Date) */}
                <h6 className="slider-subtitle text-muted mb-3">{project.subtitle}</h6>

                {/* Technologies (Bold styling) */}
                <div className="mb-3 fw-bold" style={{ fontSize: '0.9rem', color: '#555' }}>
                  {project.Used_technologies || "2024 - Present"}
                </div>

                {/* Description List - Changed class to 'slider-desc' */}
                <div className="slider-desc">
                  <ul className="ps-3 mb-0"> {/* ps-3 adds standard bullet indentation */}
                    {project.descriptionPoints && project.descriptionPoints.map((point, i) => (
                      <li key={i} className="mb-2">{point}</li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Project;
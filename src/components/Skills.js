import { skillsCategories } from "../data";

function Skills() {
    return (
        <section id="skills" className="py-5" style={{ backgroundColor: '#fafafa' }}>
            <div className="container">

                {/* === HEADER === */}
                <div className="text-center mb-5">
                    <h2 className="section-title">About Me</h2>
                    <div className="section-line mb-4"></div>
                    <p className="about-subtitle">
                        I am a Senior Application Developer with over 5 years of experience engineering high-performance solutions for global leaders like Oracle. My expertise lies in the Java ecosystem, where I build robust backend architectures using Spring Boot and RESTful APIs.
                        Beyond standard development, I am passionate about Quality Engineering and AI. I don't just write code; I ensure it works flawlessly. I have successfully engineered AI Agents using Oracle AI Agent Studio and built comprehensive Playwright automation frameworks that reduced defect rates by 95%.</p>
                </div>

                <div className="row">

                    {/* === LEFT COLUMN: BIO === */}
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <h3 className="fw-bold mb-4 bold-text">Education</h3>
                        <div className="mb-4">
                            <img
                                src="./gec.png"
                                alt="Education Background"
                                className="img-fluid rounded shadow-sm"
                                style={{ width: '14%', height: '14%' }}
                            />
                        </div>
                        <div className="about-desc">
                            {/* Education Card */}
                            <div className=" p-3 ">

                                {/* Text Details */}
                                <div>
                                    <h5 className="fw-bold text-dark mb-1">Government Engineering College, Thrissur</h5>
                                    <p className="mb-1 text-secondary fw-bold">Bachelor of Technology</p>
                                    <p className="mb-1 text-muted">Computer Science and Engineering</p>
                                    <p className="mb-1 text-muted">CGPA : 8.26</p>
                                    <p className="mb-0 small text-muted">
                                        <i className="bi bi-calendar-event" style={{ marginRight: '5px' }}></i> Aug 2016 - May 2020
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* === RIGHT COLUMN: SKILLS === */}
                    <div className="col-lg-6">
                        <h3 className="fw-bold mb-4 bold-text">My Skills</h3>

                        {skillsCategories.map((category) => (
                            <div key={category.title} className="mb-4">

                                {/* Category Title (e.g., Languages) */}
                                <h5 className="fw-bold mb-3" style={{ color: '#555', fontSize: '0.95rem' }}>
                                    {category.title}
                                </h5>

                                {/* The Tags for this Category */}
                                <div className="gap-2 mb-3">
                                    {category.skills.map((skill) => (
                                        <div key={skill} className="skill-badge mb-3">
                                            {skill}
                                        </div>
                                    ))}
                                </div>

                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </section>
    );
}


export default Skills;
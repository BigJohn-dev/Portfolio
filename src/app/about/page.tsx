import "./about.css";

export default function About() {
    return (
        <section className="about container">
        <div className="about-header">
            <img
            src="WhatsApp Image 2025-09-24 at 04.07.30_b7f5fabf.jpg"
            alt="Imeobong John"
            className="about-pic"
            />
            <div className="about-text">
            <h1>About Me</h1>
            <p>
                I am a passionate software engineer with a strong foundation to developing innovative solutions and a keen interest in leveraging technology to solve real-world problems.
                With expertise in various programming languages and frameworks, I thrive on collaborating with teams to create efficient, user-friendly applications that enhance productivity and user experience.
                My commitment to continuous learning drives me to stay updated with industry trends and best practices, ensuring that I deliver high-quality code and contribute positively to every project I undertake.
            </p>
            <p className="role">SOFTWARE ENGINEER</p>
            {/* <h2>COMPANY</h2>
            <p className="company">Semicolon Africa</p> */}
            </div>
        </div>

        <div className="skills-section">
            <h2>Skills</h2>
            <ul>
            <li>JavaScript (React, Next.js)</li>
            <li>HTML & CSS</li>
            <li>Python</li>
            <li>Flask</li>
            <li>Java</li>
            <li>Spring Boot</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>Postman</li>
            </ul>
        </div>
        </section>
    );
}

import "./project.css";

export default function Projects() {
    return (
        <section className="projects container">
        <h1>My Projects</h1>
        <div className="project-grid">
            <div className="project-card">
            <h2>Portfolio Website</h2>
            <p>A modern personal portfolio built with Next.js and CSS.</p>
            <a href="#" target="_blank">View Project</a>
            </div>

            <div className="project-card">
            <h2>Wallet System</h2>
            <p>A digital wallet system that securely stores users' payment information,
                facilitates transactions, and offers features like budgeting tools,
                transaction history, and rewards tracking.</p>
            <a href="#" target="_blank">View Project</a>
            </div>

            <div className="project-card">
            <h2>ToDo Task Manager</h2>
            <p>A smart to-do list application that helps users organize tasks with features like priority setting,
                deadline reminders, and collaborative sharing for enhanced productivity.</p>
            <a href="#" target="_blank">View Project</a>
            </div>
        </div>
        </section>
    );
}

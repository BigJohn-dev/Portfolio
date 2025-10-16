import "./project.css";
import Link from "next/link"


export default function Projects() {
    return (
        <section className="projects container">
        <h1>My Projects</h1>
        <div className="project-grid">
            <div className="project-card">
            <h2>Portfolio Website</h2>
            <p>A personal portfolio built with Next.js and CSS.</p>
            <Link href="https://portfolio-two-nu-86.vercel.app/" target="_blank">View Project</Link>
            </div>

            <div className="project-card">
            <h2>Wallet System</h2>
            <p>A digital wallet system that securely stores users payment information,
                facilitates transactions, and offers features like budgeting tools,
                transaction history, and rewards tracking.</p>
            <Link href="#" target="_blank">View Project</Link>
            </div>

            <div className="project-card">
            <h2>ToDo Task Manager</h2>
            <p>A smart to-do list application that helps users organize tasks with features like priority setting,
                deadline reminders, and collaborative sharing for enhanced productivity.</p>
            <Link href="#" target="_blank">View Project</Link>
            </div>

            <div className="project-card">
            <h2>Simple Calculator</h2>
            <p>A straightforward calculator application that performs basic arithmetic operations like addition, subtraction, multiplication, and division, 
                offering users a quick and easy way to perform calculations.</p>
            <Link href="https://simple-calculator-ten-orcin.vercel.app/" target="_blank">View Project</Link>
            </div>
        </div>
        </section>
    );
}

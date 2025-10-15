import "./home.css";

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src="WhatsApp Image 2025-09-24 at 04.07.30_b7f5fabf.jpg" alt="Imeobong" className="profile-pic" />
        <h1>Hi, I’m Imeobong 👋</h1>
        <p>
          I am an aspiring software engineer with hands-on experience in full-stack development,
          object-oriented programming, and database design. Currently,
          I am completing an intensive training program at Semicolon Africa,
          where I have developed practical skills in Python, Java, JavaScript, and various web technologies.
          Throughout my training, I have successfully collaborated on multiple projects, enhancing my ability to work in a team-oriented environment.
          I am eager to contribute to innovative real-world projects and continue my growth in a dynamic professional software development role.
        </p>
        <div className="cta">
          <a href="/project" className="btn">View My Projects</a>
          <a href="/contact" className="btn">Contact Me</a>
        </div>
        <div className="social-links">
          <a href="www.linkedin.com/in/imeobong-john-80231035b" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/BigJohn-dev" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.facebook.com/John.Imeobong" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://x.com/D_Big_John" target="_blank" rel="noopener noreferrer">X</a>
          <a href="https://www.instagram.com/im3_0_bong/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </section>
  );
}

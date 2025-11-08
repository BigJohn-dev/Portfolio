import "./home.css";
import Image from "next/image";

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <Image src="/imeobong.jpg" alt="Imeobong" className="profile-pic" width={200} height={200}/>
        <h1>Hi, I&apos;m Imeobong</h1>
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
      </div>
    </section>
  );
}

import "./contact.css";

export default function Contact() {
    return (
        <section className="contact container">
        <h1>Contact Me</h1>
        <p>Have a project or idea? Let’s connect!</p>

        <form
            action="https://formspree.io/f/xrbyrbyo"
            method="POST"
        >
            <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            />
            <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            />
            <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            ></textarea>
            <button type="submit" className="btn">Send Message</button>
        </form>
        </section>
    );
}

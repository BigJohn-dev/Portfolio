import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Imeobong John | Portfolio",
  description: "My personal portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <nav className="navbar container">
            <h1 className="logo">Imeobong John Abasiediedu</h1>
            <div className="nav-links">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/project">Projects</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </nav>
        </header>

        <main className="main">{children}</main>

        <footer className="footer container">
          <p>© {new Date().getFullYear()} Imeobong John. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}

import { useState } from "react";

const navLinks = [
  { href: "#home", label: "Get A Car" },
  { href: "#services", label: "Our Services" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact Us" },
];
const phoneNumber = "+91-9911921495";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__container">
        <a href="#home" className="header__brand" onClick={handleNavClick}>
          <span className="header__logo-icon" aria-hidden="true">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 17h14v-5H5v5z" />
              <path d="M5 12l2-5h10l2 5" />
              <circle cx="7.5" cy="17" r="1.5" />
              <circle cx="16.5" cy="17" r="1.5" />
            </svg>
          </span>
          <span className="header__logo-text">
            <strong>Arav Tour and Travells</strong>
            <span className="header__tagline">Best In NCR</span>
          </span>
        </a>

        <nav className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}>
          <ul className="header__nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="header__nav-link"
                  onClick={handleNavClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={`tel:+${phoneNumber.replace(/\D/g, "")}`}
          className="header__phone-btn"
        >
          <span className="header__phone-icon" aria-hidden="true">
            📞
          </span>
          {phoneNumber}
        </a>

        <button
          className="header__menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className="header__menu-icon" />
          <span className="header__menu-icon" />
          <span className="header__menu-icon" />
        </button>
      </div>
    </header>
  );
}

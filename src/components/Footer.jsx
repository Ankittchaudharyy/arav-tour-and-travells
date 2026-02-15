const currentYear = new Date().getFullYear();
const carTypes = [
  "Dzire- Maruti",
  "Ertiga Maruti",
  "Innova",
  "Innova Crysta",
  "Sedan Cars",
  "Hatchback",
];
const popularRoutes = [
  "Cab from Delhi",
  "Cab from Jaipur",
  "Cab from Chandigarh",
  "Cab from Lucknow",
  "Any Other City",
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__skyline" aria-hidden="true" />
      <a
        href="https://wa.me/919911921495"
        target="_blank"
        rel="noopener noreferrer"
        className="footer__wa-float"
        aria-label="Chat on WhatsApp"
      >
        WhatsApp
      </a>
      {/* 🔥 LEFT Bottom Call Button */}
      <a
        href="tel:+919911921495"
        className="footer__call-float"
        aria-label="Call Now"
      >
        📞 Call Now
      </a>
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__block">
            <h3 className="footer__heading">About Us</h3>
            <p className="footer__about">
              At Greno Taxi Service, we take pride in offering top-notch Cab
              services to our valued customers.
            </p>
          </div>
          <div className="footer__block">
            <h3 className="footer__heading">Car Types</h3>
            <ul className="footer__list">
              {carTypes.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div className="footer__block">
            <h3 className="footer__heading">Popular Routes</h3>
            <ul className="footer__list">
              {popularRoutes.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
          <div className="footer__block">
            <h3 className="footer__heading">Contact Us</h3>
            <p className="footer__contact-item">
              <span className="footer__contact-icon">📍</span>{" "}
              <strong>Address</strong>
              <br />
              I-252,Delta-2, Greater Noida Uttar Pradesh 201310
            </p>
            <p className="footer__contact-item">
              <strong>Phone</strong>
              <br />
              <a href="tel:+919911921495">+91–9911921495</a>
            </p>
            <p className="footer__contact-item">
              <strong>Email</strong>
              <br />
              <a href="mailto:contact@grenotaxi.com">contact@arav.com</a>
            </p>
          </div>
        </div>
        <div className="footer__cta">
          <a href="tel:+919911921495" className="footer__cta-link">
            Call Now
          </a>
          <a
            href="https://wa.me/9911921495"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__cta-link"
          >
            WhatsApp
          </a>
        </div>
        <p className="footer__copyright">
          Copyright © {currentYear} | Arav tour and Travel | All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

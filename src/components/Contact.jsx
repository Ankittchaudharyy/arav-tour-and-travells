export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">
          Reach out for bookings, inquiries, or support. We're here to help.
        </p>
        <div className="contact__grid">
          <div className="contact__card">
            <span className="contact__icon">📞</span>
            <h3>Phone</h3>
            <a href="tel:+919911921495">+91 9911921495</a>
            <a href="tel:+919911921495">+91 9911921495</a>
          </div>
          <div className="contact__card">
            <span className="contact__icon">✉️</span>
            <h3>Email</h3>
            <a href="mailto:hello@arav.com">hello@arav.com</a>
            <a href="mailto:bookings@arav.com">bookings@arav.com</a>
          </div>
          <div className="contact__card">
            <span className="contact__icon">📍</span>
            <h3>Office</h3>
            <p>
              123 Taxi Plaza, Main Street
              <br />
              City, State – 110001
            </p>
          </div>
        </div>
        <div className="contact__hours">
          <strong>Service Hours:</strong> 24/7 | Office: Mon–Sat 9 AM – 6 PM
        </div>
      </div>
    </section>
  );
}

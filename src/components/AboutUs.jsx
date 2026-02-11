export default function AboutUs() {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <h2 className="section-title">About Us</h2>
        <div className="about__content">
          <div className="about__text">
            <p>
              <strong>Arav tour and Travell</strong> has been providing reliable
              transportation across the region for over a decade. We pride
              ourselves on punctuality, clean vehicles, and courteous drivers
              who make every journey comfortable and safe.
            </p>
            <p>
              Whether you need a quick city ride, airport transfer, or a long
              outstation trip, our trained staff and modern fleet ensure you
              reach your destination on time. Customer satisfaction drives
              everything we do.
            </p>
            <ul className="about__features">
              <li>24/7 service availability</li>
              <li>Online booking & instant confirmation</li>
              <li>GPS-tracked rides for safety</li>
              <li>Transparent, upfront pricing</li>
            </ul>
          </div>
          <div className="about__stats">
            <div className="about__stat">
              <span className="about__stat-number">10+</span>
              <span className="about__stat-label">Years of Service</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-number">50K+</span>
              <span className="about__stat-label">Happy Customers</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-number">100+</span>
              <span className="about__stat-label">Vehicles in Fleet</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

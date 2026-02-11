import BookingSection from "./BookingSection";

export default function Hero() {
  const scrollToCars = () => {
    const target = document.querySelector("#cars-pricing");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero hero--dark">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">
            Book Cab Service In Delhi For
            <span className="hero__highlight">Outstation Rides</span>
            Intercity Travel
          </h1>
          <p className="hero__subtitle">
            Let us take you there hassle-free with our convenient Car booking service. Whether it's a
            ride to the airport, a night out in the city, or a trip to your favorite destination,
            we've got you covered.
          </p>
          <button type="button" className="hero__cta hero__cta--outline" onClick={scrollToCars}>
            <span className="hero__cta-icon">🚗</span>
            Book Your Ride
          </button>
        </div>
        <BookingSection />
      </div>
    </section>
  );
}

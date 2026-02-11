import GirlImage from "../assets/images/cars/GirlImage.png";

const testimonials = [
  {
    text: "As a frequent traveler, I rely heavily on Greno Taxi Service for my transportation needs. Their prompt service and courteous drivers never fail to impress. Whether it's a last-minute airport drop or a leisurely city tour, they always deliver.",
    author: "Rajesh Kumar",
  },
  {
    text: "I've been a loyal customer for years now, and they never disappoint. Their customer support team is always helpful, and their drivers are well-mannered and skilled. I appreciate their consistency and dedication to customer satisfaction.",
    author: "Rohan Gupta",
  },
  {
    text: "I recently used them for a family trip, and they exceeded my expectations. The cleanliness of the vehicle and the professionalism of the driver were commendable. I felt safe and comfortable throughout the journey. Highly recommended!",
    author: "Neha Sharma",
  },
  {
    text: "I hired them for a business trip, and I was impressed by their attention to detail. The driver arrived early, the vehicle was spotless, and the ride was smooth. Their professionalism reflects their commitment to excellence.",
    author: "Manoj Kumar",
  },
  {
    text: "They came to my rescue during a sudden rainstorm when I was stranded downtown. Despite the weather conditions, they arrived promptly and got me home safely. Reliable service and affordable rates make them my go-to choice.",
    author: "Ananya Patel",
  },
  {
    text: "They saved the day when my car broke down on the highway. Within minutes of calling, they dispatched a cab, and the driver went above and beyond to ensure I reached my destination comfortably. Kudos to the entire team!",
    author: "Priya Singh",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="section-container">
        <div className="testimonials__header">
          <div className="testimonials__header-content">
            <h2 className="section-title section-title--red">Happy Client's</h2>
            <p className="section-subtitle section-subtitle--main">
              Our Testimonials
            </p>
          </div>
          <div className="testimonials__image-wrap">
            <img
              src={GirlImage}
              alt="Happy client"
              className="testimonials__image"
            />
          </div>
        </div>
        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="testimonials__card">
              <span className="testimonials__quote" aria-hidden="true">
                "
              </span>
              <p className="testimonials__text">{t.text}</p>
              <div className="testimonials__author-row">
                <span className="testimonials__avatar" aria-hidden="true" />
                <div>
                  <footer className="testimonials__author">{t.author}</footer>
                  <div className="testimonials__stars" aria-hidden="true">
                    ★★★★★
                  </div>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

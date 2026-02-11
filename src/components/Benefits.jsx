import InnovaImg from "../assets/images/cars/innova.png";

const benefits = [
  { title: "Fast Booking", desc: "Swiftly reserve your ride for prompt travel arrangements.", icon: "📱" },
  { title: "Simple Booking", desc: "Just simply call us or fill the booking form. we will call you shortly.", icon: "✋" },
  { title: "24/7 Availability", desc: "Enjoy our service anytime, day or night, for your convenience.", icon: "🕐" },
  { title: "GPS Searching", desc: "Locate your destination with precision using GPS-enabled search functionality.", icon: "📍" },
  { title: "Transparent Pricing", desc: "Know exactly what you're paying for with our upfront and clear pricing.", icon: "💰" },
  { title: "Secure and Safe", desc: "Travel with peace of mind knowing we prioritize your safety.", icon: "🛡️" },
];

export default function Benefits() {
  const leftBenefits = benefits.slice(0, 3);
  const rightBenefits = benefits.slice(3, 6);
  return (
    <section className="benefits benefits--dark">
      <div className="section-container benefits__wrap">
        <h2 className="benefits__main-title">Get More Benefits</h2>
        <div className="benefits__content">
          <div className="benefits__col benefits__col--left">
            {leftBenefits.map((b) => (
              <div key={b.title} className="benefits__card">
                <span className="benefits__icon">{b.icon}</span>
                <h3 className="benefits__title">{b.title}</h3>
                <p className="benefits__desc">{b.desc}</p>
              </div>
            ))}
          </div>
          <div className="benefits__center-image">
            <img src={InnovaImg} alt="Innova car" />
          </div>
          <div className="benefits__col benefits__col--right">
            {rightBenefits.map((b) => (
              <div key={b.title} className="benefits__card">
                <span className="benefits__icon">{b.icon}</span>
                <h3 className="benefits__title">{b.title}</h3>
                <p className="benefits__desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

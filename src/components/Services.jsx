import Img1 from "../assets/images/cars/image1.png";
import Img2 from "../assets/images/cars/image2.png";
import Img3 from "../assets/images/cars/image3.png";
import Img4 from "../assets/images/cars/image4.png";

const services = [
  {
    title: "Outstation Rides",
    description: "Explore distant destinations hassle-free with our reliable service.",
    image: Img1,
  },
  {
    title: "Tour Package",
    description: "Embark on unforgettable adventures with our tailor-made packages.",
    image: Img2,
  },
  {
    title: "Corporate Travel",
    description: "Streamline business journeys with our efficient transportation solutions.",
    image: Img3,
  },
  {
    title: "Airport Pick & Drop",
    description: "Seamless transitions to and from airports, ensuring punctuality.",
    image: Img4,
  },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="section-container">
        <h2 className="section-title section-title--red">We Have Cabs For All Your Needs</h2>
        <p className="section-subtitle section-subtitle--main">Let's Plan Your Trip</p>
        <div className="services__grid">
          {services.map((s) => (
            <div key={s.title} className="services__card">
              <div className="services__image">
                <img src={s.image} alt={s.title} />
              </div>
              <div className="services__body">
                <h3 className="services__title">{s.title}</h3>
                <p className="services__desc">{s.description}</p>
                <a href="tel:+919015259540" className="services__cta">
                  📞 CALL NOW
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

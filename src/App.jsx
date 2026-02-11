import Header from "./components/Header";
import Hero from "./components/Hero";
import CarsPricing from "./components/CarsPricing";
import Services from "./components/Services";
import Benefits from "./components/Benefits";
import Cities from "./components/Cities";
import Testimonials from "./components/Testimonials";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import InnovaImg from "./assets/images/cars/innova.png";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CarsPricing />
        <section className="cta-block cta-block--yellow">
          <div className="cta-block__inner section-container">
            <div className="cta-block__content">
              <h2 className="cta-block__title cta-block__title--red">
                Ready To Ride With Greno Taxi Service?
              </h2>
              <p className="cta-block__text">
                Don't wait until the last minute. Book your ride now and ensure
                a smooth and comfortable journey. With our easy-to-use booking
                platform and 24/7 availability.
              </p>
              <a href="#home" className="cta-block__btn cta-block__btn--white">
                🚗 Book Car Now
              </a>
            </div>
            <div className="cta-block__image">
              <img src={InnovaImg} alt="Innova car" />
            </div>
          </div>
        </section>
        <Services />
        <Benefits />
        <Cities />
        <section className="cta-block cta-block--dark">
          <div className="cta-block__inner section-container">
            <div className="cta-block__image cta-block__image--left">
              <img src={InnovaImg} alt="Innova car" />
            </div>
            <div className="cta-block__content">
              <h2 className="cta-block__title">
                Ready To Ride? Book Your Car Now!
              </h2>
              <p className="cta-block__text">
                Don't wait until the last minute. Book your ride now and ensure
                a smooth and comfortable journey with Greno Taxi Service. With
                our easy-to-use booking platform and 24/7 availability.
              </p>
              <a href="#home" className="cta-block__btn cta-block__btn--black">
                🚗 Book Car Now
              </a>
            </div>
          </div>
        </section>
        <Testimonials />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

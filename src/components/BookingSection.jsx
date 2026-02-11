import { useState } from "react";

const CAR_OPTIONS = ["Dzire", "Ertiga Maruti", "Innova Crysta", "Hatchback"];
const TRIP_OPTIONS = [
  { value: "outstation", label: "Outstation Travel" },
  { value: "one-way", label: "One Way" },
  { value: "round-trip", label: "Round Trip" },
];

export default function BookingSection() {
  const [car, setCar] = useState("");
  const [option, setOption] = useState("outstation");
  const scrollToCars = () => {
    const target = document.querySelector("#cars-pricing");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="booking-section booking-section--yellow">
      <h2 className="booking-section__heading">Pick Your Rides At Low Prices</h2>
      <p className="booking-section__subheading">Book your ride in just 5 minutes</p>
      <div className="booking-section__fields">
        <div className="booking-section__row">
          <label className="booking-section__label">Full Name</label>
          <input type="text" placeholder="Enter Your Name" className="booking-section__input" readOnly aria-label="Full Name" />
        </div>
        <div className="booking-section__row">
          <label className="booking-section__label">Contact No.</label>
          <input type="text" placeholder="+91- 98765 XXXXX" className="booking-section__input" readOnly aria-label="Contact" />
        </div>
        <div className="booking-section__row">
          <label className="booking-section__label">Pickup Location</label>
          <input type="text" placeholder="Ex- Anand Vihar Metro Station" className="booking-section__input" readOnly aria-label="Pickup" />
        </div>
        <div className="booking-section__row">
          <label className="booking-section__label">Drop Location</label>
          <input type="text" placeholder="Ex- Kalka Mandir" className="booking-section__input" readOnly aria-label="Drop" />
        </div>
        <div className="booking-section__row">
          <label className="booking-section__label">Select Date</label>
          <input type="text" placeholder="dd/mm/yyyy" className="booking-section__input" readOnly aria-label="Date" />
        </div>
        <div className="booking-section__row">
          <label className="booking-section__label">Select Car</label>
          <select className="booking-section__input booking-section__select" value={car} onChange={(e) => setCar(e.target.value)} aria-label="Select Car">
            <option value="">Dzire</option>
            {CAR_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="booking-section__options">
        <span className="booking-section__options-label">Select Option</span>
        <div className="booking-section__radios">
          {TRIP_OPTIONS.map(({ value, label }) => (
            <label key={value} className="booking-section__radio-label">
              <input type="radio" name="trip" value={value} checked={option === value} onChange={() => setOption(value)} className="booking-section__radio" />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </div>
      <button type="button" className="booking-section__cta booking-section__cta--white" onClick={scrollToCars}>
        <span className="booking-section__cta-icon">🚗</span>
        Book Your Cab
      </button>
    </div>
  );
}

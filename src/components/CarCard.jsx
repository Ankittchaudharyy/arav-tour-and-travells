export default function CarCard({
  car,
  phoneNumber = "+91-9911921495",
  whatsappNumber = "+91-9911921495",
}) {
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`;
  const telUrl = `tel:+${phoneNumber.replace(/\D/g, "")}`;

  return (
    <article className="car-card">
      <div className="car-card__image">
        <img
          src={car.icon}
          alt={car.name}
          className="car-card__image-placeholder"
        />
      </div>
      {car.badge && (
        <span className={`car-card__badge car-card__badge--${car.id}`}>
          {car.badge.toUpperCase()}
        </span>
      )}
      <h3 className="car-card__name">{car.name.toUpperCase()}</h3>
      <ul className="car-card__features">
        <li>
          <span className="car-card__feature-icon">👥</span> {car.tagline}
        </li>
        <li>
          <span className="car-card__feature-icon">🛑</span> Not including Toll
          Tax and parking.
        </li>
        <li>
          <span className="car-card__feature-icon">₹</span> Driver DA 300 per
          day.
        </li>
      </ul>
      <p className="car-card__rate">
        {car.rate} <span className="car-card__rate-note">*Estimated Price</span>
      </p>
      <div className="car-card__actions">
        <a href={telUrl} className="car-card__btn car-card__btn--call">
          📞 CALL NOW
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="car-card__btn car-card__btn--whatsapp"
        >
          WhatsApp
        </a>
      </div>
    </article>
  );
}

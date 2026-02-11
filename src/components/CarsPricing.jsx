import CarCard from './CarCard';
import { cars } from '../data/cars';

export default function CarsPricing() {
  return (
    <section id="cars-pricing" className="cars-pricing">
      <div className="section-container">
        <h2 className="section-title section-title--red">Select Your</h2>
        <p className="section-subtitle section-subtitle--main">Vehicles to ride</p>
        <p className="cars-pricing__ready">Ready to go</p>
        <div className="cars-pricing__grid">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
}

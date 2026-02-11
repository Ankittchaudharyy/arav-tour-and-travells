import Img1 from "../assets/images/cars/image1.png";
import Img2 from "../assets/images/cars/image2.png";
import Img3 from "../assets/images/cars/image3.png";
import Img4 from "../assets/images/cars/image4.png";
import Img5 from "../assets/images/cars/image5.png";
import Img6 from "../assets/images/cars/image6.png";
import Img7 from "../assets/images/cars/image7.png";
import Img8 from "../assets/images/cars/image8.png";
import Img9 from "../assets/images/cars/image9.png";

const cityGroups = [
  { from: "Cabs From Delhi To", routes: "Agra, Jaipur, Dehradun, Haridwar, Chandigarh", image: Img1 },
  { from: "Cabs From Pune To", routes: "Mumbai, Shirdi, Mahabaleshwar, Nasik, Aurangabad", image: Img2 },
  { from: "Cabs From Chandigarh To", routes: "New Delhi, Shimla, Manali, Gurgaon, Noida", image: Img3 },
  { from: "Cabs From Agra To", routes: "New Delhi, Gurgaon, Noida, Faridabad, Ghaziabad", image: Img4 },
  { from: "Cabs From Mumbai To", routes: "Pune, Nasik, Shirdi, Lonavala, Mahabaleshwar", image: Img5 },
  { from: "Cabs From Chennai To", routes: "Vellore, Pondicherry, Bangalore, Tirupati", image: Img6 },
  { from: "Cabs From Jaipur To", routes: "New Delhi, Gurgaon, Noida, Faridabad, Ghaziabad", image: Img7 },
  { from: "Cabs From Lucknow To", routes: "New Delhi, Kanpur, Agra, Varanasi, Bareilly, Gorakhpur", image: Img8 },
  { from: "Cabs From Dehradun To", routes: "Mussoorie, New Delhi, Gurgaon, Noida, Faridabad", image: Img9 },
];

export default function Cities() {
  return (
    <section className="cities">
      <div className="section-container">
        <h2 className="section-title section-title--red">Main Cities</h2>
        <p className="section-subtitle section-subtitle--main">Where We Serve</p>
        <p className="cities__intro">
          Explore our extensive service network across major cities, ensuring seamless transportation
          wherever you go. From bustling metropolises to tranquil towns, we've got you covered.
          Experience convenience and reliability in every journey with us.
        </p>
        <div className="cities__grid">
          {cityGroups.map((g) => (
            <div key={g.from} className="cities__card">
              <div className="cities__circle">
                <img src={g.image} alt="" />
              </div>
              <div className="cities__text">
                <h3 className="cities__from">{g.from}</h3>
                <p className="cities__routes">{g.routes}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

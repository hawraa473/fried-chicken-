import { Link } from "react-router-dom";
import './restaurantList.css';
const RestaurantCard = ({ restaurant, onDelete, onChangeRate }) => {
  const { name, location, rating , id} = restaurant;

  return (
    <Link className="restaurant-card" to={`/restaurant/${id}`}>
      <h3 data-testid="restaurant-name" style={{ textDecoration: "none", color:"white" }}>{restaurant.name}</h3>
      <p data-testid="restaurant-location"style={{ textDecorationLine: "none", color:"white" }} >{restaurant.location}</p>
      <p data-testid="restaurant-rating" style={{ textDecorationLine: "none", color:"white" }}>Rating:{restaurant.rating}</p>
      <button onClick={() => onDelete(restaurant)}>Delete</button>
      <button onClick={() => onChangeRate(restaurant)}>Change Rate</button>
    </Link>
  );
};

export default RestaurantCard;
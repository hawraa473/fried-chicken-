import { Link } from "react-router-dom";
const RestaurantCard = ({ restaurant, onDelete, onChangeRate }) => {
  const { name, location, rating , id} = restaurant;

  return (
    <Link className="restaurant-card" to={`/restaurant/${id}`}>
      <h3 data-testid="restaurant-name">{restaurant.name}</h3>
      <p data-testid="restaurant-location">{restaurant.location}</p>
      <p data-testid="restaurant-rating">Rating:{restaurant.rating}</p>
      <button onClick={() => onDelete(restaurant)}>Delete</button>
      <button onClick={() => onChangeRate(restaurant)}>Change Rate</button>
    </Link>
  );
};

export default RestaurantCard;
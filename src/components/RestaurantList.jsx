import RestaurantCard from "./RestaurantCard";
import './restaurantList.css';

const RestaurantList = ({ restaurants, onDelete, onChange }) => {
  return (
    <div data-testid="restaurants-list" className="container" >
      <h1> Best Fried Chicken In Iraq </h1>
      <div  className="restaurants-list">
      {restaurants.map((restaurant, index) => (
        <RestaurantCard
       
          key={index}
          restaurant={restaurant}
          onChangeRate={onChange}
          onDelete={onDelete}
        />
      ))}
      </div>
    </div>
  );
};

export default RestaurantList;

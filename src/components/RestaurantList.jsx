import RestaurantCard from "./RestaurantCard";

const RestaurantList = ({ restaurants, onDelete, onChange }) => {
  return (
    <div data-testid="restaurants-list">
      <h1> Best Fried Chicken In Iraq </h1>
      {restaurants.map((restaurant, index) => (
        <RestaurantCard
          key={index}
          restaurant={restaurant}
          onChangeRate={onChange}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default RestaurantList;

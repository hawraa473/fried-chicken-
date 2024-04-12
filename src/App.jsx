import { useState } from "react";
import RestaurantForm from "./components/RestaurantForm";
import RestaurantList from "./components/RestaurantList";
import RestaurantDetails from "./components/RestaurantDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  const [restaurants, setRestaurants] = useState([
    {
      id: 1,
      name: "Fried Chicken",
      location: "Baghdad",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Superchicken",
      location: "Baghdad",
      rating: 4.3,
    },
  ]);

  const addRestaurant = (restaurant ) => {
    setRestaurants(prev => [...prev , restaurant]);
  };

  const deleteRestaurant = (restaurantToDelete) => {
    setRestaurants(
      restaurants.filter((restaurant) => restaurant !== restaurantToDelete)
    );
  };

  const changeRate = (restaurantToChange) => {
    const newRating = parseInt(prompt("Enter new rating (1-5):"));
    if (newRating >= 1 && newRating <= 5) {
      restaurantToChange.rating = newRating;
      setRestaurants([...restaurants]);
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/restaurant" element={<RestaurantList />} />
          <Route path="/restaurant/:id" element={<RestaurantDetails restaurants={restaurants}/>} />
        </Routes>
      </BrowserRouter>
      <div>
        <RestaurantForm onSubmit={addRestaurant} />
        <RestaurantList
          restaurants={restaurants}
          onChange={changeRate}
          onDelete={deleteRestaurant}
        />
      </div>
    </div>
  );
};

export default App;

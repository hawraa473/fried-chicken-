import React from 'react';
import RestaurantCard from './RestaurantCard';
import RestaurantList from './RestaurantList';
import { useParams } from 'react-router-dom';

const RestaurantDetails = ({ restaurants  }) => {
    const params = useParams()
      const restaurant = restaurants.filter( restaurant=> restaurant.id==params.id)

    
return (
<div className="restaurant-details">
<h3>{restaurant.name}</h3>
<p>Location: {restaurant.location}</p>
<p>Rating: {restaurant.rating}</p>
</div>
);
};

export default RestaurantDetails;


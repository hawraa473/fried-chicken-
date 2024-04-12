
import { useState } from 'react';
const RestaurantForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, location, rating });
    setName('');
    setLocation('');
    setRating(1);
  };

  return (
    <form onSubmit={handleSubmit}  className='resturant-form'>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        data-testid="restaurant-name-input"
        placeholder="Enter restaurant name"
      />
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        data-testid="restaurant-location-input"
        placeholder="Enter restaurant location"
      />
      <input
        type="range"
        min={1}
        max={5}
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        data-testid="range-input"
        className="rate-input"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default RestaurantForm;
import React, { useState } from "react";

const SearchForm = ({ onSubmit }) => {
  const [location, setLocation] = useState("");
  const [seats, setSeats] = useState(2);
  const [walkingTime, setWalkingTime] = useState(10);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ location, seats, walkingTime });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Location: </label>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />

      <label>Seats: </label>
      <input
        type="number"
        value={seats}
        onChange={(e) => setSeats(e.target.value)}
        required
      />

      <label>Walking Time (minutes): </label>
      <input
        type="number"
        value={walkingTime}
        onChange={(e) => setWalkingTime(e.target.value)}
        required
      />

      <button type="submit">Find Restaurants</button>
    </form>
  );
};

export default SearchForm;

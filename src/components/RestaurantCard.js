import React from "react";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="restaurant-card">
      <h3>{restaurant.name}</h3>
      <p>{restaurant.phone_number}</p>
      <p>{restaurant.address}</p>
      <a href={restaurant.resy_link} target="_blank" rel="noopener noreferrer">
        Book Reservation
      </a>
      <p>Travel Time: {restaurant.travel_time}</p>
      <p>Available At: {restaurant.available_time}</p>
    </div>
  );
};

export default RestaurantCard;

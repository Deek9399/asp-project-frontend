import React from "react";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = ({ topThree, remaining, onShowMore }) => {
  return (
    <div>
      <h2>Closest Picks</h2>
      <div className="restaurant-list">
        {topThree.map((restaurant, index) => (
          <RestaurantCard key={index} restaurant={restaurant} />
        ))}
      </div>

      {remaining.length > 0 && (
        <div>
          <button onClick={onShowMore}>Show More</button>
          <div className="restaurant-list">
            {remaining.map((restaurant, index) => (
              <RestaurantCard key={index} restaurant={restaurant} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantList;

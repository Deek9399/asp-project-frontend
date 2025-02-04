import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";

const RestaurantList = ({ restaurants }) => {
  const {
    closest,
    highest_rated_under_price,
    highest_rated_over_price,
    all_restaurants,
  } = restaurants;
  // State to handle "Show More" functionality
  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    setShowMore((prev) => !prev);
  };
  const styles = {
    restaurantList: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      gap: "20px",
      margin: "20px",
      flexWrap: "wrap",
    },
    cards: {
      display: "flex",
      flexDirection: "column",
    },
    /* Style for the Show More / Show Less button */
    button: {
      padding: "12px 25px",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "1.1rem",
      fontWeight: "bold",
      transition: "background-color 0.3s ease, transform 0.2s ease",
      margin: "20px",
      display: "inline-block",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
      transform: "translateY(-2px)", // Lift on hover
    },
    buttonActive: {
      backgroundColor: "#003d80", // Darker blue when clicked
      transform: "translateY(0)", // Reset lift when clicked
    },
    buttonFocus: {
      outline: "none", // Remove default focus outline
      boxShadow: "0 0 5px rgba(0, 123, 255, 0.5)", // Custom focus outline
    },
    topPicksHeading: {
      paddingTop: "20px",
    },
  };

  return (
    <div>
      <h2 style={styles.topPicksHeading}>Tailored Recommendations for You!</h2>
      <div style={styles.restaurantList}>
        <div>
          <h3>Closest to You </h3>
          <RestaurantCard restaurant={closest} />
        </div>

        <div>
          <h3>Highly Rated and Budget-Friendly</h3>
          <RestaurantCard restaurant={highest_rated_under_price} />
        </div>

        <div>
          <h3>High End</h3>
          <RestaurantCard restaurant={highest_rated_over_price} />
        </div>
      </div>

      {all_restaurants && all_restaurants.length > 0 && (
        <div>
          <button
            onClick={handleShowMore}
            style={{
              ...styles.button,
              ...(showMore ? styles.buttonActive : styles.buttonHover), // Apply button active and hover styles dynamically
            }}>
            {showMore ? "Show Less" : "Show More"}
          </button>
          <div id="show-more-section" style={styles.restaurantList}>
            {showMore &&
              all_restaurants.map((restaurant, index) => (
                <RestaurantCard key={index} restaurant={restaurant} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantList;

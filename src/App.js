import React, { useEffect, useState } from "react";
import SearchForm from "./components/SearchForm";
import RestaurantList from "./components/RestaurantList";
import backgroundImage from "./assets/background2.png";
import restaurants from "./assets/restaurants";
import axios from "axios";

const App = () => {
  const [restaurantData, setRestaurantData] = useState();
  const [isSearchSubmitted, setIsSearchSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const mainApp = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // backgroundImage: `url(${backgroundImage})`,
    backgroundImage: `
    linear-gradient(to bottom, rgba(255, 255, 255, 0) 70%, rgba(255, 255, 255, 1)),
    url(${backgroundImage})`,
    backgroundSize: "cover",
    // backgroundPosition: "center", // Centers the image
    backgroundRepeat: "no-repeat", // Prevents tiling
    zIndex: -1,
    width: "100%",
    height: "50vw",
    //overflow: "hidden",
    color: "fff",
    gap: 10,
  };
  const restaurantList = {
    paddingTop: "10px",
  };

  const handleSearchSubmitAPI = async ({
    latitude,
    longitude,
    seats,
    walkingTime,
  }) => {
    setIsLoading(true);
    try {
      console.log("4444444444", seats, "     ", walkingTime);
      // Replace this URL with the actual API endpoint
      const response = await axios.post(
        "https://dx4bc5jy35.execute-api.us-east-1.amazonaws.com/default/AvailableRestaurants",
        {
          Location: {
            longitude: longitude, // Assuming location is passed as an object with lng and lat properties
            latitude: latitude,
          },
          Seats: Number(seats),
          Walking_time_range: Number(walkingTime),

          // Key_words: [], // Customize your keywords as needed
        }
      );

      const data = JSON.parse(response.data);

      console.log("33333", data);

      setRestaurantData(data);
      setIsSearchSubmitted(true);
      const restaurantListElement = document.getElementById("restaurant-list");
      if (!isLoading && restaurantData) {
        console.log("Scrollllllllllllllll");
        restaurantListElement.scrollIntoView({
          behavior: "smooth", // Smooth scroll animation
          block: "start", // Align to the top of the element
        });
      }
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    } finally {
      setIsLoading(false); // Stop loading indicator
    }
  };
  // const handleSearchSubmit = ({ location, seats, walkingTime }) => {
  //   setRestaurantData(restaurants);
  //   setIsSearchSubmitted(true);
  //   // Scroll to the RestaurantList component using the id
  //   const restaurantListElement = document.getElementById("restaurant-list");
  //   if (restaurantListElement) {
  //     restaurantListElement.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  //   }
  // };
  useEffect(() => {
    if (isSearchSubmitted && restaurantData && !isLoading) {
      const restaurantListElement = document.getElementById("restaurant-list");
      if (restaurantListElement) {
        restaurantListElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [isSearchSubmitted, restaurantData, isLoading]);

  return (
    <div>
      <div style={mainApp}>
        <SearchForm onSubmit={handleSearchSubmitAPI} />
      </div>

      {isLoading && (
        <div style={{ textAlign: "center", marginTop: "-60px" }}>
          <p>Loading restaurants...</p>
        </div>
      )}

      {/* Render RestaurantList only if search is submitted */}
      {isSearchSubmitted && !isLoading && (
        <div id="restaurant-list" style={restaurantList}>
          <RestaurantList restaurants={restaurantData ?? {}} />
        </div>
      )}
    </div>
  );
};

export default App;

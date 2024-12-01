import React, { useState } from "react";
import SearchForm from "./components/SearchForm";
import RestaurantList from "./components/RestaurantList";
import backgroundImage from "./assets/background2.png";

const App = () => {
  const [restaurants, setRestaurants] = useState({
    topThree: [],
    remaining: [],
  });

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
    overflow: "hidden",
    color: "fff",
    gap: 10,
  };

  // const handleSearchSubmit = async ({ location, seats, walkingTime }) => {
  //   try {
  //     // Replace this URL with the actual API endpoint
  //     const response = await axios.post("https://api.example.com/AvailableRestaurants", {
  //       Location: {
  //         Long: location.lng, // Assuming location is passed as an object with lng and lat properties
  //         Latitude: location.lat,
  //       },
  //       Seats: seats,
  //       Walking_time_range: walkingTime,
  //       Key_words: ["vegan", "outdoor seating"], // Customize your keywords as needed
  //     });

  //     const data = response.data;

  //     setRestaurants({
  //       topThree: Object.entries(data.Top_three).map(([name, data]) => ({
  //         name,
  //         ...data,
  //       })),
  //       remaining: Object.entries(data.Remaining_restaurants).map(
  //         ([name, data]) => ({ name, ...data })
  //       ),
  //     });
  //   } catch (error) {
  //     console.error("Error fetching restaurant data:", error);
  //   }
  // };
  const handleSearchSubmit = ({ location, seats, walkingTime }) => {
    // Simulated backend response with dummy data
    const dummyData = {
      Top_three: {
        "Restaurant 1": {
          Phone_number: 1234567890,
          address: "123 Main Street",
          Resy_link: "https://resy.com/restaurant1",
          imgs: "https://via.placeholder.com/100",
          Available_time: "6:00 PM",
          Travel_time: "10 mins",
        },
        "Restaurant 2": {
          Phone_number: 9876543210,
          address: "456 Elm Street",
          Resy_link: "https://resy.com/restaurant2",
          imgs: "https://via.placeholder.com/100",
          Available_time: "7:00 PM",
          Travel_time: "15 mins",
        },
        "Restaurant 3": {
          Phone_number: 5555555555,
          address: "789 Oak Avenue",
          Resy_link: "https://resy.com/restaurant3",
          imgs: "https://via.placeholder.com/100",
          Available_time: "8:00 PM",
          Travel_time: "20 mins",
        },
      },
      Remaining_restaurants: {
        "Restaurant 4": {
          Phone_number: 4444444444,
          address: "111 Pine Lane",
          Resy_link: "https://resy.com/restaurant4",
          imgs: "https://via.placeholder.com/100",
          Available_time: "9:00 PM",
          Travel_time: "25 mins",
        },
        "Restaurant 5": {
          Phone_number: 3333333333,
          address: "222 Maple Court",
          Resy_link: "https://resy.com/restaurant5",
          imgs: "https://via.placeholder.com/100",
          Available_time: "10:00 PM",
          Travel_time: "30 mins",
        },
      },
    };

    setRestaurants({
      topThree: Object.entries(dummyData.Top_three).map(([name, data]) => ({
        name,
        ...data,
      })),
      remaining: Object.entries(dummyData.Remaining_restaurants).map(
        ([name, data]) => ({ name, ...data })
      ),
    });
  };

  const handleShowMore = () => {
    // Handle showing more restaurants logic, e.g., toggling visibility of the "remaining" list
  };

  return (
    <div>
      <div style={mainApp}>
        <SearchForm onSubmit={handleSearchSubmit} />
      </div>

      <RestaurantList
        topThree={restaurants.topThree}
        remaining={restaurants.remaining}
        onShowMore={handleShowMore}
      />
    </div>
  );
};

export default App;

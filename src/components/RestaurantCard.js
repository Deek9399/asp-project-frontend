import React from "react";
import placeholderImage from "../assets/restaurant_finder_background.jpg";
import restaurant1 from "../assets/restaurant1.jpg";
import restaurant2 from "../assets/restaurant2.jpg";
import restaurant3 from "../assets/restaurant3.jpg";
import restaurant4 from "../assets/restaurant4.jpg";
import restaurant5 from "../assets/restaurant5.jpg";
import restaurant6 from "../assets/restaurant6.jpg";
import restaurant7 from "../assets/restaurant7.jpg";

const RestaurantCard = ({ restaurant }) => {
  const restaurantImages = [
    restaurant1,
    restaurant2,
    restaurant3,
    restaurant4,
    restaurant5,
    restaurant6,
    restaurant7,
  ];
  const styles = {
    card: {
      border: "1px solid #ddd",
      borderRadius: "8px",
      overflow: "hidden",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#fff",
      padding: "15px",
      marginBottom: "20px",
      width: "300px",
      textAlign: "center",
    },
    image: {
      width: "100%",
      height: "150px",
      objectFit: "cover",
      borderRadius: "8px 8px 0 0",
    },
    title: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "10px",
    },
    text: {
      fontSize: "1rem",
      color: "#666",
      marginBottom: "8px",
    },
    link: {
      display: "inline-block",
      marginTop: "10px",
      padding: "10px 15px",
      fontSize: "0.9rem",
      color: "#fff",
      backgroundColor: "#000",
      textDecoration: "none",
      borderRadius: "4px",
      transition: "background-color 0.3s ease",
    },
    linkHover: {
      backgroundColor: "#0056b3",
    },
    timeSlotContainer: {
      marginTop: "15px",
      padding: "10px 0",
      textAlign: "left",
      borderTop: "1px solid #eee",
      borderBottom: "1px solid #eee",
    },
    timeSlotTitle: {
      fontSize: "1rem",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "10px",
    },
    timeSlotRow: {
      display: "flex",
      flexWrap: "wrap", // Allow items to wrap onto the next line
      justifyContent: "space-evenly", // Distribute items evenly
      gap: "10px", // Add space between items
    },
    timeSlot: {
      fontSize: "1rem",
      color: "#333",
      marginBottom: "8px",
      padding: "8px",
      borderRadius: "8px",
      backgroundColor: "#f9f9f9",
      transition: "background-color 0.3s ease, transform 0.3s ease",
    },
    timeSlotHover: {
      backgroundColor: "#ff8c00",
      color: "#fff",
      transform: "scale(1.02)",
    },
    hoverEffect: {
      "&:hover": {
        transform: "translateY(-10px)",
        boxShadow: "0 18px 36px rgba(0, 0, 0, 0.2)",
      },
    },
    distanceText: {
      fontSize: "1rem",
      color: "#333",
      marginTop: "10px",
      fontWeight: "bold",
    },
  };
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * restaurantImages.length); // Generate a random index
    return restaurantImages[randomIndex]; // Return the random image from the array
  };
  const imageUrl = restaurant.image || placeholderImage;
  // Extract top 4 available time slots
  const getTopTimeSlots = () => {
    if (restaurant?.timeslots && restaurant.timeslots.length > 0) {
      // Get the first 4 time slots (sorted by date and time if necessary)
      return restaurant.timeslots.slice(0, 4);
    }
    return [];
  };
  const topTimeSlots = getTopTimeSlots();

  return (
    <div style={styles.card}>
      <img src={getRandomImage()} alt={restaurant.Name} style={styles.image} />
      <h3 style={styles.title}>{restaurant.Name}</h3>
      <p style={styles.text}>
        <strong>Phone:</strong> {restaurant.Phone_number?.phone_number || "N/A"}
      </p>
      <p style={styles.text}>
        <strong>Rating:</strong>{" "}
        {restaurant.rating ? `${restaurant.rating.toFixed(1)} ⭐` : "N/A"}
      </p>
      <p style={styles.text}>
        <strong>Address:</strong>{" "}
        {restaurant.location_url_slug || "Address not available"}
      </p>
      {/* Display Distance in Miles */}
      <p style={styles.distanceText}>
        <strong>Distance:</strong> {restaurant.Distance_mi?.toFixed(2)} miles
      </p>
      {/* Time Slots Section */}
      <div style={styles.timeSlotContainer}>
        <div style={styles.timeSlotTitle}>Available Times:</div>
        <div style={styles.timeSlotRow}>
          {topTimeSlots.map((slot, index) => (
            <div key={index} style={styles.timeSlot}>
              <div style={styles.timeSlotDate}>{slot.date}</div>
              <div style={styles.timeSlotTime}>{slot.time}</div>
            </div>
          ))}
        </div>
      </div>
      <a
        href={restaurant.Resy_link}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.link}
        onMouseOver={(e) =>
          (e.target.style.backgroundColor = styles.linkHover.backgroundColor)
        }
        onMouseOut={(e) =>
          (e.target.style.backgroundColor = styles.link.backgroundColor)
        }>
        Book Reservation
      </a>
    </div>
  );
};

export default RestaurantCard;

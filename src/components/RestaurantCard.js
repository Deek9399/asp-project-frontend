import backgroundImage from "../assets/restaurant_finder_background.jpg";

const RestaurantCard = ({ restaurant }) => {
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
    },
    image: {
      width: "100%",
      height: "200px",
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
      backgroundColor: "#007bff",
      textDecoration: "none",
      borderRadius: "4px",
      textAlign: "center",
      transition: "background-color 0.3s ease",
    },
    linkHover: {
      backgroundColor: "#0056b3",
    },
  };

  return (
    <div style={styles.card}>
      <img src={backgroundImage} alt={restaurant.name} style={styles.image} />
      <h3 style={styles.title}>{restaurant.name}</h3>
      <p style={styles.text}>{restaurant.phone_number}</p>
      <p style={styles.text}>{restaurant.address}</p>
      <a
        href={restaurant.resy_link}
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
      <p style={styles.text}>Travel Time: {restaurant.travel_time}</p>
      <p style={styles.text}>Available At: {restaurant.available_time}</p>
    </div>
  );
};

export default RestaurantCard;

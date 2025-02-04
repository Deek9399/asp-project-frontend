import React, { useState, useEffect } from "react";
import "./SearchForm.css";
//import TextField from "@mui/material/TextField";

const SearchForm = ({ onSubmit }) => {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [location, setLocation] = useState();
  const [seats, setSeats] = useState();
  const [walkingTime, setWalkingTime] = useState();

  const styles = {
    searchDiv: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    search: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      gap: "20px",
      background: "rgba(255, 255, 255, 0.4)",
      padding: "30px 50px",
      borderRadius: "10px",
      border: "1px solid black",
    },
    input: {
      borderRadius: "15px",
      border: "2px",
      height: "30px",
      fontSize: "14px",
      textAlign: "center",
      width: "100%",
    },
    searchButton: {
      padding: "10px 20px",
      fontSize: "16px",
      fontWeight: "bold",
      color: "white",
      backgroundColor: " #000000" /* Blue background */,
      border: "none",
      borderRadius: "25px",
      cursor: "pointer",
      transition: "background-color 0.3s, transform 0.2s",
      opacity: 1,
    },
    headingDiv: {
      display: "flex",
      flexDirection: "column",
      alignItems: "cnter",
      justifyContent: "center",
      margin: "0px 0px",
      width: "400px",
      whiteSpace: "wrap",
    },
    heading: {
      fontWeight: 400,
      fontSize: "32px",
      fontStyle: "Italiana",
      zIndex: 1,
      textAlign: "center",
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ latitude, longitude, seats, walkingTime });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      console.log(latitude, longitude);
      setLatitude(latitude);
      setLongitude(longitude);
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
      fetch(url)
        .then((res) => res.json())

        .then((data) => {
          setLocation(data.display_name);
          console.log("222222", data.display_name);
        });
    });
  }, []);

  return (
    <div style={styles.searchDiv}>
      <form onSubmit={handleSubmit} style={styles.search}>
        <div style={styles.headingDiv}>
          <h2 style={styles.heading}>Booth Finder</h2>
          <span>
            Find your perfect dining spot in just a few clicks! Enter your
            location, seating needs, and travel time to uncover top restaurant
            options nearby!
          </span>
        </div>
        {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
        <input
          style={styles.input}
          placeholder="Your Current Location"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />

        <input
          style={styles.input}
          placeholder="Latitude"
          type="text"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
          required
        />

        <input
          style={styles.input}
          type="text"
          placeholder="Longitude"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          required
        />

        <input
          style={styles.input}
          placeholder="Number of Seats"
          type="number"
          value={seats}
          onChange={(e) => setSeats(parseInt(e.target.value, 10))}
          required
        />

        <input
          placeholder="Travel Time"
          style={styles.input}
          type="number"
          value={walkingTime}
          onChange={(e) => setWalkingTime(parseInt(e.target.value, 10))}
          required
        />

        <button style={styles.searchButton} type="submit">
          Find Restaurants
        </button>
      </form>
    </div>
  );
};

export default SearchForm;

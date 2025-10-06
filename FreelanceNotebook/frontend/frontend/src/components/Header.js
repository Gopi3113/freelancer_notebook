import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>Freelance Project Tracker</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#4a90e2",
    color: "white",
    padding: "20px",
    textAlign: "center",
  },
};

export default Header;

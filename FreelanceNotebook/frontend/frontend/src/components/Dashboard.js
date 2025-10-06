import React from "react";

const Dashboard = ({ total, active, pending }) => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h3>Total Projects</h3>
        <p>{total}</p>
      </div>
      <div style={styles.card}>
        <h3>Active Projects</h3>
        <p>{active}</p>
      </div>
      <div style={styles.card}>
        <h3>Pending Payments</h3>
        <p>${pending}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-around",
    margin: "20px 0",
  },
  card: {
    backgroundColor: "#f2f2f2",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    width: "150px",
  },
};

export default Dashboard;

import React from "react";

const ProjectCard = ({ project, onDelete, onClick }) => {
  // Guard: if project is undefined, render nothing
  if (!project) return null;

  const { projectName, clientName, deadline, projectStatus, budget, paymentStatus, _id } = project;

  const statusColor = projectStatus === "Completed"
    ? "green"
    : projectStatus === "Active"
    ? "blue"
    : projectStatus === "Planning"
    ? "orange"
    : "gray";

  const paymentColor = paymentStatus === "Paid" ? "green" : "red";

  return (
    <div
      style={styles.card}
      onClick={onClick}           // makes the card clickable
      className="project-card"
    >
      <h3>{projectName}</h3>
      <p><strong>Client:</strong> {clientName}</p>
      <p><strong>Deadline:</strong> {new Date(deadline).toLocaleDateString()}</p>
      <p><strong>Status:</strong> <span style={{ color: statusColor }}>{projectStatus}</span></p>
      <p><strong>Budget:</strong> ${budget}</p>
      <p><strong>Payment:</strong> <span style={{ color: paymentColor }}>{paymentStatus}</span></p>
      <button
        style={styles.button}
        onClick={(e) => {
          e.stopPropagation();   // prevents triggering onClick of card
          onDelete(_id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "15px",
    margin: "10px",
    width: "250px",
    cursor: "pointer",       // shows pointer on hover
  },
  button: {
    marginTop: "10px",
    padding: "5px 10px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ProjectCard;

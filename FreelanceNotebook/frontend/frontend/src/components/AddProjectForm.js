import React, { useState } from "react";
import { addProject } from "../api/api";

const AddProjectForm = ({ onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    projectName: "",
    clientName: "",
    deadline: "",
    projectStatus: "Planning",
    budget: "",
    paymentStatus: "Pending",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addProject(formData);  // send POST request
      onAdd();   // refresh ProjectList
      onClose(); // close form modal
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <h2>Add New Project</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label>
            Project Name:
            <input
              type="text"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Client Name:
            <input
              type="text"
              name="clientName"
              value={formData.clientName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Deadline:
            <input
              type="date"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Project Status:
            <select
              name="projectStatus"
              value={formData.projectStatus}
              onChange={handleChange}
            >
              <option value="Planning">Planning</option>
              <option value="Active">Active</option>
              <option value="Completed">Completed</option>
            </select>
          </label>
          <label>
            Budget:
            <input
              type="number"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Payment Status:
            <select
              name="paymentStatus"
              value={formData.paymentStatus}
              onChange={handleChange}
            >
              <option value="Pending">Pending</option>
              <option value="Paid">Paid</option>
            </select>
          </label>

          <div style={styles.buttons}>
            <button type="submit" style={styles.submitButton}>
              Add
            </button>
            <button type="button" style={styles.cancelButton} onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "10px",
    width: "400px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "15px",
  },
  submitButton: {
    backgroundColor: "green",
    color: "#fff",
    border: "none",
    padding: "8px 15px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  cancelButton: {
    backgroundColor: "gray",
    color: "#fff",
    border: "none",
    padding: "8px 15px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default AddProjectForm;

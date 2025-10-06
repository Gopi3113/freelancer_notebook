import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import ProjectList from "./components/ProjectList";
import { getProjects } from "./api/api";

function App() {
  const [projects, setProjects] = useState([]);

  // Fetch all projects from backend
  const fetchProjects = async () => {
    try {
      const data = await getProjects();
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Calculate dashboard totals dynamically
  const totalProjects = projects.length;
  const activeProjects = projects.filter((p) => p.projectStatus === "Active").length;
  const pendingPayments = projects
    .filter((p) => p.paymentStatus === "Pending")
    .reduce((sum, p) => sum + Number(p.budget), 0);

  return (
    <div style={styles.appContainer}>
      <Header />
      <Dashboard
        total={totalProjects}
        active={activeProjects}
        pending={pendingPayments}
      />
      <ProjectList fetchProjects={fetchProjects} projects={projects} />
    </div>
  );
}

const styles = {
  appContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
};

export default App;

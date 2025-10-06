import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";
import AddProjectForm from "./AddProjectForm";
import { deleteProject } from "../api/api";

const ProjectList = ({ projects, fetchProjects }) => {
  const [selectedProject, setSelectedProject] = useState(null); // for edit modal
  const [isFormOpen, setIsFormOpen] = useState(false);         // edit modal visibility
  const [isAddOpen, setIsAddOpen] = useState(false);           // add modal visibility

  const handleDelete = async (id) => {
    try {
      await deleteProject(id);
      fetchProjects(); // refresh both cards and dashboard
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setIsFormOpen(true);
  };

  return (
    <div>
      {/* Add Project Button */}
      <div style={{ textAlign: "center", margin: "20px" }}>
        <button
          style={styles.addButton}
          onClick={() => setIsAddOpen(true)}
        >
          + Add New Project
        </button>
      </div>

      {/* Project Cards */}
      <div style={styles.container}>
        {projects.map((project) => (
          <ProjectCard
            key={project._id}
            project={project}
            onDelete={handleDelete}
            onClick={() => handleCardClick(project)}
          />
        ))}
      </div>

      {/* Edit Project Modal */}
      {isFormOpen && selectedProject && (
        <ProjectForm
          project={selectedProject}
          onClose={() => setIsFormOpen(false)}
          onUpdate={fetchProjects}
        />
      )}

      {/* Add Project Modal */}
      {isAddOpen && (
        <AddProjectForm
          onClose={() => setIsAddOpen(false)}
          onAdd={fetchProjects}
        />
      )}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    position: "relative",
  },
  addButton: {
    padding: "10px 20px",
    backgroundColor: "blue",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ProjectList;

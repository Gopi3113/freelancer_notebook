const BASE_URL = "http://localhost:5000/api/projects";

// Get all projects
export const getProjects = async () => {
  try {
    const res = await fetch(BASE_URL);
    return await res.json();
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};

// Add a project
export const addProject = async (project) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    });
    return await res.json();
  } catch (error) {
    console.error("Error adding project:", error);
  }
};

// Update a project
export const updateProject = async (id, project) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    });
    return await res.json();
  } catch (error) {
    console.error("Error updating project:", error);
  }
};

// Delete a project
export const deleteProject = async (id) => {
  try {
    await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error("Error deleting project:", error);
  }
};

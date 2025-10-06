import express from "express";
import asyncHandler from "express-async-handler";
import Project from "../models/project.js";

const router = express.Router();

// @desc    Get all projects
// @route   GET /api/projects
// @access  Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const projects = await Project.find({});
    res.json(projects);
  })
);

// @desc    Add new project
// @route   POST /api/projects
// @access  Public
router.post(
  "/",
  asyncHandler(async (req, res) => {
    console.log("REQ BODY:", req.body); // <--- debug log
    const { projectName, clientName, deadline, projectStatus, budget, paymentStatus } = req.body;

    const project = new Project({
      projectName,
      clientName,
      deadline,
      projectStatus,
      budget,
      paymentStatus,
    });

    const createdProject = await project.save();
    res.status(201).json(createdProject);
  })
);

// @desc    Update project
// @route   PUT /api/projects/:id
// @access  Public
router.put(
  "/:id",
  asyncHandler(async (req, res) => {
    const { projectName, clientName, deadline, projectStatus, budget, paymentStatus } = req.body;

    const project = await Project.findById(req.params.id);

    if (project) {
      project.projectName = projectName;
      project.clientName = clientName;
      project.deadline = deadline;
      project.projectStatus = projectStatus;
      project.budget = budget;
      project.paymentStatus = paymentStatus;

      const updatedProject = await project.save();
      res.json(updatedProject);
    } else {
      res.status(404);
      throw new Error("Project not found");
    }
  })
);

// @desc    Delete project
// @route   DELETE /api/projects/:id
// @access  Public
router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id);

    if (project) {
      await Project.deleteOne({ _id: req.params.id }); // <-- updated
      res.json({ message: "Project removed" });
    } else {
      res.status(404);
      throw new Error("Project not found");
    }
  })
);

export default router;

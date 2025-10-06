import mongoose from "mongoose";

const projectSchema = mongoose.Schema(
  {
    projectName: {
      type: String,
      required: true,
    },
    clientName: {
      type: String,
      required: true,
    },
    deadline: {
      type: Date,
      required: true,
    },
    projectStatus: {
      type: String,
      enum: ["Planning", "Active", "Completed", "On Hold"],
      default: "Planning",
    },
    budget: {
      type: Number,
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["Pending", "Paid"],
      default: "Pending",
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;

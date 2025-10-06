# 📒 Freelance Notebook

A comprehensive **project management application** designed specifically for **freelancers** to manage their projects, clients, budgets, and payment tracking in one centralized platform.

![Freelance Notebook Banner](screenshots/banner.png)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

**Freelance Notebook** is a full-stack web application that helps freelancers streamline their project management workflow. Track multiple projects, monitor deadlines, manage client information, keep tabs on budgets, and maintain payment records - all in one intuitive interface.

### **Key Highlights:**
- 📊 **Real-time Dashboard** with project statistics
- 💼 **Client Management** with project association
- 💰 **Budget & Payment Tracking**
- 📅 **Deadline Monitoring**
- 🔄 **Project Status Updates** (Planning, Active, Completed, On Hold)
- ✏️ **Edit & Delete Projects** with ease
- 📱 **Responsive Design** for mobile and desktop

---

## ✨ Features

### **Dashboard Analytics**
- **Total Projects Count** - View all your projects at a glance
- **Active Projects Counter** - Track currently ongoing work
- **Pending Payments Calculator** - Monitor outstanding payments

### **Project Management**
- ➕ **Add New Projects** with complete details
- ✏️ **Edit Existing Projects** via modal form
- 🗑️ **Delete Projects** with confirmation
- 📝 **Comprehensive Project Details:**
  - Project Name
  - Client Name
  - Deadline (Date)
  - Project Status (Planning/Active/Completed/On Hold)
  - Budget Amount
  - Payment Status (Pending/Paid)
  - Timestamps (Created & Updated dates)

### **User Interface**
- 🎨 Clean and modern design
- 📱 Responsive layout
- 🔄 Real-time updates
- ✅ Form validation
- 🎭 Modal-based editing

---

## 📸 Screenshots

### Dashboard View
![Dashboard](ScreenShot\dashbord.png)

### Add Project Form
![Add Project](ScreenShot\Addproject.png)


### Edit Project Modal
![Edit Project](screenshots/edit-project.png)


---

## 🛠️ Tech Stack

### **Frontend**
- **React** v19.1.1 - UI library
- **React DOM** v19.1.1 - DOM rendering
- **React Scripts** v5.0.1 - Development scripts
- **CSS** - Inline styling

### **Backend**
- **Node.js** - Runtime environment
- **Express** v5.1.0 - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** v8.18.1 - ODM for MongoDB

### **Additional Dependencies**
- **CORS** v2.8.5 - Cross-Origin Resource Sharing
- **dotenv** v17.2.2 - Environment variable management
- **express-async-handler** v1.2.0 - Async route handling
- **firebase-admin** v13.5.0 - Firebase integration
- **nodemon** v3.1.10 - Development auto-reload (Dev dependency)

---

## 📁 Project Structure

```
freelancer/
│
├── FreelanceNotebook/
│   ├── backend/
│   │   ├── models/
│   │   │   └── project.js          # MongoDB Project Schema
│   │   ├── routes/
│   │   │   └── projectRoutes.js    # API Routes
│   │   ├── .env                     # Environment Variables
│   │   ├── server.js                # Express Server Setup
│   │   ├── package.json             # Backend Dependencies
│   │   └── package-lock.json
│   │
│   └── frontend/
│       └── frontend/
│           ├── public/              # Public Assets
│           ├── src/
│           │   ├── api/
│           │   │   └── api.js       # API Service Layer
│           │   ├── components/
│           │   │   ├── AddProjectForm.js    # Add Project Component
│           │   │   ├── Dashboard.js         # Dashboard Component
│           │   │   ├── Header.js            # Header Component
│           │   │   ├── ProjectCard.js       # Project Card Component
│           │   │   ├── ProjectForm.js       # Edit Project Modal
│           │   │   └── ProjectList.js       # Project List Component
│           │   ├── App.js           # Main App Component
│           │   ├── App.css          # App Styles
│           │   ├── index.js         # Entry Point
│           │   └── index.css        # Global Styles
│           ├── package.json         # Frontend Dependencies
│           └── package-lock.json
│
└── README.md                        # Project Documentation
```

---

## ⚙️ Prerequisites

Before running this application, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn** package manager
- **MongoDB** (Local installation or MongoDB Atlas account)
- **Git** (for cloning the repository)

---

## 📥 Installation

### **1. Clone the Repository**

```bash
git clone https://github.com/Gopi3113/freelancer_notebook.git
cd freelancer
```

### **2. Backend Setup**

```bash
# Navigate to backend directory
cd FreelanceNotebook/backend

# Install dependencies
npm install
```

### **3. Frontend Setup**

```bash
# Navigate to frontend directory
cd ../frontend/frontend

# Install dependencies
npm install
```

---

## 🔧 Configuration

### **Backend Environment Variables**

Create a `.env` file in the `FreelanceNotebook/backend` directory with the following variables:

```env
# MongoDB Connection String
MONGO_URI=mongodb://localhost:27017/freelance_notebook
# OR use MongoDB Atlas
# MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/freelance_notebook

# Server Port
PORT=5000

# Add any Firebase configuration if needed
```

**Important:** Replace `<username>` and `<password>` with your actual MongoDB credentials if using MongoDB Atlas.

---

## 🚀 Running the Application

### **Method 1: Run Backend and Frontend Separately**

#### **Start Backend Server**

```bash
# From the backend directory
cd FreelanceNotebook/backend

# Production mode
npm start

# OR Development mode (with auto-reload)
npm run dev
```

**Backend will run on:** `http://localhost:5000`

#### **Start Frontend Development Server**

```bash
# From the frontend directory
cd FreelanceNotebook/frontend/frontend

# Start React app
npm start
```

**Frontend will run on:** `http://localhost:3000`

### **Method 2: Using Two Terminal Windows**

**Terminal 1 (Backend):**
```bash
cd FreelanceNotebook/backend
npm run dev
```

**Terminal 2 (Frontend):**
```bash
cd FreelanceNotebook/frontend/frontend
npm start
```

---

## 🔌 API Endpoints

### **Base URL:** `http://localhost:5000/api/projects`

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| **GET** | `/` | Get all projects | - |
| **POST** | `/` | Create a new project | `{ projectName, clientName, deadline, projectStatus, budget, paymentStatus }` |
| **GET** | `/:id` | Get project by ID | - |
| **PUT** | `/:id` | Update project by ID | `{ projectName, clientName, deadline, projectStatus, budget, paymentStatus }` |
| **DELETE** | `/:id` | Delete project by ID | - |

### **Example API Request (Create Project):**

```bash
POST http://localhost:5000/api/projects
Content-Type: application/json

{
  "projectName": "E-commerce Website",
  "clientName": "John Doe",
  "deadline": "2025-03-15",
  "projectStatus": "Active",
  "budget": 5000,
  "paymentStatus": "Pending"
}
```

### **Example API Response:**

```json
{
  "_id": "507f1f77bcf86cd799439011",
  "projectName": "E-commerce Website",
  "clientName": "John Doe",
  "deadline": "2025-03-15T00:00:00.000Z",
  "projectStatus": "Active",
  "budget": 5000,
  "paymentStatus": "Pending",
  "createdAt": "2025-01-06T06:00:00.000Z",
  "updatedAt": "2025-01-06T06:00:00.000Z"
}
```

---

## 📖 Usage

### **Adding a New Project**

1. Fill in the **Add New Project** form with:
   - Project Name
   - Client Name
   - Deadline
   - Project Status (select from dropdown)
   - Budget
   - Payment Status (select from dropdown)
2. Click **"Add Project"** button
3. Project will appear in the project list

### **Editing a Project**

1. Locate the project card you want to edit
2. Click the **"Edit"** button on the project card
3. Update the desired fields in the modal form
4. Click **"Update"** to save changes
5. Click **"Cancel"** to discard changes

### **Deleting a Project**

1. Locate the project card you want to delete
2. Click the **"Delete"** button on the project card
3. Confirm the deletion
4. Project will be removed from the list

### **Viewing Dashboard Statistics**

The dashboard automatically displays:
- **Total Projects:** Count of all projects
- **Active Projects:** Count of projects with "Active" status
- **Pending Payments:** Sum of budgets for projects with "Pending" payment status

---

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. **Fork the repository**
2. **Create a new branch** (`git checkout -b feature/your-feature-name`)
3. **Make your changes**
4. **Commit your changes** (`git commit -m 'Add some feature'`)
5. **Push to the branch** (`git push origin feature/your-feature-name`)
6. **Open a Pull Request**

### **Guidelines:**
- Follow existing code style and conventions
- Write clear commit messages
- Test your changes thoroughly
- Update documentation if needed

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Developer

**GitHub:** [Gopi3113](https://github.com/Gopi3113)

**Repository:** [freelancer_notebook](https://github.com/Gopi3113/freelancer_notebook)

---

## 🙏 Acknowledgments

- Built with **React** and **Express**
- Database powered by **MongoDB**
- Icons and emojis from standard Unicode set

---

## 📞 Support

If you encounter any issues or have questions:
- Open an issue on [GitHub Issues](https://github.com/Gopi3113/freelancer_notebook/issues)
- Check existing issues for solutions
- Fork and contribute to help improve the project

---

## 🔮 Future Enhancements

Potential features for future versions:
- 🔐 User authentication and authorization
- 📊 Advanced analytics and reporting
- 📧 Email notifications for deadlines
- 💾 Export projects to PDF/CSV
- 🔍 Advanced search and filtering
- 📱 Mobile app version
- 🌐 Multi-language support
- 💬 Client communication portal
- 📎 File attachments for projects
- ⏰ Time tracking integration

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

Made with ❤️ by freelancers, for freelancers

</div>

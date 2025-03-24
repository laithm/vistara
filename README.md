Vistara - Full Stack Application

Vistara is a full-stack web application built with React (Vite) for the frontend, Node.js/Express for the backend, and MongoDB for data storage. The system tracks user weight, height, and BMI and provides a structured API for data retrieval and storage.
Project Structure
```
vistara/
│── backend/
│   ├── api/
│   │   ├── controllers/    # Business logic for API endpoints
│   │   ├── models/         # Mongoose schemas and database models
│   │   ├── routes/         # API route handlers
│   ├── config/             # Database and server configurations
│   ├── server.js           # Main server file
│
│── frontend/
│   ├── src/
│   │   ├── assets/         # Static assets such as images and icons
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # React pages for routing
│   │   ├── App.tsx         # Root application component
│   │   ├── main.tsx        # Application entry point
│   ├── package.json        # Project dependencies
│   ├── vite.config.ts      # Vite configuration
│
│── .gitignore
│── README.md               # Project documentation
│── package.json            # Node.js dependencies
│── tsconfig.json           # TypeScript configuration
```
Backend Setup (Node.js, Express, MongoDB)
1. Install Dependencies

Navigate to the backend directory and install the required dependencies:

cd backend
npm install

2. MongoDB Connection

The backend is connected to MongoDB Atlas using the following configuration:

    Database Name: User_Info
    Collection Name: User_Info
    Schema Structure:

{
  "ID": "12345",
  "Weight": 70000,
  "Height": 175,
  "BMI": 22.86,
  "TimeStamp": "2025-03-21T17:01:19.632Z"
}

3. API Endpoints
Method	Endpoint	Description
GET	/api/user/:id	Retrieve weight data by user ID
POST	/api/user/	Add a new weight entry
Example: Fetch User Weight

curl -X GET http://localhost:5000/api/user/12345

4. Run the Server

To start the backend server, use:

npm start

or, if nodemon is installed:

nodemon server.js

Frontend Setup (React, TypeScript, Vite)
1. Install Dependencies

Navigate to the frontend directory and install the required dependencies:

cd frontend
npm install

2. Run the Development Server

Start the frontend development server:

npm run dev

3. Build for Production

To build the frontend for production:

npm run build

Frontend Architecture

frontend/
├── src/
│   ├── assets/          # Static assets (images, icons)
│   ├── components/      # UI components
│   ├── pages/
│   │   ├── Home.tsx     # Home page
│   │   ├── Dashboard.tsx # User dashboard
│   ├── App.tsx         # Main application component
│   ├── App.css         # Global styles
│   ├── main.tsx        # Application entry point
│   └── index.html      # Root HTML file

Technologies Used

    React – Component-based UI
    TypeScript – Strongly typed JavaScript
    Vite – Fast build tool for React applications
    Framer Motion – Smooth animations and transitions
    React Router – Client-side navigation
    Tailwind CSS – Utility-first styling
    Axios – API request handling

Deployment

    Frontend: Vercel / Netlify
    Backend: Hosted on a dedicated cloud server
    Database: MongoDB Atlas

Author

Laith Masri
Student ID: 240367312

This project is actively maintained and will continue to be improved with additional features.
const express = require("express");
const bodyParser = require("body-parser");
const dbConnect = require("./config/dbconnect");  // Import the dbConnect function
const userRoutes = require("./routers/userRouters");  // Import the user routes

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());  // Parse incoming JSON requests

// Connect to MongoDB using the existing dbConnect file
dbConnect();

// Use the user routes
app.use("/api/users", userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

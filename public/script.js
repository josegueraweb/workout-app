const express = require('express');
const app = express();
const port = 3001; // Port number to run the server on

//middleware setup

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Display content after login
const firstname = "[First]"; // Replace with the user's first name
const welcomeMessage = document.getElementById("welcome-message");
welcomeMessage.textContent = `Hello, ${firstname}!`;

// Display user-specified content
const dashboardContent = document.getElementById("dashboard-content");
const userContent = document.createElement("p");
userContent.textContent = "This is your personalized workout guide.";
dashboardContent.appendChild(userContent);



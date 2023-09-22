const express = require('express');
const app = express();
const port = 3001; 

// middleware function
function loggerMiddleware(req, res, next) {
    console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
    next(); 
  }
  
  // Use the middleware
  app.use(loggerMiddleware)

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// // Display content after login
// const firstname = "[First]"; // Replace with the user's first name
// const welcomeMessage = document.getElementById("welcome-message");
// welcomeMessage.textContent = `Hello, ${firstname}!`;

// // Display user-specified content
// const dashboardContent = document.getElementById("dashboard-content");
// const userContent = document.createElement("p");
// userContent.textContent = "This is your personalized workout guide.";
// dashboardContent.appendChild(userContent);

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");

    // event listener for the form submission
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Perform authentication logic here (e.g., check username and password)

        // Assuming the authentication is successful, redirect to the homepage
        window.location.href = "homepage.html"; // need to replace with the actual URL of your homepage
    });

}); 

document.addEventListener("DOMContentLoaded", () => {
    const firstname = "[First]"; // Replace with the user's first name
    const welcomeMessage = document.getElementById("welcome-message");
    welcomeMessage.textContent = `Hello, ${firstname}!`;

    const dashboardContent = document.getElementById("dashboard-content");
    const userContent = document.createElement("p");
    userContent.textContent = "This is your personalized workout guide.";
    dashboardContent.appendChild(userContent);
});
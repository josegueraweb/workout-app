var workoutForm = document.getElementById("workout-form");
var regenerateButton = document.getElementById("regenerate-button");

var muscleCheckboxes = document.querySelectorAll('input[name="muscle-type"]');
var selectedMuscleCheckbox = document.querySelector('input[name="muscle-type"]:checked');


muscleCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
        if (this.checked) {
            muscleCheckboxes.forEach(function (otherCheckbox) {
                if (otherCheckbox !== checkbox) {
                    otherCheckbox.checked = false;
                }
            });
        }
    });
});

workoutForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var level = document.querySelector('input[name="level-type"]:checked').value;
    var workoutType = document.querySelector('input[name="workout-type"]:checked').value;
    
    var selectedMuscleCheckbox = document.querySelector('input[name="muscle-type"]:checked');
    var muscleType = selectedMuscleCheckbox ? selectedMuscleCheckbox.value : null;

    console.log("Level: " + level);
    console.log("Workout Type: " + workoutType);
    console.log("Muscle Type: " + muscleType);

    var apiURL = 'https://api.api-ninjas.com/v1/exercises?type=' + workoutType + '&difficulty=' + level + '&equipment=' + muscleType;

    results.innerHTML = "";

    generateWorkout(apiURL);

    workoutForm.classList.add("hidden");
    results.classList.remove("hidden");
    regenerateButton.classList.remove("hidden");
});

function generateWorkout(apiURL) {
    fetch(apiURL, {
            headers: {
                "X-Api-Key": "nLVfqWBdJ/zrBvVXZNO0tA==arT9IvkXmI80V3yO",
            },
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
                console.log(data);
                if (data.length === 0) {
                    results.innerHTML = "We're sorry! We don't have any exercises that fit your criteria."
                } else {
                    data.forEach(function (item) {
                        var workoutEl = `
                        <div class="item">
                            <h1>${capitalizeFirstLetter(item.name)}</h1>
                            <p>Type: ${capitalizeFirstLetter(item.type)}</p>
                            <p>Difficulty: ${capitalizeFirstLetter(item.difficulty)}</p>
                            <p>Muscle: ${capitalizeFirstLetter(item.muscle)}</p>
                            <p>Equipment: ${capitalizeFirstLetter(item.equipment)}</p>
                            <p>Instructions: ${capitalizeFirstLetter(item.instructions)}</p>
                        </div>
                    `;
                    results.innerHTML += workoutEl;
                });
            }
        });
    }

    regenerateButton.addEventListener("click", function () {
        // Show the form and hide the results and regenerate button
        workoutForm.classList.remove("hidden");
        results.classList.add("hidden");
        regenerateButton.classList.add("hidden");
    });

    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }


    

const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log out.');
    }
  };
  
  const logOut = document.querySelector('.logoutbtn');
  logOut.addEventListener('click', logout);










    // =========================

    // var workoutForm = document.getElementById("workout-form");

    // // Add an event listener for form submission
    // workoutForm.addEventListener("submit", function (event) {
    //     event.preventDefault();

    //     var level = document.querySelector('input[name="level-type"]:checked').value;
    //     var workoutType = document.querySelector('input[name="workout-type"]:checked').value;
    //     var equipmentType = document.querySelector('input[name="equipment-type"]:checked').value;

    //     console.log("Level: " + level);
    //     console.log("Workout Type: " + workoutType);
    //     console.log("Equipment Type: " + equipmentType);

    //     var apiURL = 'https://api.api-ninjas.com/v1/exercises?type=' + workoutType + "&difficulty=" + level + "&equipment=" + equipmentType;

    //     function generateWorkout() {
    //         fetch(apiURL, {
    //                 headers: {
    //                     "X-Api-Key": "nLVfqWBdJ/zrBvVXZNO0tA==arT9IvkXmI80V3yO",
    //                 },
    //             })
    //             .then(function (response) {
    //                 return response.json();
    //             })
    //             .then(function (data) {
    //                 console.log(data);
    //                 //   var quoteData = data[0].quote;
    //                 //   var randomQuote = document.createElement("span");
    //                 //   randomQuote.textContent = quoteData;
    //                 //   quoteContainer.appendChild(randomQuote);
    //             });
    //     }
    // });


    // ==============



    // // Dom Hooks for HTML continaers
    // const quoteContainer = document.getElementById("quote-box");
    // const popUpContent = document.getElementById("modal-card-body");
    // const popUp = document.querySelector(".modal");
    // const popUpCloseBtn = document.querySelector(".pop-up-btn");
    // const modalImage = document.getElementById("modal-image");
    // const modalText = document.getElementById("modal-text");
    // const modalCardTitle = document.querySelector('.modal-card-title');

    // // Dom Hooks for text fields
    // const mondayEntry = document.getElementById("monday-entry");
    // const tuesdayEntry = document.getElementById("tuesday-entry");
    // const wednesdayEntry = document.getElementById("wednesday-entry");
    // const thursdayEntry = document.getElementById("thursday-entry");
    // const fridayEntry = document.getElementById("friday-entry");
    // const saturdayEntry = document.getElementById("saturday-entry");
    // const sundayEntry = document.getElementById("sunday-entry");

    // // Dom Hooks for buttons
    // const mondaySaveBtn = document.getElementById("monday-save-btn");
    // const tuesdaySaveBtn = document.getElementById("tuesday-save-btn");
    // const wednesdaySaveBtn = document.getElementById("wednesday-save-btn");
    // const thursdaySaveBtn = document.getElementById("thursday-save-btn");
    // const fridaySaveBtn = document.getElementById("friday-save-btn");
    // const saturdaySaveBtn = document.getElementById("saturday-save-btn");
    // const sundaySaveBtn = document.getElementById("sunday-save-btn");

    // const clearBtn = document.getElementById("clear-btn");

    // const closeModalBtn = document.getElementById("close-modal-btn");

    // const moodRadioButtons = document.querySelectorAll('input[type="radio"]');
    // const moodSubmitButton = document.getElementById("mood-submit-button");
    // const moodTrackerForm = document.getElementById("mood-tracker-form");
    // const selectedMood = document.querySelector('input[name="mood"]:checked');

    // const happyRadioBtn = document.getElementById("happy-radio-button");
    // const stressedRadioBtn = document.getElementById("stressed-radio-button");
    // const mellowRadioBtn = document.getElementById("mellow-radio-button");
    // const sadRadioBtn = document.getElementById("sad-radio-button");
    // const frustratedRadioBtn = document.getElementById("frustrated-radio-button");


    // const request = require('request');
    // var muscle = 'biceps';

    // // API URLs
    // var getQuote = "'https://api.api-ninjas.com/v1/exercises?muscle=' + muscle";
    // var randomFoxApi = "https://randomfox.ca/floof";

    // x

    // // [API-Example01] Function for generating a random inspirational quote on page load.
    // function inspirationalQuote() {
    //   fetch(getQuote, {
    //       headers: {
    //         "X-Api-Key": "nLVfqWBdJ/zrBvVXZNO0tA==arT9IvkXmI80V3yO",
    //       },
    //     })
    //     .then(function (response) {
    //       return response.json();
    //     })
    //     .then(function (data) {
    //       console.log(data);
    //       var quoteData = data[0].quote;
    //       var randomQuote = document.createElement("span");
    //       randomQuote.textContent = quoteData;
    //       quoteContainer.appendChild(randomQuote);
    //     });
    // }




    // // Logs user journal entries to local storage
    // mondaySaveBtn.addEventListener("click", () => {
    //   var mondayInputValue = mondayEntry.value;
    //   localStorage.setItem("mondayEntry", mondayInputValue);
    //   randomPicture();
    //   popUp.classList.add("is-active");
    //   console.log(mondayInputValue);
    // });

    // tuesdaySaveBtn.addEventListener("click", () => {
    //   var tuesdayInputValue = tuesdayEntry.value;
    //   localStorage.setItem("tuesdayEntry", tuesdayInputValue);
    //   randomPicture();
    //   popUp.classList.add("is-active");
    //   console.log(tuesdayInputValue);
    // });

    // wednesdaySaveBtn.addEventListener("click", () => {
    //   var wednesdayInputValue = wednesdayEntry.value;
    //   localStorage.setItem("wednesdayEntry", wednesdayInputValue);
    //   randomPicture();
    //   popUp.classList.add("is-active");
    //   console.log(wednesdayInputValue);
    // });

    // thursdaySaveBtn.addEventListener("click", () => {
    //   var thursdayInputValue = thursdayEntry.value;
    //   localStorage.setItem("thursdayEntry", thursdayInputValue);
    //   randomPicture();
    //   popUp.classList.add("is-active");
    //   console.log(thursdayInputValue);
    // });

    // fridaySaveBtn.addEventListener("click", () => {
    //   var fridayInputValue = fridayEntry.value;
    //   localStorage.setItem("fridayEntry", fridayInputValue);
    //   randomPicture();
    //   popUp.classList.add("is-active");
    //   console.log(fridayInputValue);
    // });

    // saturdaySaveBtn.addEventListener("click", () => {
    //   var saturdayInputValue = saturdayEntry.value;
    //   localStorage.setItem("saturdayEntry", saturdayInputValue);
    //   randomPicture();
    //   popUp.classList.add("is-active");
    //   console.log(saturdayInputValue);
    // });

    // sundaySaveBtn.addEventListener("click", () => {
    //   var sundayInputValue = sundayEntry.value;
    //   localStorage.setItem("sundayEntry", sundayInputValue);
    //   randomPicture();
    //   popUp.classList.add("is-active");
    //   console.log(sundayInputValue);
    // });

    // // Function to clear all journal entries
    // function clearText() {
    //   mondayEntry.value = "";
    //   tuesdayEntry.value = "";
    //   wednesdayEntry.value = "";
    //   thursdayEntry.value = "";
    //   fridayEntry.value = "";
    //   saturdayEntry.value = "";
    //   sundayEntry.value = "";
    // }

    // // Clears journal entries from local storage
    // clearBtn.addEventListener("click", function () {
    //   clearText();
    //   localStorage.clear();
    // });

    // closeModalBtn.addEventListener("click", function () {
    //   popUp.classList.remove("is-active");
    //   const firstImage = modalImage.querySelector("img:first-child");
    //   modalImage.removeChild(firstImage);
    // });

    // // Retrieves the user's journal entries from local storage
    // mondayEntry.value = localStorage.getItem("mondayEntry");
    // tuesdayEntry.value = localStorage.getItem("tuesdayEntry");
    // wednesdayEntry.value = localStorage.getItem("wednesdayEntry");
    // thursdayEntry.value = localStorage.getItem("thursdayEntry");
    // fridayEntry.value = localStorage.getItem("fridayEntry");
    // saturdayEntry.value = localStorage.getItem("saturdayEntry");
    // sundayEntry.value = localStorage.getItem("sundayEntry");

    // // Mood Tracker Submit Event 
    // moodTrackerForm.addEventListener("submit", function (event) {
    //   event.preventDefault();

    //   if (happyRadioBtn.checked) {
    //     modalCardTitle.innerHTML = "";
    //     modalText.innerHTML = "";
    //     var happyMessage = document.createElement("span");
    //     happyMessage.textContent = "Glad you're having a good day!";
    //     modalText.appendChild(happyMessage);
    //     popUp.classList.add("is-active");

    //   } else if (stressedRadioBtn.checked) {
    //     modalCardTitle.innerHTML = "";
    //     modalText.innerHTML = "";
    //     var stressedMessage = document.createElement("span");
    //     stressedMessage.textContent = "Sorry to hear that you're feeling stressed! Hope things get better with some rest.";
    //     modalText.appendChild(stressedMessage);
    //     popUp.classList.add("is-active");

    //   } else if (mellowRadioBtn.checked) {
    //     modalCardTitle.innerHTML = "";
    //     modalText.innerHTML = "";
    //     var mellowMessage = document.createElement("span");
    //     mellowMessage.textContent = "Glad you're feeling mellow!";
    //     modalText.appendChild(mellowMessage);
    //     popUp.classList.add("is-active");

    //   } else if (sadRadioBtn.checked) {
    //     modalCardTitle.innerHTML = "";
    //     modalText.innerHTML = "";
    //     var sadMessage = document.createElement("span");
    //     sadMessage.textContent = "Sorry to hear that you're feeling sad. Know that this feeling will eventually pass and that things will get better!";
    //     modalText.appendChild(sadMessage);
    //     popUp.classList.add("is-active");

    //   } else if (frustratedRadioBtn.checked) {
    //     modalCardTitle.innerHTML = "";
    //     modalText.innerHTML = "";
    //     var frustratedMessage = document.createElement("span");
    //     frustratedMessage.textContent = "Sorry to hear that you're feeling frustrated! Taking a couple of deep breaths and resting usually helps makes things a little better!";
    //     modalText.appendChild(frustratedMessage);
    //     popUp.classList.add("is-active");

    //   } else {
    //     modalCardTitle.innerHTML = "";
    //     modalText.innerHTML = "";
    //     var nullMessage = document.createElement("span");
    //     nullMessage.textContent = "Please select a mood!";
    //     modalText.appendChild(nullMessage);
    //     popUp.classList.add("is-active");
    //   };
    // });


    // /// Function for getting the current time and date
    // function getCurrentTime() {
    //   var today = new Date();
    //   var time = today.toLocaleTimeString([], {
    //     hour: "2-digit",
    //     minute: "2-digit",
    //   });
    //   var date = today.toLocaleDateString();
    //   // Display the current time and date in the HTML element with id "current-time"
    //   document.getElementById("current-time").innerHTML =
    //     "Today is " + date + " , " + time;
    // }
    // // Call the function once to display the time immediately when the page loads
    // getCurrentTime();

    // // Set up the interval to call the getCurrentTime function every minute
    // setInterval(getCurrentTime, 60000);

    // var infoButton = document.getElementById("info-btn");
    // var newParagraph = document.getElementById("new-paragraph");

    // infoButton.addEventListener("click", function () {
    //   if (
    //     newParagraph.style.display === "none" ||
    //     newParagraph.style.display === ""
    //   ) {
    //     newParagraph.style.display = "block";
    //   } else {
    //     newParagraph.style.display = "none";
    //   }
    // });

    // // Don't Delete Yet ==============================================

    // // // Retrieve journal entries from localStorage and populate the textareas
    // // window.addEventListener("DOMContentLoaded", () => {
    // //   mondayEntry.value = localStorage.getItem("mondayEntry") || "";
    // //   tuesdayEntry.value = localStorage.getItem("tuesdayEntry") || "";
    // //   wednesdayEntry.value = localStorage.getItem("wednesdayEntry") || "";
    // //   thursdayEntry.value = localStorage.getItem("thursdayEntry") || "";
    // //   fridayEntry.value = localStorage.getItem("fridayEntry") || "";
    // //   saturdayEntry.value = localStorage.getItem("saturdayEntry") || "";
    // //   sundayEntry.value = localStorage.getItem("sundayEntry") || "";
    // // });





    // // =====================================================================================================

    // // const express = require('express');
    // // const app = express();
    // // const port = 3001; 

    // // // middleware function
    // // function loggerMiddleware(req, res, next) {
    // //     console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
    // //     next(); 
    // //   }

    // //   // Use the middleware
    // //   app.use(loggerMiddleware)

    // // // Start the server
    // // app.listen(port, () => {
    // //   console.log(`Server is running on port ${port}`);
    // // });

    // // // // Display content after login
    // // // const firstname = "[First]"; // Replace with the user's first name
    // // // const welcomeMessage = document.getElementById("welcome-message");
    // // // welcomeMessage.textContent = `Hello, ${firstname}!`;

    // // // // Display user-specified content
    // // // const dashboardContent = document.getElementById("dashboard-content");
    // // // const userContent = document.createElement("p");
    // // // userContent.textContent = "This is your personalized workout guide.";
    // // // dashboardContent.appendChild(userContent);

    // // document.addEventListener("DOMContentLoaded", () => {
    // //     const loginForm = document.getElementById("login-form");

    // //     // event listener for the form submission
    // //     loginForm.addEventListener("submit", function (event) {
    // //         event.preventDefault(); // Prevent the form from submitting normally

    // //         // Perform authentication logic here (e.g., check username and password)

    // //         // Assuming the authentication is successful, redirect to the homepage
    // //         window.location.href = "homepage.html"; // need to replace with the actual URL of your homepage
    // //     });

    // // }); 

    // // document.addEventListener("DOMContentLoaded", () => {
    // //     const firstname = "[First]"; // Replace with the user's first name
    // //     const welcomeMessage = document.getElementById("welcome-message");
    // //     welcomeMessage.textContent = `Hello, ${firstname}!`;

    // //     const dashboardContent = document.getElementById("dashboard-content");
    // //     const userContent = document.createElement("p");
    // //     userContent.textContent = "This is your personalized workout guide.";
    // //     dashboardContent.appendChild(userContent);
    // // });

    // // // Event Listener for Hamburger Menu
    // // document.addEventListener('DOMContentLoaded', () => {
    // //     const hamburger = document.querySelector('.hamburger');
    // //     const menu = document.querySelector('.menu');

    // //     hamburger.addEventListener('click', () => {
    // //         menu.classList.toggle('active');
    // //     });
    // // });


    // // function unclickRadio() {
    // //     const radioButtons = document.querySelectorAll('input[type="radio"]');
    // //     // Loop through the radio buttons
    // //     radioButtons.forEach(radioButton => {
    // //         if (radioButton.checked) {
    // //             // Uncheck the selected radio button
    // //             radioButton.checked = false;
    // //         }
    // //     });
    // // }
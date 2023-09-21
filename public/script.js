// Display content after login
const firstname = "[First]"; // Replace with the user's first name
const welcomeMessage = document.getElementById("welcome-message");
welcomeMessage.textContent = `Hello, ${firstname}!`;

// Display user-specified content
const dashboardContent = document.getElementById("dashboard-content");
const userContent = document.createElement("p");
userContent.textContent = "This is your personalized workout guide.";
dashboardContent.appendChild(userContent);

// Function to fetch and display exercise data
function fetchExercise(exerciseNumber) {
    fetch(`https://api-ninjas.com/api/exercises/${exerciseNumber}`)
        .then(response => response.json())
        .then(data => {
            const exerciseResult = document.getElementById('exercise-result');
            exerciseResult.innerHTML = `<h2>Exercise ${exerciseNumber}</h2>
                                        <p>${data.exercise}</p>`;
        })
        .catch(error => {
            console.error('Error fetching exercise:', error);
        });
}

// Add click event listeners to the links
const exerciseLinks = document.querySelectorAll('a[id^="exercise-link-"]');
exerciseLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const exerciseNumber = this.id.split('-')[2]; // Extract the exercise number
        fetchExercise(exerciseNumber);
    });
});
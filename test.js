var userName = prompt("What is your name?");

// Check if the user entered a name
if (userName) {
    // Display a personalized greeting
    alert("Hello, " + userName + "! Welcome to the world of JavaScript!");
} else {
    // Handle the case where the user did not enter a name
    alert("Hello there! Welcome to the world of JavaScript!");
}
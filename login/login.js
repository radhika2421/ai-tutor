const form = document.getElementById("login-form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents form from submitting

    // Simple Validation
    if (email.value.trim() === "" || password.value.trim() === "") {
        errorMessage.textContent = "Please fill in all fields!";
        return;
    }

    if (password.value.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters!";
        return;
    }

    // If validation passes
    errorMessage.textContent = "Login successful!";
    errorMessage.style.color = "green";

    // Clear input fields
    email.value = "";
    password.value = "";
});

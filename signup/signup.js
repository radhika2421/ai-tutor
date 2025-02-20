const form = document.getElementById("signup-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents form from submitting

    // Validation
    if (password.value !== confirmPassword.value) {
        errorMessage.textContent = "Passwords do not match!";
        return;
    }

    if (password.value.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters!";
        return;
    }

    // If validation passes
    errorMessage.textContent = "Signup successful!";
    errorMessage.style.color = "green";

    // Clear input fields
    username.value = "";
    email.value = "";
    password.value = "";
    confirmPassword.value = "";
});

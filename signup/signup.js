const form = document.getElementById("signup-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const errorMessage = document.getElementById("error-message");

document.addEventListener("DOMContentLoaded", function () {
    const studentRadio = document.getElementById("student");
    const educatorRadio = document.getElementById("educator");
    const educatorFields = document.getElementById("educator-fields");

    function toggleEducatorFields() {
        if (educatorRadio.checked) {
            educatorFields.classList.remove("hidden");
        } else {
            educatorFields.classList.add("hidden");
        }
    }

    studentRadio.addEventListener("change", toggleEducatorFields);
    educatorRadio.addEventListener("change", toggleEducatorFields);
});

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
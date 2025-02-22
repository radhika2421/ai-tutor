const form = document.getElementById("signup-form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const errorMessage = document.getElementById("error-message");
const studentRadio = document.getElementById("student");
const educatorRadio = document.getElementById("educator");
const educatorFields = document.getElementById("educator-fields");

// Function to show/hide educator-specific fields
function toggleEducatorFields() {
    if (educatorRadio.checked) {
        educatorFields.classList.remove("hidden");
    } else {
        educatorFields.classList.add("hidden");
    }
}

// Event listeners for role selection
document.addEventListener("DOMContentLoaded", function () {
    studentRadio.addEventListener("change", toggleEducatorFields);
    educatorRadio.addEventListener("change", toggleEducatorFields);
});

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents form from submitting

    // Validation checks
    if (password.value !== confirmPassword.value) {
        errorMessage.textContent = "Passwords do not match!";
        errorMessage.style.color = "red";
        return;
    }

    if (password.value.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters!";
        errorMessage.style.color = "red";
        return;
    }

    // If validation passes
    errorMessage.textContent = "Signup successful!";
    errorMessage.style.color = "green";

    // Determine user role and redirect
    if (educatorRadio.checked) {
        window.location.href = "./tutor profile/tutor.html"; // Redirect to tutor page
    } else {
        window.location.href = "./student profile/student.html"; // Redirect to student page
    }

    // Clear input fields after signup
    username.value = "";
    email.value = "";
    password.value = "";
    confirmPassword.value = "";
});

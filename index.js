const video = document.getElementById("bg-video");
const togglePassword = document.getElementById("togglePassword");
const username = document.getElementById("name");
const password = document.getElementById("password");
const email = document.getElementById("email");
const setPassword = document.getElementById("setPassword");
const confirmPassword = document.getElementById("confirmPassword");
const correctUsername = "Lightning McQueen";
const correctPassword = "kachow95";

function setTheme(theme) {
    if(theme === 'Dinoco') {
        document.documentElement.style.setProperty("--main-color-1", "#70d1f4");
        document.documentElement.style.setProperty("--main-color-2", "#fff");
        video.src = "dinoco-bg.mp4";
    }
    else if(theme === 'Rusteze') {
        document.documentElement.style.setProperty("--main-color-1", "#c33332");
        document.documentElement.style.setProperty("--main-color-2", "#E2C400");
        video.src = "mcqueen-bg.mp4";
    }
    else {
        alert("Enter a valid theme!");
    }
}

togglePassword.addEventListener("click", function() {
    if (password.type === "password") {
        password.type = "text";
    }
    else if (password.type === "text") {
        password.type = "password";
    }
    else {
        alert("Enter a valid type!");
    }
    this.classList.toggle("fa-eye-slash");
});



function validateInputs() {
    const emailValue = email.value;
    const setPasswordValue = setPassword.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();
    const reg = /^[a-zA-Z0-9_.-]+@[a-z]+\.[a-z]{3}$/i;
    if (!reg.test(emailValue)){
        email.style.borderColor = "red";
        alert("Invalid email!");
    }
    if (setPasswordValue !== confirmPasswordValue) {
        email.style.borderColor = "red";
        alert("Passwords must match!");
    }
}

function validateLogin() {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue === correctUsername && passwordValue === correctPassword) {
        window.location.replace("home.html");

    }
    alert("Invalid Credentials! Try again!");
    
    
}


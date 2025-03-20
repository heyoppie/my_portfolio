// Navbar Toggle for Mobile
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
});

// Close Navbar when a link is clicked (for mobile)
document.querySelectorAll(".nav-links li a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
    });
});

// Night Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    body.classList.add(savedTheme);
    themeToggle.textContent = savedTheme === "night-mode" ? "☀️" : "🌙";
}

themeToggle.addEventListener("click", () => {
    body.classList.toggle("night-mode");
    if (body.classList.contains("night-mode")) {
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "night-mode");
    } else {
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "");
    }
});
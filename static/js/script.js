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

// Smooth Scrolling for Anchor Links
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', (e) => {
        if (link.hash) {
            e.preventDefault();
            document.querySelector(link.hash).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Scroll-to-Top Button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerHTML = '↑';
scrollToTopButton.id = 'scroll-to-top';
document.body.appendChild(scrollToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Style the Scroll-to-Top Button
scrollToTopButton.style.display = 'none';
scrollToTopButton.style.position = 'fixed';
scrollToTopButton.style.bottom = '20px';
scrollToTopButton.style.right = '20px';
scrollToTopButton.style.background = '#007BFF';
scrollToTopButton.style.color = '#fff';
scrollToTopButton.style.border = 'none';
scrollToTopButton.style.borderRadius = '50%';
scrollToTopButton.style.width = '40px';
scrollToTopButton.style.height = '40px';
scrollToTopButton.style.fontSize = '1.2rem';
scrollToTopButton.style.cursor = 'pointer';
scrollToTopButton.style.transition = 'background 0.3s';

scrollToTopButton.addEventListener('mouseover', () => {
    scrollToTopButton.style.background = '#0056b3';
});

scrollToTopButton.addEventListener('mouseout', () => {
    scrollToTopButton.style.background = '#007BFF';
});
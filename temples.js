const currentYear = new Date().getFullYear();
document.getElementById("copyright").textContent = `© ${currentYear} Rubia Magdalena Francesco`;

// Dynamically set the last modified date in the footer
const lastModified = document.lastModified;
document.getElementById("last-modified").textContent = `Last Modification: ${lastModified}`;

// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    if (navMenu.style.display === "flex") {
        navMenu.style.display = "none"; // Hide the menu
        hamburger.textContent = "☰";   // Change to hamburger icon
    } else {
        navMenu.style.display = "flex"; // Show the menu
        hamburger.textContent = "✖";   // Change to close icon
    }
});
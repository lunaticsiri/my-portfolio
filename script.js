
// Mobile Navigation Menu
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", function() {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuBtn.setAttribute("aria-expanded", isOpen);
});

// Close menu after clicking a navigation link
const links = document.querySelectorAll(".nav-links a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

        menuBtn.setAttribute("aria-expanded", "false");

    });

});

// Contact Form Interaction
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    formStatus.textContent =
        "Thank you, " + name + "! Your message has been entered successfully.";

    contactForm.reset();

});

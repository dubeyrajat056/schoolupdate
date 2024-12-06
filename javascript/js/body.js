
// Get the current path
const currentPath = window.location.pathname;

// Select all navigation links
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

// Loop through links and set 'active' class
navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.parentElement.classList.add('active');
    }
});


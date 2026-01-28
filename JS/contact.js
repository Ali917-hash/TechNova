// /* Mobile Menu Toggle */
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu-btn');
  const navLinks = document.getElementById('nav-links');

  if (menuBtn && navLinks) {
    // 1. Toggle Menu on Button Click
    menuBtn.addEventListener('click', (e) => {
      e.preventDefault(); // Stop any default button behavior
      navLinks.classList.toggle('active');
      
      // Optional: Change icon from ☰ to X
      if (navLinks.classList.contains('active')) {
          menuBtn.innerHTML = '✕'; // Show X
      } else {
          menuBtn.innerHTML = '&#9776;'; // Show Hamburger
      }
    });

    // 2. Close menu when a link is clicked (Good UX)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.innerHTML = '&#9776;'; // Reset icon to Hamburger
      });
    });
  }
});

  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    alert(`Thank you, ${name}! Your message has been sent successfully.`);
    this.reset();
});

// This script makes the cards interactive
document.querySelectorAll('.faq-card').forEach(card => {
    card.addEventListener('click', () => {
        console.log("FAQ clicked!");
    });
});
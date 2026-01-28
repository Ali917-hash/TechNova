const menuBtn = document.getElementById('menu-btn');
  const navLinks = document.getElementById('nav-links');

  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
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
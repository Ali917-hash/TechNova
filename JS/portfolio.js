// ===============================
// MOBILE MENU
// ===============================
const menuBtn1 = document.getElementById("menu-btn");
const navLinks1 = document.getElementById("nav-links");

if (menuBtn1) {
  menuBtn1.addEventListener("click", () => {
    navLinks1.classList.toggle("active");
  });
}

document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (menuBtn && navLinks) {
      menuBtn.addEventListener('click', function() {
        // This adds/removes the 'active' class when clicked
        navLinks.classList.toggle('active');
      });
    }
  });

  function toggleMenu() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('active');
        }
function toggleMenu() {
            const navLinks = document.querySelector('.nav-links');
            const icon = document.querySelector('.mobile-menu-btn i');
            
            navLinks.classList.toggle('active');
            
            // Toggle icon between bars and times (X)
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }

// Get the elements from your HTML
  const menuBtn = document.getElementById('menu-btn');
  const navLinks = document.getElementById('nav-links');

  // Add click event to toggle the "active" class
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Automatically close the menu if a link is clicked
  document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 2. Smooth Scroll for "View Projects" button
    const heroBtn = document.querySelector('.hero .cta-btn');
    heroBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = heroBtn.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });

    // 3. Scroll Reveal Animation for Cards
    const cards = document.querySelectorAll('.card');
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});

  const menuBtns = document.getElementById('menu-btn');
  const navLink = document.getElementById('nav-links');

  // Toggle menu when clicking hamburger
  menuBtns.addEventListener('click', () => {
    navLink.classList.toggle('active');
  });

  // Close menu when a link is clicked
  document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });

  // Close menu when clicking anywhere outside the nav
  document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('active');
    }
  });

function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

  document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (menuBtn && navLinks) {
      menuBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevents immediate closing
        navLinks.classList.toggle('active');
        console.log("Menu toggled"); // Check your browser console to see if this runs
      });

      // Close menu when clicking a link
      navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          navLinks.classList.remove('active');
        });
      });

      // Close menu if clicking outside
      document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
          navLinks.classList.remove('active');
        }
      });
    }
  });

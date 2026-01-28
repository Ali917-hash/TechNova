const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

// Toggle Mobile Menu

// Trimmed site-wide script: mobile menu, smooth scroll, reveal, counters, stats
document.addEventListener('DOMContentLoaded', () => {
  // MOBILE MENU (guarded)
  const menuBtn = document.getElementById('menu-btn');
  const navLinks = document.getElementById('nav-links');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuBtn.innerHTML = navLinks.classList.contains('active') ? '✕' : '☰';
    });

    document.querySelectorAll('#nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.innerHTML = '☰';
      });
    });
  }


/* Add this to your About1.js */

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
        }
    });
}, observerOptions);

// Target sections to animate
document.querySelectorAll('.card, .story-section, .value-item').forEach(el => {
    el.classList.add('reveal-hidden');
    observer.observe(el);
});
});

/* 1. Scroll Animation */
    const reveals = document.querySelectorAll(".reveal");
    window.addEventListener("scroll", () => {
      reveals.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
          el.classList.add("active");
        }
      });
    });

    /* 2. Mobile Menu Toggle */
    const menuBtn = document.getElementById('menu-btn');
    const navLink = document.getElementById('nav-links');

    menuBtn.addEventListener('click', () => {
      navLink.classList.toggle('active');
    });
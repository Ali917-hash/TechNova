// services-only.js
// Extracted JS required by services.html

document.addEventListener('DOMContentLoaded', function() {
  // MOBILE MENU
  const menuBtn = document.getElementById('menu-btn');
  const navLinks = document.getElementById('nav-links');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      // Optional: toggle icon
      menuBtn.innerHTML = navLinks.classList.contains('active') ? '✕' : '☰';
    });

    // Optional: Close the menu when a link is clicked (useful for mobile)
    document.querySelectorAll('#nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.innerHTML = '☰';
      });
    });
  }

  // SMOOTH SCROLL
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // FILTER SERVICES
  const filterButtons = document.querySelectorAll('.filter-btn');
  const serviceCards = document.querySelectorAll('.service-card');

  if (filterButtons.length && serviceCards.length) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelector('.filter-btn.active')?.classList.remove('active');
        btn.classList.add('active');

        const category = btn.dataset.filter;

        serviceCards.forEach(card => {
          if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // SCROLL REVEAL
  function reveal() {
    document.querySelectorAll('.reveal').forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 100) {
        el.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', reveal);
  reveal();

  // COUNTERS (simple per-element counter)
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    let update = () => {
      let target = +counter.dataset.target;
      let value = +counter.innerText;
      let step = Math.ceil(target / 40) || 1;

      if (value < target) {
        counter.innerText = value + step;
        setTimeout(update, 40);
      } else {
        counter.innerText = target;
      }
    };
    if (counter.dataset.target) update();
  });

  // STATS BAR animateCount + observer
  const stats = document.querySelectorAll('.stat-number');
  const speed = 200;

  const animateCount = (el) => {
    const target = +el.getAttribute('data-target');
    const count = +el.innerText.replace(/[^0-9]/g, '') || 0;
    const inc = Math.max(1, target / speed);

    if (count < target) {
      el.innerText = Math.ceil(count + inc);
      setTimeout(() => animateCount(el), 1);
    } else {
      if (target === 10000) el.innerText = '10k+';
      else if (target === 95) el.innerText = '95%';
      else el.innerText = target + '+';
    }
  };

  if (stats.length) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 1.0 });

    stats.forEach(stat => observer.observe(stat));
  }

  // SERVICE MODAL
  const modal = document.getElementById('service-modal') || document.getElementById('serviceModal') || document.getElementById('serviceModal');
  const closeBtn = document.getElementById('close-btn') || document.getElementById('closeModal') || document.getElementById('closeModal');
  const modalTitle = document.getElementById('modal-title') || document.getElementById('service-title');
  const modalDesc = document.getElementById('modal-desc') || document.getElementById('service-desc');

  // Card click opens modal
  const cards = document.querySelectorAll('.service-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const titleElement = card.querySelector('h3') || card.querySelector('h4');
      const descElement = card.querySelector('p');
      if (modal && modalTitle && modalDesc && titleElement && descElement) {
        modalTitle.innerText = titleElement.innerText;
        modalDesc.innerText = descElement.innerText;
        modal.style.display = 'flex';
      }
    });
  });

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });
  }

  // Expose global openService for inline onclick handlers
  window.openService = function(name, info) {
    const modalEl = document.getElementById('service-modal') || document.getElementById('serviceModal') || document.getElementById('serviceModal');
    const titleEl = document.getElementById('modal-title') || document.getElementById('service-title');
    const descEl = document.getElementById('modal-desc') || document.getElementById('service-desc');
    if (!modalEl || !titleEl || !descEl) return console.error('openService: modal elements not found');
    titleEl.innerText = name || 'Service';
    descEl.innerText = info || 'No description provided.';
    modalEl.style.display = 'flex';
  };

});

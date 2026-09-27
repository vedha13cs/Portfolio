// Portfolio Interactive Scripts - Vedhavathi

document.addEventListener("DOMContentLoaded", function () {
  // Offline View Profile & Connectivity Handler
  const imgElement = document.getElementById('profile-views-img');
  const offlineBadge = document.getElementById('offline-views-badge');

  function updateOnlineStatus() {
    if (!navigator.onLine) {
      if (imgElement) imgElement.style.display = 'none';
      if (offlineBadge) offlineBadge.style.display = 'inline-flex';
    }
  }

  window.addEventListener('offline', updateOnlineStatus);
  updateOnlineStatus();

  // Typing effect phrases
  const phrases = [
    'Open to Internships & Software Developer Roles',
    'Computer Science Engineering Student',
    'Software Developer (Best Intern Awardee at Abhimo Tech)',
    'Java, Python & Web Development Enthusiast',
    'Freelance Web Developer - Let\'s Build Your Website!',
    'Always Learning & Solving Real-World Problems'
  ];

  const typingElement = document.getElementById('typing');
  let currentPhraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingDelay = 75;
  let erasingDelay = 35;
  let pauseDelay = 1800;

  function typeEffect() {
    if (!typingElement) return;

    const currentPhrase = phrases[currentPhraseIndex];

    if (isDeleting) {
      typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }

    let currentSpeed = isDeleting ? erasingDelay : typingDelay;

    if (!isDeleting && charIndex === currentPhrase.length) {
      currentSpeed = pauseDelay;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      currentSpeed = 400;
    }

    setTimeout(typeEffect, currentSpeed);
  }

  // Start typing effect
  if (phrases.length) {
    setTimeout(typeEffect, 500);
  }

  // Mobile Navigation Toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('active');
      const icon = hamburger.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });

    // Close menu when clicking link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = hamburger.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });
  }

  // Navbar shadow on scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });
});



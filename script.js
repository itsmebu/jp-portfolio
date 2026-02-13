/* ============================================ */
/* FILE: script.js                             */
/* PATH: /script.js (global JavaScript)        */
/* ============================================ */

document.addEventListener('DOMContentLoaded', function() {
  
  const darkToggle = document.getElementById('darkModeToggle');
  const mobileDarkToggle = document.getElementById('mobileDarkToggle');
  const body = document.body;
  
  if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    if (darkToggle) darkToggle.innerHTML = '<i class="fas fa-sun"></i>';
    if (mobileDarkToggle) mobileDarkToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }

  function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('dark-mode', 'enabled');
      if (darkToggle) darkToggle.innerHTML = '<i class="fas fa-sun"></i>';
      if (mobileDarkToggle) mobileDarkToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      localStorage.setItem('dark-mode', 'disabled');
      if (darkToggle) darkToggle.innerHTML = '<i class="fas fa-moon"></i>';
      if (mobileDarkToggle) mobileDarkToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
  }

  if (darkToggle) darkToggle.addEventListener('click', toggleDarkMode);
  if (mobileDarkToggle) mobileDarkToggle.addEventListener('click', toggleDarkMode);

  const hamburger = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      const icon = hamburger.querySelector('i');
      if (mobileMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  }

  const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (mobileMenu) {
        mobileMenu.classList.remove('active');
        const icon = hamburger.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      }
    });
  });
});
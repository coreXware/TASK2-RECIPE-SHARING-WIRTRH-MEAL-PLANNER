// Sticky Navbar Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.style.background = '#1e1e1e';
      navbar.style.transition = 'background 0.3s ease';
    } else {
      navbar.style.background = 'black';
    }
    // Smooth scrolling for navigation  
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  })
})
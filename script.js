// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Dynamic Text in Hero Section
const dynamicText = document.getElementById('dynamic-text');
const taglines = ["Your Sports Journey", "Achieve Excellence", "Train with the Best"];
let index = 0;

function rotateText() {
  dynamicText.textContent = taglines[index];
  index = (index + 1) % taglines.length;
}

setInterval(rotateText, 3000); // Change text every 3 seconds

// Responsive Navbar Toggle
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('show');
});

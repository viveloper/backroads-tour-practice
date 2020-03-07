const date = document.querySelector('#date');
const navbar = document.querySelector('#navbar');
const navLinks = document.querySelector('#nav-links');
const navToggle = document.querySelector('#nav-toggle');

// set date
date.innerText = new Date().getFullYear();

// toggle nav links
function showNavLinks() {
  navLinks.classList.toggle('show-nav-links');
}

// navbar fixed
function fixNavbar() {
  if (window.pageYOffset > 62) {
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }
}

// add event listener
navToggle.addEventListener('click', showNavLinks);
window.addEventListener('scroll', fixNavbar);

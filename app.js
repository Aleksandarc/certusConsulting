const otherNav = document.querySelector('.otherNav');
const toggle = document.querySelector('.toggle');
const navLogo = document.querySelector('.navLogo');
const body = document.body;

toggle.addEventListener('click', navBarStatus);

// Klikom navbar logo-a vraća korisnika na home stranicu
navLogo.addEventListener('click', () => {
  window.open('./index.html', '_self');
});

// Kontroliše navbar na telefonima
function navBarStatus() {
  otherNav.classList.toggle('nav-active');
}

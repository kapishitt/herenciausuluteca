const sections = document.querySelectorAll('.section');
let currentSection = 0;

function scrollToSection(index) {
  if (index >= 0 && index < sections.length) {
    sections[index].scrollIntoView({ behavior: 'smooth' });
    currentSection = index;
  }
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowDown') {
    scrollToSection(currentSection + 1);
  } else if (event.key === 'ArrowUp') {
    scrollToSection(currentSection - 1);
  }
});

// Detectar scroll manual o clic en enlaces
window.addEventListener('scroll', () => {
  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (Math.abs(rect.top) < window.innerHeight / 2) {
      currentSection = index;
    }
  });
});

// CARRUSEL - COSTUMBRES Y TRADICIONES
// let currentSlide = 0;
// const slides = document.querySelectorAll('.slide');
// const container = document.querySelector('.carrusel-container');

// function showSlide(index) {
//   if (index < 0) index = slides.length - 1;
//   if (index >= slides.length) index = 0;
//   currentSlide = index;
//   container.style.transform = `translateX(-${index * 100}%)`;
// }

// document.getElementById('prev').addEventListener('click', () => {
//   showSlide(currentSlide - 1);
// });

// document.getElementById('next').addEventListener('click', () => {
//   showSlide(currentSlide + 1);
// });








document.querySelectorAll('.carrusel-nuevo').forEach((carrusel) => {
  const track = carrusel.querySelector('.carrusel-track');
  const slides = carrusel.querySelectorAll('.carrusel-slide');
  const prevBtn = carrusel.querySelector('.prev');
  const nextBtn = carrusel.querySelector('.next');

  let current = 0;

  function showSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    current = index;
    track.style.transform = `translateX(-${current * 100}vw)`;
  }

  prevBtn.addEventListener('click', () => showSlide(current - 1));
  nextBtn.addEventListener('click', () => showSlide(current + 1));
});






// Crear botón hamburguesa para menú móvil
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
const menuBtn = document.createElement("button");

menuBtn.innerHTML = "☰";
menuBtn.classList.add("menu-toggle");
menuBtn.style.fontSize = "24px";
menuBtn.style.background = "transparent";
menuBtn.style.border = "none";
menuBtn.style.color = "white";
menuBtn.style.cursor = "pointer";

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
});

nav.appendChild(menuBtn);

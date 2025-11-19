// === PULSANTE "ENTRA" ===
document.getElementById("enter-button").addEventListener("click", () => {
  document.getElementById("intro").style.display = "none";

  // Avvia la musica di sottofondo
  const music = document.getElementById("music");
  music.volume = 0.5; // Puoi regolare il volume
  music.play();

  // Riproduci suono di clic
  const clickSound = document.getElementById("click-sound");
  clickSound.play();

  // Mostra la prima sezione
  document.querySelector("#home").classList.remove("hidden");
});

// === MENU MOBILE ===
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const closeBtn = document.getElementById("close-btn");

menuToggle.addEventListener("click", () => {
  navLinks.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  navLinks.classList.remove("open");
});

// === SCROLL ANIMATION (mostra sezioni) ===
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.remove("hidden");
    }
  });
});

// === COOKIE BANNER ===
// ...existing code...

window.addEventListener("DOMContentLoaded", () => {
  const cookieBanner = document.getElementById("cookie-banner");
  const acceptCookiesBtn = document.getElementById("accept-cookies");
  const cookiesAccepted = localStorage.getItem("cookiesAccepted");

  if (!cookiesAccepted) {
    cookieBanner.style.display = "block";
  } else {
    cookieBanner.style.display = "none";
  }

  acceptCookiesBtn.addEventListener("click", () => {
    cookieBanner.style.display = "none";
    localStorage.setItem("cookiesAccepted", "true");
  });
});

// ...existing code...

// LIGHTBOX MODERNA
const images = document.querySelectorAll("#archivio .images img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeLightbox = document.querySelector(".close-lightbox");

images.forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.classList.add("visible");
  });
});

closeLightbox.addEventListener("click", () => {
  lightbox.classList.remove("visible");
});

// Chiudi cliccando fuori dall'immagine
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove("visible");
  }
});

// Chiudi con tasto ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    lightbox.classList.remove("visible");
  }
});

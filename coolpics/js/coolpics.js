// MENU ELEMENTS
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const closeMenu = document.getElementById("close-menu");

// MODAL ELEMENTS
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalClose = document.getElementById("modal-close");
const thumbs = document.querySelectorAll(".thumb");

// OPEN MENU
hamburger.addEventListener("click", () => {
  menu.classList.add("open");
});

// CLOSE MENU
closeMenu.addEventListener("click", () => {
  menu.classList.remove("open");
});

// OPEN MODAL
thumbs.forEach(img => {
  img.addEventListener("click", () => {
    modalImg.src = "images/norris-highres.jpg";
    modal.classList.remove("hidden");
  });
});

// CLOSE MODAL (X)
modalClose.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// CLOSE MODAL (CLICK OUTSIDE)
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});

// CLOSE MODAL (ESC)
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.add("hidden");
  }
});

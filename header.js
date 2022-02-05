const humbergerMenu = document.querySelector(".humberger-menu");
const navLinks = document.querySelector(".navbar-links");

humbergerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

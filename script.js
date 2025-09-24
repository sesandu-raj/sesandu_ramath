const manuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");

manuIcon.onclick = () => {
  navLinks.classList.toggle("active");
};

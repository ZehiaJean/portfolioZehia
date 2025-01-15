function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  // Toggle les classes "open" pour menu et icône
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

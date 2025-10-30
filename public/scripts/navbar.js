const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
toggle.addEventListener("click", function () {
  menu.classList.toggle("open");
});

// get current path (e.g. "/about")
const currentPath = window.location.pathname;
// loop through all nav items
document.querySelectorAll(".menu-item").forEach((link) => {
  if (link.getAttribute("href") === currentPath) {
    link.classList.add("active");
  }
});

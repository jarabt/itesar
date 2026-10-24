const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".main-nav");

function setOpen(open) {
  menu.classList.toggle("open", open);
  toggle.setAttribute("aria-expanded", String(open));
}

toggle.addEventListener("click", function () {
  setOpen(!menu.classList.contains("open"));
});

// Close the phone menu with Escape
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && menu.classList.contains("open")) {
    setOpen(false);
    toggle.focus();
  }
});

// get current path (e.g. "/kontakt")
const currentPath = window.location.pathname;
// loop through all nav items
menu.querySelectorAll("a").forEach((link) => {
  if (link.getAttribute("href") === currentPath) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }
});

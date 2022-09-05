const openMenu = document.querySelector(".hamburger");
const menuOptions = document.querySelector(".menu-options");
openMenu.addEventListener("click", () => {
  menuOptions.classList.toggle("open");

  if (menuOptions.classList.contains("open")) {
    menuOptions.style.height = "100vh";
    openMenu.classList.remove("fa-bars");
    openMenu.classList.add("fa-close", "text-white");
  } else {
    menuOptions.style.height = "0";
    openMenu.classList.remove("fa-close", "text-white");
    openMenu.classList.add("fa-bars");
  }
});

window.addEventListener('resize', () => {
    if(window.innerWidth < 768) {
      menuOptions.classList.remove("open");
      openMenu.classList.remove("fa-close", "text-white");
    }
})

menuOptions.addEventListener("click", () => {
  openMenu.classList.remove("fa-close", "text-white");
  menuOptions.classList.remove("open");
  openMenu.classList.add("fa-bars");
})



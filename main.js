const openMenu = document.querySelector('.hamburger');
const menuOptions = document.querySelector('.menu-options');
openMenu.addEventListener('click', () => {
  menuOptions.classList.toggle('open');

  if (menuOptions.classList.contains('open')) {
    menuOptions.style.height = '100vh';
    openMenu.classList.remove('fa-bars');
    openMenu.classList.add('fa-close', 'text-white', 'fa-2x', 'fixed');
  } else {
    menuOptions.style.height = '0';
    openMenu.classList.remove('fa-close', 'text-white', 'fa-2x', 'fixed');
    openMenu.classList.add('fa-bars');
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    menuOptions.classList.remove('open');
    openMenu.classList.remove('fa-close', 'text-white', 'fa-2x');
    openMenu.classList.add('fa-bars');
  } else {
    menuOptions.style.height = 'auto';
  }
});

menuOptions.addEventListener('click', () => {
  openMenu.classList.remove('fa-close', 'text-white', 'fa-2x');
  menuOptions.classList.remove('open');
  openMenu.classList.add('fa-bars');
});

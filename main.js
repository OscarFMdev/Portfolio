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
    openMenu.classList.remove('fa-close', 'text-white', 'fa-2x', 'fixed');
    openMenu.classList.add('fa-bars');
  } else {
    menuOptions.style.height = 'auto';
  }
});

menuOptions.addEventListener('click', () => {
  openMenu.classList.remove('fa-close', 'text-white', 'fa-2x', 'fixed');
  menuOptions.classList.remove('open');
  openMenu.classList.add('fa-bars');
});

function cardConstruct(title,
  timeline,
  picture,
  description,
  technologies,
  liveURL,
  sourceURL) {
    this.title = title,
    this.timeline = timeline,
    this.picture = picture,
    this.description = description,
    this.technologies = technologies,
    this.liveURL = liveURL,
    this.sourceURL = sourceURL
  } 


  const projects = document.querySelectorAll('.project');

  for( let project = 0; project < projects.length; project++ ) {
    console.log(projects[project].querySelector(".buttons-flex").innerText);

    let title = projects[project].querySelector(".project-title").innerText;
    let timeline = projects[project].querySelector(".project-data").innerText;
    let picture = projects[project].querySelector("img").src;
    let description = projects[project].querySelector(".project-description").innerText;
    let technologies = projects[project].querySelector(".buttons-flex").innerText;

  }


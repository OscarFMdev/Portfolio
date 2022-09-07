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

/* modal */

const array = [{
    id: '1',
    name: 'Tonic',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featured: ['Canopy', 'Back End Dev', 2015],
    image: './images/works-section/project1.svg',
    desktopImage: './images/works-section/desktop/project1.svg',
    technologies: ['html', 'css', 'javascript'],
    live_version: 'https://oscarfmdev.github.io/PortfolioProject/',
    source_link: 'https://github.com/OscarFMdev/PortfolioProject',
  },

  {
    id: '2',
    name: 'Multi-Post Stories',
    shortDescription: 'A convenient way to keep track of their daily routine works.',
    longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featured: ['Canopy', 'Back End Dev', 2015],
    image: './images/works-section/project2.svg',
    desktopImage: './images/works-section/desktop/project2.svg',
    technologies: ['html', 'ruby on rails', 'css', 'javascript'],
    live_version: 'https://oscarfmdev.github.io/PortfolioProject/',
    source_link: 'https://github.com/OscarFMdev/PortfolioProject',
  },

  {
    id: '3',
    name: 'Tonic',
    shortDescription: 'This is a rocket booking and mission joining application.',
    longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featured: ['Canopy', 'Back End Dev', 2015],
    image: './images/works-section/project3.svg',
    desktopImage: './images/works-section/desktop/project3.svg',
    technologies: ['ReactJS', 'Redux', 'Jest'],
    live_version: 'https://oscarfmdev.github.io/PortfolioProject/',
    source_link: 'https://github.com/OscarFMdev/PortfolioProject',
  },

  {
    id: '4',
    name: 'Multi-Post Stories',
    shortDescription: 'MyBudget is a budget manager application.',
    longDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featured: ['Canopy', 'Back End Dev', 2015],
    image: './images/works-section/project4.svg',
    desktopImage: './images/works-section/desktop/project4.svg',
    technologies: ['Ruby on Rails', 'ReactJS', 'PostgreSQL'],
    live_version: 'https://oscarfmdev.github.io/PortfolioProject/',
    source_link: 'https://github.com/OscarFMdev/PortfolioProject',
  },
];





const cardsSection = document.querySelector('#works');


for(let i = 0; i < array.length; i += 1) {


  cardsSection.innerHTML += `<div class="project">
  <img src="${array[i].image}" alt="Project image" class="project-image">
  <img src="${array[i].desktopImage}" alt="Project image" class="project-image desktop-image">
  <div class="text-content">
    <h3 class="project-title">Tonic</h3>
    <div class="project-data">
      <p class="bold">CANOPY</p>
      <p class="middot">&bull;</p>
      <p>Back End Dev</p>
      <p class="middot">&bull;</p>
      <p>2015</p>
    </div>
    <p class="project-description">A daily selection of privately personalized reads;
      no accounts or sign-ups required.</p>
    <ul class="buttons-flex">
      <li class="li-button">html</li>
      <li class="li-button">css</li>
      <li class="li-button">javaScript</li>
    </ul>
    <button class="project-button ">See Project</button>
  </div>
</div> 
  `
}










// const objectContainer = [];
// function CardConstruct(
//   title,
//   timeline,
//   picture,
//   description,
//   technologies,
//   liveURL,
//   sourceURL,
// ) {
//   this.title = title;
//   this.timeline = timeline;
//   this.picture = picture;
//   this.description = description;
//   this.technologies = technologies;
//   this.liveURL = liveURL;
//   this.sourceURL = sourceURL;
// }

// const projects = document.querySelectorAll('.project');

// for (let project = 0; project < projects.length; project += 1) {
//   const title = projects[project].querySelector('.project-title').innerText;
//   const timeline = projects[project].querySelector('.project-data').innerHTML;
//   const picture = projects[project].querySelector('img').src;
//   const description = projects[project].querySelector('.project-description').innerText;
//   const technologies = projects[project].querySelector('.buttons-flex').innerHTML;
//   const liveURL = 'https://oscarfmdev.github.io/PortfolioProject/';
//   const sourceURL = 'https://github.com/OscarFMdev/PortfolioProject';
//   objectContainer.push(
//     new CardConstruct(
//       title,
//       timeline,
//       picture,
//       description,
//       technologies,
//       liveURL,
//       sourceURL,
//     ),
//   );
// }

// const modalButton = document.querySelectorAll('.project-button');
// const modal = document.querySelector('.modal-container');
// const closeModal = document.querySelector('.close-modal');
// for (let index = 0; index < modalButton.length; index += 1) {
//   modalButton[index].setAttribute('data-index', index);
//   modalButton[index].addEventListener('click', (e) => {
//     const pos = e.target.getAttribute('data-index');
//     modal.querySelector('.modal-title').innerHTML = objectContainer[pos].title;
//     modal.querySelector('.project-data').innerHTML = objectContainer[pos].timeline;
//     modal.querySelector('.img-container img').src = objectContainer[pos].picture;
//     modal.querySelector('.desc').innerHTML = objectContainer[pos].description;
//     modal.querySelector('.buttons-flex').innerHTML = objectContainer[pos].technologies;
//     modal.querySelector('.live').href = objectContainer[pos].liveURL;
//     modal.querySelector('.source').href = objectContainer[pos].sourceURL;
//     modal.style.display = 'block';
//   });
// }

// closeModal.addEventListener('click', () => {
//   modal.style.display = 'none';
// });

// console.log(objectContainer);

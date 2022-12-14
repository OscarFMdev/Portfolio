const openMenu = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const crossDiv = document.querySelector('.close-menu');

const openMobileMenu = () => {
  mobileMenu.classList.toggle('open');
  mobileMenu.style.display = 'block';
  mobileMenu.style.height = '100vh';
  openMenu.style.visibility = 'hidden';
  crossDiv.style.visibility = 'visible';
}
openMenu.addEventListener('click', openMobileMenu);

crossDiv.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  mobileMenu.style.height = '0';
  openMenu.style.visibility = 'visible';
  crossDiv.style.visibility = 'hidden';
  mobileMenu.style.height = '0';
});

window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    mobileMenu.classList.remove('open');
    mobileMenu.style.display = 'none';
    crossDiv.style.visibility = 'hidden';
    openMenu.style.visibility = 'visible';
  } else {
    openMenu.style.visibility = 'hidden';
    mobileMenu.style.height = 'auto';
  }
});

mobileMenu.addEventListener('click', () => {
  crossDiv.style.visibility = 'hidden';
  mobileMenu.style.display = 'none';
  mobileMenu.style.height = '0';
  openMenu.style.visibility = 'visible';
  mobileMenu.classList.remove('open');
});

/* modal */

const array = [
  {
    id: '1',
    title: 'Music Festival Webpage',
    titleDesktop: 'Music Festival Webpage',
    mobileDescription:
      'Responsive Music festival web-page created with HTML, CSS and JavaScript. The files are organized and improved for a better performance.',
    desktopDescription:
      'Responsive Music festival web-page created with HTML, CSS and JavaScript. The files are organized and improved for a better performance.',
    longDescription:
    'This is one of my first webpages I\'ve created, I put this project on top because building this webpage made me realize how much I love creating webpages. In this project I used HTML, CSS and JavaScript, I also added a video and optimized the images to improve the performance of the page.',
    featured: ['Personal project', 'Front End', 2022],
    featuredDesktop: ['Personal project', 'Front End', 2022],
    image: './images/projects/musicFestival.png',
    desktopImage: './images/projects/musicFestival.png',
    side: 'left-side',
    technologies: ['html', 'css', 'javascript'],
    technologiesDesktop: ['html', 'css', 'javascript'],
    technologiesModal: [
      'html',
      'css',
      'javascript',
      'github',
      'personal project',
      'front end'
    ],
    liveURL: 'https://oscarfmdev.github.io/musicFestival/',
    sourceURL: 'https://github.com/OscarFMdev/musicFestival',
  },

  {
    id: '2',
    title: 'To Do List',
    titleDesktop: 'To Do List',
    mobileDescription:
      'An app for adding, editing and removing using HTML, CSS and JavaScript',
    desktopDescription:
      'This is an app built with HTML, CSS and JavaScript, with this webpage you can add, edit and delete tasks.',
    longDescription:
      'This is an app built with HTML, CSS and JavaScript, with this webpage you can add, edit and delete tasks. The code is organized in modules and I used webpack to make the code accessible to most of the browsers.',
    featured: ['Microverse', 'Front End', 2022],
    featuredDesktop: ['Microverse', 'Front End', 2022],
    image: './images/projects/ToDoList.png',
    desktopImage: './images/projects/ToDoList.png',
    side: 'right-side',
    technologies: ['html', 'css', 'javascript', 'github'],
    technologiesDesktop: ['html', 'css', 'javascript', 'github'],
    technologiesModal: [
      'html',
      'css',
      'javascript',
      'github',
      'ruby',
      'bootstraps',
    ],
    liveURL: 'https://oscarfmdev.github.io/ToDoList/build/',
    sourceURL: 'https://github.com/OscarFMdev/ToDoList',
  },

  {
    id: '3',
    title: 'Tonic',
    titleDesktop: 'Facebook 360',
    mobileDescription:
      'This is a rocket booking and mission joining application.',
    desktopDescription:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    longDescription:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featured: ['Canopy', 'Back End Dev', 2015],
    featuredDesktop: ['Facebook', 'Full Stack Dev', 2015],
    image: './images/works-section/project3.svg',
    desktopImage: './images/works-section/desktop/project3.svg',
    side: 'left-side',
    technologies: ['html', 'css', 'javascript'],
    technologiesDesktop: ['html', 'css', 'ruby on rails', 'javascript'],
    technologiesModal: [
      'html',
      'css',
      'javascript',
      'github',
      'ruby',
      'bootstraps',
    ],
    liveURL: 'https://oscarfmdev.github.io/PortfolioProject/',
    sourceURL: 'https://github.com/OscarFMdev/PortfolioProject',
  },

  {
    id: '4',
    title: 'Multi-Post Stories',
    titleDesktop: 'Uber navigation',
    mobileDescription: 'MyBudget is a budget manager application.',
    desktopDescription:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    longDescription:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featured: ['Canopy', 'Back End Dev', 2015],
    featuredDesktop: ['Uber', 'Lead developer', 2018],
    image: './images/works-section/project4.svg',
    desktopImage: './images/works-section/desktop/project4.svg',
    side: 'right-side',
    technologies: ['html', 'css', 'javascript'],
    technologiesDesktop: ['html', 'css', 'ruby on rails', 'javascript'],
    technologiesModal: [
      'html',
      'css',
      'javascript',
      'github',
      'ruby',
      'bootstraps',
    ],
    liveURL: 'https://oscarfmdev.github.io/PortfolioProject/',
    sourceURL: 'https://github.com/OscarFMdev/PortfolioProject',
  },
];

const cardsSection = document.querySelector('#works');

for (let i = 0; i < array.length; i += 1) {
  cardsSection.innerHTML += `<div class="project">
  <img src="${array[i].image}" alt="Project image" class="project-image mobile-image" loading="lazy" width="641.2" height="478.183">
  <img src="${array[i].desktopImage}" alt="Project image" class="project-image desktop-image side-${array[i].id % 2}" loading="lazy" width="969" height="797">
  <div class="text-content">
    <h3 class="project-title mobile-card">${array[i].title}</h3>
    <h3 class="project-title desktop-card">${array[i].titleDesktop}</h3>
    <div class="project-data">
      <!--mobile-->
      <p class="bold mobile-card">${array[i].featured[0]}</p>
      <p class="middot mobile-card">&bull;</p>
      <p class="mobile-card">${array[i].featured[1]}</p>
      <p class="middot mobile-card">&bull;</p>
      <p class="mobile-card">${array[i].featured[2]}</p>

      <!--desktop-->
      <p class="bold desktop-card">${array[i].featuredDesktop[0]}</p>
      <p class="middot desktop-card">&bull;</p>
      <p class="desktop-card">${array[i].featuredDesktop[1]}</p>
      <p class="middot desktop-card">&bull;</p>
      <p class="desktop-card">${array[i].featuredDesktop[2]}</p>
    </div>
    <p class="project-description mobile-description">${array[i].mobileDescription}</p>
    <p class="project-description desktop-description">${array[i].desktopDescription}</p>
    <ul class="buttons-flex">

      <li class="li-button mobile-card">${array[i].technologies[0]}</li>
      <li class="li-button mobile-card">${array[i].technologies[1]}</li>
      <li class="li-button mobile-card">${array[i].technologies[2]}</li>

      <li class="li-button desktop-card">${array[i].technologiesDesktop[0]}</li>
      <li class="li-button desktop-card">${array[i].technologiesDesktop[1]}</li>
      <li class="li-button desktop-card">${array[i].technologiesDesktop[2]}</li>
    </ul>
    <button id=${array[i].id - 1} class="project-button">See Project</button>
  </div>
</div> 
  `;
}

const modalButton = document.querySelectorAll('.project-button');
const modal = document.querySelector('.modal-container');

function close() {
  modal.style.display = 'none';
}

for (let index = 0; index < modalButton.length; index += 1) {
  modalButton[index].addEventListener('click', (e) => {
    const pos = e.target.getAttribute('id');

    modal.style.display = 'block';

    modal.innerHTML = `
    <div class="modal-box">
          <div class="modal-dialog">
            <div class="modal-header">
              <div>
                <h3 class="modal-title">${array[pos].title}</h3>
                <div class="project-data" style="margin-bottom= 150px;">
                  <p class="bold mobile-card">${array[pos].featured[0]}</p>
                  <p class="middot mobile-card">???</p>
                  <p class="mobile-card">${array[pos].featured[1]}</p>
                  <p class="middot mobile-card">???</p>
                  <p class="mobile-card">${array[pos].featured[2]}</p>

                  <p class="bold desktop-card">${array[pos].featuredDesktop[0]}</p>
                  <p class="middot desktop-card">???</p>
                  <p class="desktop-card">${array[pos].featuredDesktop[1]}</p>
                  <p class="middot desktop-card">???</p>
                  <p class="desktop-card">${array[pos].featuredDesktop[2]}</p>
                </div>
              </div>
              <img src="./images/modal/close-modal.svg" alt="close modal image" class="close-modal" onclick="close()" width="20" height="20">
            </div>
            <div class="modal-content">
              <div class="img-container">
                <img class="mobile-card" src="${array[pos].image}" alt="project image" loading="lazy" width="641.2" height="478.183">
                <img class="desktop-card" src="${array[pos].desktopImage}" alt="project image" loading="lazy" width="969" height="797">
              </div>
              <div class="description">
                <p class="desc mobile-card">${array[pos].mobileDescription}</p>
                <p class="desc desktop-card">${array[pos].longDescription}</p>
                <div class="tech-box">
                  <div class="tech">
                    <ul class="buttons-flex" style="margin-bottom:30px">
                      <li class="li-button">${array[pos].technologiesModal[0]}</li>
                      <li class="li-button">${array[pos].technologiesModal[1]}</li>
                      <li class="li-button">${array[pos].technologiesModal[2]}</li>
                      <li class="li-button">${array[pos].technologiesModal[3]}</li>
                      <li class="li-button">${array[pos].technologiesModal[4]}</li>
                      <li class="li-button">${array[pos].technologiesModal[5]}</li>
                    </ul>
                  </div>
                  <div class="source-box">
                    <a class="btn-modal live" href="${array[pos].liveURL}">See Live
                      <img src="./images/modal/live.svg" alt="live image">
                    </a>
                    <a class="btn-modal source" href="${array[pos].sourceURL}">See Source
                      <img src="./images/modal/source.svg" alt="source image">
                    </a>
                  </div> <!-- source-box -->
                </div> <!-- tech-box -->
              </div> <!-- description -->
            </div> <!-- modal-content -->
          </div> <!-- modal-dialog -->
        </div>  <!-- modal-box--> `;
    const closeModal = document.querySelector('.close-modal');
    closeModal.addEventListener('click', close);
    modal.addEventListener('click', close);
  });
}

/* FORM validation */

const errorMessage = document.querySelector('.error');
const emailInput = document.querySelector('input[type="email"]');

function formSubmit() {
  const regex = /^[a-z0-9]+@[a-z0-9-]+\.[a-z0-9-.]+$/;
  const email = emailInput.value;
  if (!regex.test(email)) {
    errorMessage.style.display = 'block';
    errorMessage.innerHTML = 'The email should only content lowercase letters';
    return false;
  }
  return true;
}

const form = document.querySelector('.form-container');
form.addEventListener('submit', formSubmit);

emailInput.addEventListener('focus', () => {
  errorMessage.style.display = 'none';
});

/* Local storage */

const userName = document.querySelector('.text-input');
const messageInput = document.querySelector('textarea');

form.addEventListener('input', () => {
  const formData = {
    name: userName.value,
    email: emailInput.value,
    messageInput: messageInput.value,
  };

  localStorage.setItem('contactFormInput', JSON.stringify(formData));
});

let savedFormData = localStorage.getItem('contactFormInput');
savedFormData = JSON.parse(savedFormData);

if (savedFormData != null) {
  userName.value = savedFormData.name;
  emailInput.value = savedFormData.email;
  messageInput.value = savedFormData.messageInput;
}

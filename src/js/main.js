const openMenu = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const crossDiv = document.querySelector('.close-menu');

const openMobileMenu = () => {
  mobileMenu.classList.toggle('open');
  mobileMenu.style.display = 'block';
  mobileMenu.style.height = '100vh';
  openMenu.style.visibility = 'hidden';
  crossDiv.style.visibility = 'visible';
};

const closeMenu = () => {
  mobileMenu.classList.remove('open');
  mobileMenu.style.height = '0';
  openMenu.style.visibility = 'visible';
  crossDiv.style.visibility = 'hidden';
  mobileMenu.style.height = '0';
};

const openInNewTab = (url) => {
  const win = window.open(url, '_blank');
  win.focus();
};

openMenu.addEventListener('click', openMobileMenu);

crossDiv.addEventListener('click', () => closeMenu);

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
    title: 'Marriott Reservation',
    titleDesktop: 'Marriott Reservation',
    mobileDescription:
      'Marriott reservation is a Full Stack web application, it uses Ruby on Rails as an API and the Front End is created with React.',
    desktopDescription:
      'Marriott reservation is a Full Stack web application, it uses Ruby on Rails as an API and the Front End is created with React.',
    longDescription:
    'Marriott reservation is a Full Stack web application, it uses Ruby on Rails as an API and the Front End is created with React, it uses JWT and devise for user authentication, my team and I built this project, we separated our task in Front end and Back End, using GitHub projects (Kanban) and Figma to organize our efforts.',
    featured: ['Ruby on Rails', 'Full Stack', 2023],
    featuredDesktop: ['Ruby on Rails', 'Full Stack', 2023],
    image: './images/projects/marriott.png',
    desktopImage: './images/projects/marriott.png',
    side: 'right-side',
    technologies: ['Ruby on Rails', 'React', 'JavaScript'],
    technologiesDesktop: ['Ruby on Rails', 'React', 'JavaScript'],
    technologiesModal: [
      'Ruby on Rails',
      'CSS',
      'JavaScript',
      'GitHub',
      'Full Stack app',
      'React',
    ],
    liveURL: 'https://marriott-reservation.netlify.app/',
    sourceURL: 'https://github.com/OscarFMdev/Marriott-Reservation-Frontend',
  },
  {
    id: '2',
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
      'front end',
    ],
    liveURL: 'https://oscarfmdev.github.io/musicFestival/',
    sourceURL: 'https://github.com/OscarFMdev/musicFestival',
  },

  {
    id: '3',
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
    id: '4',
    title: 'BudgetWizard',
    titleDesktop: 'BudgetWizard',
    mobileDescription:
      'BudgetWizard is an App built with Ruby on Rails, allows the user to keep track of their transactions.',
    desktopDescription:
      'BudgetWizard is an App built with Ruby on Rails, allows the user to keep track of their transactions. It uses Ruby on Rails for the server, PostgreSQL as the database, Devise to user authentication.',
    longDescription:
    'BudgetWizard is an App built with Ruby on Rails, allows the user to keep track of their transactions. It uses Ruby on Rails for the server, PostgreSQL as the database, Devise to user authentication, SendGrid to send email user validations, and Amazon S3 to store files.',
    featured: ['Rails', 'Full-Stack Dev', 2023],
    featuredDesktop: ['Rails', 'Full Stack Dev', 2023],
    image: './images/projects/budgetWizard.png',
    desktopImage: './images/projects/budgetWizard.png',
    side: 'left-side',
    technologies: ['Rails', 'PostgreSQL', 'Javascript'],
    technologiesDesktop: ['SendGrid', 'Amazon S3', 'Ruby on Rails', 'Javascript'],
    technologiesModal: [
      'Rails',
      'PostgreSQL',
      'Devise',
      'Amazon S3',
      'Ruby',
      'SendGrid',
    ],
    liveURL: 'https://budget-wizard.fly.dev/welcome',
    sourceURL: 'https://github.com/OscarFMdev/BudgetWizard',
  },

  {
    id: '5',
    title: 'Countries Info',
    titleDesktop: 'Countries Info',
    mobileDescription: 'Countries Info is a Single Page Application which provides the user the information of the specified country.',
    desktopDescription:
      'Countries Info is a Single Page Application, the user can search for countries and click on any flag to know more about this country. Built with React and Redux.',
    longDescription:
    'Countries Info is a Single Page Application, the user can search for countries and click on any flag to know more about this country. Built with React and Redux. It uses an API to retrieve information about each country.',
    featured: ['React', 'Front End Dev', 2022],
    featuredDesktop: ['React', 'Front End Dev', 2022],
    image: './images/projects/CountriesInfo.png',
    desktopImage: './images/projects/CountriesInfo.png',
    side: 'right-side',
    technologies: ['React', 'Redux', 'API'],
    technologiesDesktop: ['React', 'Redux', 'API', 'GitHub'],
    technologiesModal: [
      'React',
      'Redux',
      'API',
      'CSS',
      'HTML',
      'GitHub',
    ],
    liveURL: 'https://oscarfmdev-countries.netlify.app/',
    sourceURL: 'https://github.com/OscarFMdev/countries-info',
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
                  <p class="bold mobile-card">${array[pos].featured.map((feature) => `<p class="mobile-card">${feature}</p>`).join('')}</p>
                  <p class="bold desktop-card">${array[pos].featuredDesktop.map((feature) => `<p class="desktop-card">${feature}</p>`).join('')}</p>
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
                  <a class="btn-modal live" href="#" onclick="openInNewTab('${array[pos].liveURL}')">
                    See Live <img src="./images/modal/live.svg" alt="live image">
                  </a>
                
                  <a class="btn-modal source" href="#" onclick="openInNewTab('${array[pos].sourceURL}')">
                    See Source <img src="./images/modal/source.svg" alt="source image">
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

/* DROP-DOWN */
const languagesToggle = document.querySelector('.ar-lan');
const languages = document.querySelector('.languages-boxes');

const frameworksToggle = document.querySelector('.ar-fram');
const frameworks = document.querySelector('.frameworks-boxes');

const skillsToggle = document.querySelector('.ar-skills');
const skills = document.querySelector('.skills-box');

languagesToggle.addEventListener('click', () => {
  languagesToggle.classList.toggle('rotate');
  languages.classList.toggle('show');
});

frameworksToggle.addEventListener('click', () => {
  frameworksToggle.classList.toggle('rotate');
  frameworks.classList.toggle('show');
});

skillsToggle.addEventListener('click', () => {
  skillsToggle.classList.toggle('rotate');
  skills.classList.toggle('show');
});
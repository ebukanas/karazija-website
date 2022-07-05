// DOM elements ----------
const sections =  document.querySelectorAll('section');
const footerTitle = document.querySelector('.center h1');
const footerIndex = document.querySelector('.left');
const footerLink = document.querySelector('.right');
const footer = document.querySelector('.footer');
const openMenu = document.getElementById('openMenu');
const minResMenu = document.querySelector('.minResMenu');
const navbar = document.querySelector('.navbar');
const sectionImages = document.querySelectorAll('.project-image');
const logo = document.getElementById('logo');
const hamburger = document.querySelector('.hamburger');
const checkbox = document.getElementById('checkbox');

// variables -----------
// functions -----------

//navbar transition animations
hamburger.addEventListener('touchend', function() {
  if (minResMenu.classList.contains('opened')) {
    minResMenu.classList.remove('opened');
    minResMenu.classList.add('closed');
    logo.classList.remove('whitelogo');
  } else {
    minResMenu.classList.remove('closed');
    minResMenu.classList.add('opened');
    logo.classList.add('whitelogo');
  }
});

//Intersection Observer API
const isTargetVisible = target => {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        handleChanges(img);
      }
    });
  });
  io.observe(target)
};


//checks if an image is visible in the viewport
sectionImages.forEach(isTargetVisible);

function handleChanges(img) {
    var ID = img.id;
    var totalSections = sectionImages.length;

    if (ID === 'first-img') {
        footerTitle.innerHTML = 'Betono gabalas';
        footerIndex.innerHTML = `01/0${totalSections}`;
        footerLink.addEventListener('click', function() {
          // insert link to work page here
        })
    } else if (ID === 'second-img') {
        footerTitle.innerHTML = 'Chujnių gatvė';
        footerIndex.innerHTML = `02/0${totalSections}`;
    } else if (ID === 'third-img') {
        footerTitle.innerHTML = 'Kažkoks kaimas';
        footerIndex.innerHTML = `03/0${totalSections}`;   
    }
}

// calculates height to work around the safari height: 100vh bug
const appHeight = () => {
  const doc = document.documentElement
  doc.style.setProperty('--app-height', `${window.innerHeight}px`)
 }
 window.addEventListener('resize', appHeight);
 appHeight();

// DOM elements ----------
const sections =  document.querySelectorAll('section');
const footerTitle = document.querySelector('.center h1');
const footerIndex = document.querySelector('.left');
const footer = document.querySelector('.footer');
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const minResMenu = document.querySelector('.minResMenu');
const navbar = document.querySelector('.navbar');
const sectionImages = document.querySelectorAll('.project-image');


// variables -----------

// functions -----------

const isTargetVisible = target => {
    //Intersection Observer API
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
    var ID = img.parentElement.id;
    var totalSections = sections.length;

    console.log(ID + ' is visible');

    if (ID === 'first-img') {
        footerTitle.innerHTML = 'Betono gabalas';
        footerIndex.innerHTML = `01/0${totalSections}`;
    } else if (ID === 'second-img') {
        footerTitle.innerHTML = 'Chujnių gatvė';
        footerIndex.innerHTML = `02/0${totalSections}`;
    } else if (ID === 'third-img') {
        footerTitle.innerHTML = 'Kažkoks kaimas';
        footerIndex.innerHTML = `03/0${totalSections}`;
    }
}

//navbar 
openMenu.addEventListener('click', function() {
    closeMenu.style.display = 'block';
    openMenu.style.display = 'none';
    minResMenu.style.display = 'block';
    navbar.style.border = 'none';
})

closeMenu.addEventListener('click', function() {
    closeMenu.style.display = 'none';
    openMenu.style.display = 'block';
    minResMenu.style.display = 'none';
    navbar.style.border = '1px solid black';
})
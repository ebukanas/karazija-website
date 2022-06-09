// declare variables
const sections =  document.querySelectorAll('section');
const footerTitle = document.querySelector('.center h1');
const footerIndex = document.querySelector('.left');
const footer = document.querySelector('.footer');
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const minResMenu = document.querySelector('.minResMenu');
const navbar = document.querySelector('.navbar');
const sectionImages = document.querySelectorAll('.project-image');


//functions

// let options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 1.0
//   }

const isTargetVisible = target => {
    //Intersection Observer API
  const io = new IntersectionObserver((entries) => {
    console.log(entries)
    entries.forEach(entry => {

      if (entry.isIntersecting) {
        const img = entry.target;
        var ID = img.parentElement.id;
        var totalSections = sections.length;

        if (ID === 'first-img') {
            footerTitle.innerHTML = 'Betono gabalas';
            footerIndex.innerHTML = `01/0${totalSections}`;
            console.log(ID + ' changed');
        } else if (ID === 'second-img') {
            footerTitle.innerHTML = 'Chujnių gatvė';
            footerIndex.innerHTML = `02/0${totalSections}`;
        } else if (ID === 'third-img') {
            footerTitle.innerHTML = 'Kažkoks kaimas';
            footerIndex.innerHTML = `03/0${totalSections}`;
        }
      }
    });
  });

  io.observe(target)
};

//checks if an image is visible in the viewport
sectionImages.forEach(isTargetVisible);

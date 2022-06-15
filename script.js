// DOM elements ----------
const sections =  document.querySelectorAll('section');
const footerTitle = document.querySelector('.center h1');
const footerIndex = document.querySelector('.left');
const footerLink = document.querySelector('.right');
const footer = document.querySelector('.footer');
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const minResMenu = document.querySelector('.minResMenu');
const navbar = document.querySelector('.navbar');
const sectionImages = document.querySelectorAll('.project-image');


// variables -----------

// functions -----------

// Initial calculation
calculateVh();

// Re-calculate on resize
window.addEventListener('resize', calculateVh);

// Re-calculate on device orientation change
window.addEventListener('orientationchange', calculateVh);

const isTargetVisible = target => {
    //Intersection Observer API
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        footerAnimation();
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


function footerAnimation() {
  console.log('footerAnimation start');
  footer.classList.add('animate');

  footer.ontransitionend = () => {
    console.log('animation ended');
    footer.classList.remove('animate');
  }
}

function calculateVh() {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
}



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
        footerAnimationFinished();
      }
    });
  });
  io.observe(target)
};

//checks if an image is visible in the viewport
sectionImages.forEach(isTargetVisible);

const isTargetVisible200px = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(entry.target.parentElement.id);
      footerAnimation();
    }
  })
}


// this is set up to run the footer animations 200px before they are
// in the viewport
const options = {
  root: document.querySelector('.container'),
  rootMargin: '200px',
  threshold: 0
};

// seperate IO set up to trigger footer transitions 200px before they can be seen
myObserver = new IntersectionObserver(isTargetVisible200px, options);
sectionImages.forEach(section => {
  myObserver.observe(section);
})


function handleChanges(img) {
    var ID = img.parentElement.id;
    var totalSections = sections.length;

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

let counter = 0;
// navbar 
openMenu.addEventListener('touchstart', function() {
  console.log('running');
    navbar.style.border = 'none';
    if (minResMenu.classList.contains('hidden')) {
      minResMenu.classList.remove('hidden')
    } else {
      minResMenu.classList.add('hidden')
    }
})

// closeMenu.addEventListener('click', function() {
//     closeMenu.style.display = 'none';
//     openMenu.style.display = 'block';
//     minResMenu.style.display = 'none';
//     navbar.style.border = '1px solid black';
// })


function footerAnimation() {
  console.log('footerAnimation start');
  // console.log('footer animation');
  footer.classList.add('animate');
  footer.classList.remove('opacity');  

//   footer.ontransitionend = () => {
//     console.log('animation ended');
//     footer.classList.remove('animate');
//     footer.classList.add('opacity');
// }    
}

function footerAnimationFinished() {
  console.log('footerAnimation finished');
  footer.classList.remove('animate');
  footer.classList.add('opacity');
}

// declare variables
const sections =  document.querySelectorAll('section');
const footerTitle = document.querySelector('.center h1');
const footerIndex = document.querySelector('.left');
const footer = document.querySelector('.footer');
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const minResMenu = document.querySelector('.minResMenu');
const navbar = document.querySelector('.navbar');
// functions

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

window.addEventListener('touchstart', handleEvent);
window.addEventListener('mousemove', handleEvent);


function handleEvent() {
    sections.forEach(section => {
        section.addEventListener('mouseover', function() {
            footer.classList.add('animate');
            footer.classList.remove('opacity');      
            footer.ontransitionend = () => {
                console.log('animation ended');
                footer.classList.remove('animate');
                footer.classList.add('opacity');
            }
            makeChanges(section);
        })
    })

}


var totalSections = sections.length;

function makeChanges(section) {
    var ID = section.id;
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



// var timer;
//checks if you scroll up or down
// window.onwheel = e => {
//     if (e.deltaY >= 0) { //scroll down
//         clearTimeout(timer);
//         timer = setTimeout(function() {
//         swipeDown();
//         }, 100);
//     } else { //scroll up
//         clearTimeout(timer);
//         timer = setTimeout(function() {
//         swipeUp();
//         }, 100);
//     }

//     return;
// }

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



// $(document).ready(function() {
//     $(window).scroll(function() {
  
//       if ($(window).scrollTop() < $("#div01").height()) {
//         $("#logoCat").show();//true
//         $(".logo:not(#logoCat)").hide();
  
//       } else if ($(window).scrollTop() < $("#div01").height() * 2 ) { 
//         $("#logoDove").show();//true
//         $(".logo:not(#logoDove)").hide();
        
//       } else if ($(window).scrollTop() < $("#div01").height() * 3 ) { 
//         $("#logoFish").show();//true
//         $(".logo:not(#logoFish)").hide();
        
//       } else { 
//         $("#logoDog").show();//true
//         $(".logo:not(#logoDog)").hide(); 
//       }
//     });
//   });

var timer;
  
// checks if you scroll up or down
window.onwheel = (e) => {
    main(e);
}

window.addEventListener('touchmove', main);
window.addEventListener('touchend', main);
window.addEventListener('touchstart', main);


// window.addEventListener('touchend', main);

    function main(e) {
    if (e.deltaY >= 0) { //scroll down
        clearTimeout(timer);
        timer = setTimeout(function() {
        checkSection()
        }, 50);
    } else { //scroll up
        clearTimeout(timer);
        timer = setTimeout(function() {
        checkSection()
        }, 50);
    }
    return;
}

function checkSection() {
    // console.log('running checkSection');
sections.forEach(section => {
    if (isInViewport(section) === true) {
        var ID = section.id;
        var totalSections = sections.length;
        // console.log(ID + section.getBoundingClientRect());

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
    } else {
        return;
    }
});
}

// can you listen to the snap to section event instead? css: scroll-snap-align

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    // console.log(element.id + ' rect.bottom is ' + rect.bottom);
    var elementWidth = document.documentElement.clientHeight;
    return (
        (rect.top + (elementWidth / 2)) >= 0 &&
        rect.left >= 0 &&
        (rect.bottom - (elementWidth / 2)) <= (window.innerHeight || elementWidth) &&
        rect.right <= (window.innerWidth || elementWidth)
    );

}
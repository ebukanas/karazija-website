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

const appHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty('--app-height', `${window.innerHeight}px`);
 }
 window.addEventListener('resize', appHeight);
 appHeight();




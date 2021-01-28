/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navbarList = document.querySelector('#navbar__list');
const fragment = document.createDocumentFragment();
for (let i = 0; i < sections.length; i++) {
  const listItem = document.createElement('li');
  const menuLink = document.createElement('a');
  menuLink.classList.add('menu__link');
  menuLink.setAttribute('href', `#section${i + 1}`);
  menuLink.textContent = sections[i].dataset.nav;

  listItem.appendChild(menuLink);
  fragment.appendChild(listItem);
}
navbarList.appendChild(fragment);


// Add class 'active' to section when near top of viewport



// Scroll to anchor ID using scrollTO event
const menuLinks = document.querySelectorAll('.menu__link')

menuLinks.forEach(menuLink => {
  menuLink.onclick = function(e) {
    e.preventDefault();
    smoothScroll(menuLink);
  };
});

/**
 * End Main Functions
 * Begin Events
 * 
*/
function smoothScroll(link) {
  let hash = link.getAttribute('href');
  console.log(hash);
  let target = document.querySelector(hash);
  let headerOffset = 0;
  let elementPosition = target.offsetTop;
  let offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
  });
}

// Build menu 



// Scroll to section on link click

// Set sections as active


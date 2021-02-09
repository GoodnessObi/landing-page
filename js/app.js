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
// const sections = document.getElementsByTagName('section');
// console.log(sections)

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
const menuLinks = document.querySelectorAll('.menu__link');
const scrollUp = document.querySelector('.scroll-to-top');
const navBar = document.querySelector('.page__header');
// console.log(menuLinks);
let lastId;
let curId = [];

window.addEventListener("scroll", (e) => {
  let fromTop = window.scrollY;
  console.log(fromTop)

  menuLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('active');
      section.classList.add('your-active-class')
    } else {
      link.classList.remove('active');
      section.classList.remove('your-active-class')
    }
  })

  if (fromTop > 100) {
    scrollUp.classList.add('show');
  } else {
    scrollUp.classList.remove('show');
    navBar.classList.remove('no-scroll');
  }
  navBar.classList.remove('no-scroll');
});

// Scroll to anchor ID using scrollTO event
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

document.querySelector('.learn-more').addEventListener('click', function() {
  document.querySelector('.our-team').classList.toggle('show');
})

// Build menu 



// Scroll to section on link click

// Set sections as active

//Scroll to top

scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
})

// Setup isScrolling variable
var isScrolling;

// Listen for scroll events
window.addEventListener('scroll', function ( event ) {
	// Clear our timeout throughout the scroll
  window.clearTimeout( isScrolling );
  
	// Set a timeout to run after scrolling ends
	isScrolling = setTimeout(function() {
  let fromTop = window.scrollY;
  console.log( 'Scrolling has stopped.' );
    if (fromTop > 100) {
      navBar.classList.add('no-scroll');
    }
		// Run the callback
	}, 1000);
});

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

const sections = document.querySelectorAll('section');
const headings = document.querySelectorAll('h2');
let isScrolling;


const navbarList = document.querySelector('#navbar__list');
// Build menu 
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
// build the nav
navbarList.appendChild(fragment);


// Add class 'active' to section when near top of viewport
const menuLinks = document.querySelectorAll('.menu__link');
const scrollUp = document.querySelector('.scroll-to-top');
const navBar = document.querySelector('.page__header');


window.addEventListener("scroll", (e) => {
  let fromTop = window.scrollY;

  //scroll to section on link click
  //set sections as active
  menuLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      // Scroll to section on link click
      link.classList.add('active');
      // Set sections as active
      section.classList.add('your-active-class')
    } else {
      link.classList.remove('active');
      section.classList.remove('your-active-class')
    }
  })

  //Make scroll-up arrow visible when scrollY > 100
  if (fromTop > 100) {
    scrollUp.classList.add('show');
  } else {
    scrollUp.classList.remove('show');
    //Make navbar visible when scrollY < 100
    navBar.classList.remove('no-scroll');
  }
  navBar.classList.remove('no-scroll');

  //Hide Navbar when no scroll occurs in 3secs
  window.clearTimeout( isScrolling );

	isScrolling = setTimeout(function() {
    if (fromTop > 100) {
      navBar.classList.add('no-scroll');
    }
	}, 3000);
});

// Attach scrollTo function to each menuLink
menuLinks.forEach(menuLink => {
  menuLink.onclick = function(e) {
    e.preventDefault();
    smoothScroll(menuLink);
  };
});

//collapsible learn-more button
document.querySelector('.learn-more').addEventListener('click', function() {
  document.querySelector('.our-team').classList.toggle('show');
})

//make each section collapsible on clicking h2
headings.forEach (heading => {
  let siblings = [];
  let nextSibling = heading.nextElementSibling;
  let section = heading.parentElement.parentElement;

  while (nextSibling) {
    siblings.push(nextSibling);
    nextSibling = nextSibling.nextElementSibling;
  }

  heading.addEventListener('click', () => {
    siblings.forEach(sibling => {
      sibling.classList.toggle('hide');
    })
    section.classList.toggle('reduce-height');
  })
})

//Scroll to top
scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
})

//Scroll to anchor ID using scrollTO event
function smoothScroll(link) {
  let hash = link.getAttribute('href');
  let target = document.querySelector(hash);
  let headerOffset = 0;
  let elementPosition = target.offsetTop;
  let offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
  });
}

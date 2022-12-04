// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {

  // Get current scroll position
  let scrollY = window.pageYOffset;

  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 200;
    sectionId = current.getAttribute("id");

    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ) {
      document.querySelector(".header-nav a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".header-nav a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}
const popupBtn = document.querySelectorAll('.popup-btn');
const closeBtn = document.querySelector('.popup-close__wrapper');
const popup = document.querySelector('.popup-overlay');
const body = document.querySelector('body');

popupBtn.forEach(item => {
  item.addEventListener('click', () => {
    popup.classList.add('active');
    body.style.overflow = 'hidden';
  })
})
closeBtn.addEventListener('click', () => {
  popup.classList.remove('active');
  body.style.overflow = '';
})

const popupHelper = document.querySelector('.popup-helper');
const popupWindow = document.querySelector('.popup');

function openPopup() {
  popupWindow.classList.toggle('active-popup');
  popupHelper.classList.toggle('active-helper');
}
popupHelper.addEventListener('click', openPopup);

let range = document.querySelector('.investing-range');
let demo = document.querySelector('.investing-demo');

demo.innerHTML = range.value * 9;
range.oninput = function () {
  demo.innerHTML = range.value * 9;
}
const burgerMenu = document.querySelector('.burger-btn');
const burgerList = document.querySelector('.burger-overlay');

burgerMenu.addEventListener('click', () =>{
  burgerMenu.classList.toggle('active');
  burgerList.classList.toggle('active');
})

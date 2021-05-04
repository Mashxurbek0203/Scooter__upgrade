var burger = document.querySelector('.main-header__hamburger');
var span = document.querySelector('.main-header__hamburger-span');
var nav = document.querySelector('.main-header__navigation');
var mainHeader = document.querySelector('.main-header');
var body = document.querySelector('.body');
var navContainer = document.querySelector('.main-header__navigation-container')
var question = document.querySelector('.question__title')
var answer = document.querySelector('.question__description')



burger.addEventListener("click", function() {
  span.classList.toggle("main-header__hamburger-span--active");

  nav.classList.toggle("main-header__navigation--active");
  
  burger.classList.toggle("main-header__hamburger--active");
  
  body.classList.toggle("body--hidden");

  navContainer.classList.toggle("main-header__navigation-container--active")
});


navContainer.addEventListener("click", function(evt) {
  if(evt.target.matches(".main-header__navigation-container")) {
      span.classList.remove("main-header__hamburger-span--active");
      
      nav.classList.remove("main-header__navigation--active");
      
      burger.classList.remove("main-header__hamburger--active");
      
      body.classList.remove("body--hidden");
      
      navContainer.classList.remove("main-header__navigation-container--active")

    }
  });


  question.addEventListener("click", function() {
    answer.classList.toggle("question__description--active");
    title.classList.toggle("question__title--active")
  })
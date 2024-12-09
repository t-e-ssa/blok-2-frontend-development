var menuToggleButton = document.querySelector("header button");
var linkTekst = document.querySelector("#aanpasbare_linktekst");
var openMenu2 = document.querySelector(".doorklik_nav a");
var menu2 = document.querySelector(".menu2");
var terugNaarMenu1Knop = document.querySelector(".menu2 button");
var body = document.querySelector("body");

menuToggleButton.onclick = toggleMenu;

openMenu2.addEventListener("click", openTweedeMenu);
terugNaarMenu1Knop.addEventListener("click", sluitTweedeMenu);


function toggleMenu() {  
  var deNav = document.querySelector("nav");
  var menuAfbeelding = document.querySelector(".toggleAfbeelding");
  
  if (deNav.classList.contains("toonMenu")) {
    deNav.classList.remove("toonMenu");
    menuAfbeelding.src = "/images/afbeelding_hamburger-menu.png";
    body.classList.remove("menu-open");
  } else {
    deNav.classList.add("toonMenu");
    menuAfbeelding.src = "/images/afbeelding_menu_sluiten.png";
    body.classList.add("menu-open");
  }
}

function veranderLinkTekst() {
    if (linkTekst.textContent == "Dit zijn gekoelde klassiekers") {
      linkTekst.textContent = "Dit is de tripleshot espresso";
    } else if (linkTekst.textContent == "Dit is de tripleshot espresso") {
      linkTekst.textContent = "Dit is de frappuccino";
    } else {
      linkTekst.textContent = "Dit zijn gekoelde klassiekers";
    }
}

function openTweedeMenu() {
	menu2.classList.add("openTweedeMenu");
}

function sluitTweedeMenu() {
	menu2.classList.remove("openTweedeMenu");
}

setInterval (veranderLinkTekst, 6500);


/* Hieronder wordt de code van de site: https://codepen.io/shooft/pen/mdBOZLz gebruikt ter inspiratie voor de carrousel. */

function createCarousel(carouselID, options) {
  let carousel = document.querySelector("#" + carouselID);
  let elementsContainer = carousel.querySelector(":scope > ul");
  let elements = elementsContainer.querySelectorAll("li");
  let linkButtons = carousel.querySelectorAll(":scope > button");
  let bolletjes = carousel.querySelectorAll(":scope .carrousel_bolletjes a");

  function initButtons() {
      if (linkButtons) {
          for (let button of linkButtons) {
              button.addEventListener("click", function (e) {
                  e.preventDefault();
                  let direction = this.classList.contains("previous") ? "previous" : "next";
                  goToElement(direction);
              });
          }
      }
  }

  function initBolletjes() {
      if (options.enableBolletjes && bolletjes) {
          for (let bolletje of bolletjes) {
              bolletje.addEventListener("click", function (e) {
                  e.preventDefault();
                  let newElement = carousel.querySelector(this.hash);
                  scrollToElement(newElement);
              });
          }
      }
  }

  function initKeyboardNavigation() {
      if (options.enableKeyboardNavigation) {
          carousel.addEventListener("keydown", function (e) {
              if (e.code === "ArrowLeft") {
                  e.preventDefault();
                  goToElement("previous");
              } else if (e.code === "ArrowRight") {
                  e.preventDefault();
                  goToElement("next");
              }
          });
      }
  }

  function initStartPosition() {
      elements[0].classList.add("current");
      if (bolletjes.length > 0) bolletjes[0].classList.add("current");
      elementsContainer.scrollLeft = 0;
  }

  function goToElement(direction) {
      let currentElement = carousel.querySelector(":scope > ul > .current");
      let newElement = direction === "previous"
          ? currentElement.previousElementSibling || elements[elements.length - 1]
          : currentElement.nextElementSibling || elements[0];
      scrollToElement(newElement);
  }

  function scrollToElement(newElement) {
      let newElementOffset = newElement.offsetLeft;
      elementsContainer.scrollTo({
          left: newElementOffset,
          behavior: "smooth"
      });
      updateCurrentElement(newElement);
  }

  function updateCurrentElement(newElement) {
      let currentElement = carousel.querySelector(":scope > ul > .current");
      if (currentElement) currentElement.classList.remove("current");
      newElement.classList.add("current");
      if (options.enableBolletjes) updateBolletjes(newElement);
  }

  function updateBolletjes(newElement) {
      let currentBolletje = carousel.querySelector(":scope > .carrousel_bolletjes .current");
      if (currentBolletje) currentBolletje.classList.remove("current");
      let newBolletje = carousel.querySelector(`a[href='#${newElement.id}']`);
      if (newBolletje) newBolletje.classList.add("current");
  }

  initButtons();
  initBolletjes();
  initKeyboardNavigation();
  initStartPosition();
}

(function () {
  // Eerste carrousel: alleen link- en rechts-knoppen
  createCarousel("carrousel1", {
      enableBolletjes: false,
      enableKeyboardNavigation: false
  });

  // Tweede carrousel: bolletjes en toetsenbordnavigatie
  createCarousel("bolletjesAndArrowKeys", {
      enableBolletjes: true,
      enableKeyboardNavigation: true
  });
})();

/* Einde van de gebruikte site ter inspiratie voor de carrousel. */
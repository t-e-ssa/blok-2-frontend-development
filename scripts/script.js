console.log("Slay");

var openButton = document.querySelector("header button");
var sluitButton = document.querySelector("nav button");
var linkTekst = document.querySelector("#aanpasbare_linktekst")

openButton.onclick = openMenu;
sluitButton.onclick = sluitMenu;


function openMenu() {  
  var deNav = document.querySelector("nav");
  deNav.classList.add("toonMenu");
}

function sluitMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");
}

function veranderLinkTekst () {
    if (linkTekst.textContent == "Dit zijn gekoelde klassiekers") {
      linkTekst.textContent = "Dit is de tripleshot espresso";
    } else if (linkTekst.textContent == "Dit is de tripleshot espresso") {
      linkTekst.textContent = "Dit is de frappuccino";
    } else {
      linkTekst.textContent = "Dit zijn gekoelde klassiekers";
    }
}

setInterval (veranderLinkTekst, 6500);



/* Hieronder wordt de code van de site: https://codepen.io/shooft/pen/mdBOZLz gebruikt ter inspiratie voor de carrousel. */

function createCaroCarrousel(carrouselID) {
	let carrousel = document.querySelector("#"+carrouselID);
  let carrouselElementsContainer = carrousel.querySelector(":scope > ul");
	let carrouselElements = carrouselElementsContainer.querySelectorAll("li");
  let linkButtons = carrousel.querySelectorAll(":scope > button");
  
  function iniLinkButtons() {    
    for(linkButton of linkButtons) {
      linkButton.addEventListener("click", function(e){
        e.preventDefault();
        let direction = this.classList.contains("previous");
        goToElement(direction);
      });
    }
  }
  
  function iniStartPosition() {
    carrouselElements[0].classList.add("current");
    carrouselElementsContainer.scrollLeft = 0;
  }
  
  function goToElement(direction) {
		let currentElement = carrousel.querySelector(":scope > ul > .current");

		let newElement;
		if (direction == "previous") {
			newElement = currentElement.previousElementSibling;
			
      if (!newElement) {
				newElement = carrousel.querySelector(":scope > ul > li:last-of-type");
			}
		} else {
			newElement = currentElement.nextElementSibling;
			if (!newElement) {
				newElement = carrousel.querySelector(":scope > ul > li:first-of-type");
			}
		}

		scrollToElement(newElement);
  }
  
  function scrollToElement(newElement) {
    let carouselElementsContainer = newElement.closest("ul");
		let newElementOffset = newElement.offsetLeft;
		
		carouselElementsContainer.scrollTo({
			left: newElementOffset
		});
    
    updateCurrentElement(newElement);
  }
  
	function updateCurrentElement(newElement) {
		let currentElement = carrousel.querySelector(":scope > ul > .current");
		currentElement.classList.remove("current");
		newElement.classList.add("current");
	}
  
  iniLinkButtons();	
  iniStartPosition();
}

(function() {
  createCaroCarrousel("carrousel1");
})();

/* Einde van de gebruikte site ter inspiratie voor de carrousel */
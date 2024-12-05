console.log("Slay");

var openButton = document.querySelector("header button");
var sluitButton = document.querySelector("nav button");
var linkTekst = document.querySelector("#aanpasbare_linktekst");
var openMenu2 = document.querySelector(".doorklik_nav a");
var sluitMenu2 = document.querySelector(".menu2 button");
var menu2 = document.querySelector(".menu2");

openButton.onclick = openMenu;
sluitButton.onclick = sluitMenu;

openMenu2.addEventListener("click", openTweedeMenu);
sluitMenu2.addEventListener("click", sluitTweedeMenu);

function openMenu() {  
  var deNav = document.querySelector("nav");
  deNav.classList.add("toonMenu");
}

function sluitMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");
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

/*
/* Hieronder wordt de code van de site: https://codepen.io/shooft/pen/mdBOZLz gebruikt ter inspiratie voor de carrousel.

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

/* Einde van de gebruikte site ter inspiratie voor de carrousel



/* Test
function createCarrousel(carrouselID) {
	let carrousel = document.querySelector("#"+carrouselID);
  let carrouselElementsContainer = carrousel.querySelector(":scope > ul");
	let carrouselElements = carrouselElementsContainer.querySelectorAll("li");
  let bolletjes = carrousel.querySelectorAll(":scope > nav a");
  let linkButtons = carrousel.querySelectorAll(":scope > a");
	
  
  /****************/
	/* DE BOLLETJES
	/****************/
  /*
  // de bolletjes activeren
  function iniBolletjes() {
    for (bolletje of bolletjes) {
			// elk bolletje laten luisteren naar kliks
      bolletje.addEventListener("click", function(e){
				// als er geklikt wordt
        
				// de default-actie (de link volgen) niet uitvoeren
				e.preventDefault();

        // het nieuwe element opzoeken
				let newElement = carrousel.querySelector(this.hash);
        
        // dan naar het element met ID scrollen
        scrollElement(newElement);
      });
    }
	}
  
  /*
  /***************************/
	/* PIJLTJES OP TOETSENBORD
	/***************************/
  /*
  // met pijltjes heen en weer als (een element in) de carrousel de focus heeft 
	function iniArrowKeys() {
		carrousel.addEventListener('keydown', function(e) {
			if (e.code == "ArrowLeft") {			
				e.preventDefault();
				// naar het vorige element gaan
				goElement("previous");
			} 
			else if (e.code == "ArrowRight")  {			
				e.preventDefault();
				// naar het volgende element gaan
				goElement("next");
			}
		});    
  }
  
  
  /*****************/
	/* START POSITIE */
	/*****************/
  /*
	// het eerste element en bolletje actief maaken
  function StartPosition() {
    // eerste element current maken
    carrouselElements[0].classList.add("current");
    // eerste bolletje current maken
		bolletjes[0].classList.add("current");
		// aan het begin van de container starten
    carrouselElementsContainer.scrollLeft = 0;
  }
  
  
  /*********************/
	/* ALGEMENE FUNCTIES */
	/*********************/
  /*
  //////////////////////////////////
  // naar volgende/vorige element //
  function goElement(direction) {
    
		// het huidige current element opzoeken
		let currentElement = carrousel.querySelector(":scope > ul > .current");

		let newElement;
		if (direction == "previous") {
			// het nieuwe element is het vorige broertje/zusje
			newElement = currentElement.previousElementSibling;
			// checken of nieuwe element bestaat - anders naar laatste
			if (!newElement) {
				newElement = carrousel.querySelector(":scope > ul > li:last-of-type");
			}
		} else {
			// het nieuwe element is het volgende broertje/zusje
			newElement = currentElement.nextElementSibling;
			// checken of nieuwe element bestaat - anders naar eerste
			if (!newElement) {
				newElement = carrousel.querySelector(":scope > ul > li:first-of-type");
			}
		}
    
		// naar het nieuwe element scrollen
		scrollElement(newElement);
  }
  
  
  ///////////////////////////
  // scroll to new element //
  function scrollElement(newElement) {
    // carousel container opzoeken
    let carouselElementsContainer = newElement.closest("ul");

		// de linker offset van het nieuwe element bepalen 
		let newElementOffset = newElement.offsetLeft;
		
		// de carousel naar de berekende positie scrollen
		carouselElementsContainer.scrollTo({
			left: newElementOffset
		});
    
    // nieuwe element current element maken
    updateCurrentElement(newElement);

    // de bolletjes updaten
    updateBolletjes(newElement);
  }
  
  
  ////////////////////////////
	// update current element //
	function updateCurrentElement(newElement) {
		// het huidige current element opzoeken
		let currentElement = carrousel.querySelector(":scope > ul > .current");
		// de class current verwijderen
		currentElement.classList.remove("current");

		// aan nieuwe element de class current toevoegen
		newElement.classList.add("current");
	}

  
  //////////////////////
  // update bolletjes //
  function updateBolletjes(newElement){
		// het huidige current bolletje opzoeken
		let currentBolletje = carrousel.querySelector(":scope > nav .current");
		// de class current verwijderen
		currentBolletje.classList.remove("current");
		
		// het nieuwe bolletje opzoeken
    let newBolletje = carrousel.querySelector("a[href='#"+newElement.id+"']");
		// de class current toevoegen
		newBolletje.classList.add("current");
  }

  
	// de bolletjes activeren
  iniBolletjes();	
  // de pijltjestoetsen activeren 
  iniArrowKeys();	
  // de carrousel bij het begin starten
  StartPosition();
}


/************************/
/* DE CARROUSEL CREËREN */
/************************/
/*
// nadat de pagina geladen is, de carrousels activeren
(function() {
  // hier de id gebruiken van de section in de html
  createCarrousel("bolletjesAndArrowKeys");
  //je kunt hier ook meerdere carrousellen activeren
})();

*/



function createCarousel(carouselID, options) {
    let carousel = document.querySelector("#" + carouselID);
    let elementsContainer = carousel.querySelector(":scope > ul");
    let elements = elementsContainer.querySelectorAll("li");
    let linkButtons = carousel.querySelectorAll(":scope > button");
    let bolletjes = carousel.querySelectorAll(":scope > nav a");
    options = options || {}; // Voor configuratie

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
        let currentBolletje = carousel.querySelector(":scope > nav .current");
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

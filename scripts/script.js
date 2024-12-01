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
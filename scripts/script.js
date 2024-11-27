console.log("Slay");

var openButton = document.querySelector("header button");
var sluitButton = document.querySelector("nav button");

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
var menuItem = document.querySelectorAll(".item-menu");

function selectLink() {
  menuItem.forEach((item) => item.classList.remove("ativo"));
  this.classList.add("ativo");
}

menuItem.forEach((item) => item.addEventListener("click", selectLink));

// Expandir o menu

var btnExp = document.querySelector("#btn-exp");
var menuSide = document.querySelector(".menu-lateral");

btnExp.addEventListener("click", function () {
  menuSide.classList.toggle("expandir");
});

// Fechar o menu ao clicar fora
document.addEventListener("click", function (event) {
  if (
    menuSide.classList.contains("expandir") &&
    !menuSide.contains(event.target)
  ) {
    menuSide.classList.remove("expandir");
  }
});

// Slides

const slides = document.querySelectorAll(".slide");
let atual = 0;

function trocarSlide() {
  slides[atual].classList.remove("ativo");
  atual++;
  if (atual >= slides.length) {
    atual = 0;
  }
  slides[atual].classList.add("ativo");
}

setInterval(trocarSlide, 3000);

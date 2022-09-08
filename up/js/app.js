let nav = document.querySelector(".header__nav--links");
let burger = document.querySelector(".header__nav--hamburger");
let lines = document.querySelectorAll(".line");

burger.addEventListener("click", () => {
  Array.from(lines).forEach((line) => line.classList.toggle("line-toggled"));
  nav.classList.toggle("display__nav");
});

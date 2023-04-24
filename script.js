"use strict";

const nav = document.querySelector(".nav");
const links = document.querySelectorAll("a");

const fixNav = () => {
  if (window.scrollY > nav.offsetHeight + 150) nav.classList.add("active");

  if (window.scrollY < nav.offsetHeight + 150) nav.classList.remove("active");
};

window.addEventListener("scroll", fixNav);

links.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    links.forEach((link) => {
      link.classList.remove("current");
    });

    event.target.classList.add("current");
  });
});

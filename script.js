"use strict";

const nav = document.querySelector(".nav");
const navElements = document.querySelectorAll("li");

const fixNav = () => {
  if (window.scrollY > nav.offsetHeight + 150) nav.classList.add("active");

  if (window.scrollY < nav.offsetHeight + 150) nav.classList.remove("active");
};

window.addEventListener("scroll", fixNav);

navElements.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const current = document.querySelector(".current");
    current.classList.remove("current");
    link.classList.add("current");
  });
});

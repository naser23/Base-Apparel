"use strict";
const button = document.querySelector(".button");

button.addEventListener("click", function () {
  console.log("it worked");
  document.querySelector(".active-text").classList.toggle("hidden");
  document.querySelector(".error-icon").classList.toggle("hidden");
});

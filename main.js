"use strict";
const button = document.querySelector(".button");
const inputField = document.getElementById("email");
const errorText = document.querySelector(".error-text");

button.addEventListener("click", function () {
  inputField.classList.toggle("correct-input");
  errorText.classList.toggle("hidden");
});

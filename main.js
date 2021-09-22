"use strict";
const button = document.querySelector(".submit-button");
const errorText = document.querySelector(".error-text");
const validText = document.querySelector(".valid-text");
const inputField = document.getElementById("email");
let validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function mailChecker() {
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (
    inputField.value.match(validRegex) &&
    validText.classList.contains("hidden")
  ) {
    validText.classList.remove("hidden");
    errorText.classList.add("hidden");
  } else if (
    !inputField.value.match(validRegex) &&
    validText.classList.contains("hidden")
  ) {
    errorText.classList.remove("hidden");
    validText.classList.toggle("hidden");
  }
}

button.addEventListener("click", mailChecker);

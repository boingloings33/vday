const noSelect = [
  "No actually isn't an option lol.",
  "seriously stop trying!",
  "You really thought that would work?",
  "That button is just for decoration.",
  "😡",
  "😡😡",
  "😡😡😡",
  "😡😡😡😡",
  "😡😡😡😡😡",
  "You’re better than this.",
  "This is disappointing but not surprising.",
  "You’re really committing to this bit huh?",
  "I expected more from you.",
  "That was a test and you failed.",
  "Your future self is judging you.",
  "Imagine explaining this decision later.",
  "One day you'll look back on this moment.",
  "Do you need a minute to rethink your life?",
];

const btnNo = document.getElementById("btn-no");
const headerText = document.querySelector(".header-web");

let i = 0;

btnNo.addEventListener("click", function () {
  if (i < noSelect.length) {
    headerText.textContent = noSelect[i];
    i++;
  } else {
    headerText.textContent = noSelect[0];
    i = 1;
  }
});

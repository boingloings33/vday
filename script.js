const noSelect = [
  "No actually isn't an option lol.",
  "seriously stop trying!",
  "You really thought that would work?",
  "Bold move. Wrong move. But bold.",
  "Are you sure you want that on your conscience?",
  "That button is just for decoration.",
  "Wow. After everything we've been through?",
  "This is why we can't have nice things.",
  "You woke up today and chose this?",
  "The audacity. Truly inspiring.",
  "That click hurt my feelings a little.",
  "We talked about this.",
  "You’re better than this.",
  "This is disappointing but not surprising.",
  "You’re really committing to this bit huh?",
  "I expected more from you.",
  "That was a test and you failed.",
  "Your future self is judging you.",
  "Imagine explaining this decision later.",
  "One day you'll look back on this moment.",
  "Oh wow. You doubled down.",
  "This is becoming a personality trait.",
  "Do you need a minute to rethink your life?",
  "I'm not mad. I'm just… disappointed. Again.",
  "You clicked that with confidence too. Wild.",
  "We’re gonna pretend you didn’t just do that.",
  "That was embarrassing. For you.",
  "You really said 'watch me make poor decisions.'",
  "I would say unbelievable but honestly? On brand.",
  "Be so serious right now.",
  "You had one job.",
  "Go ahead. Disappoint me again. I dare you.",
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

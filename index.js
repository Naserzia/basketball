const scoreHome = document.getElementById("score-home");
const scoreGuest = document.getElementById("score-guest");

// Home Score Controls
const btnHomePlusOne = document.getElementById("btn-home-1");
const btnHomePlusTwo = document.getElementById("btn-home-2");
const btnHomePlusThree = document.getElementById("btn-home-3");

// Guest Scores Controls
const btnGuestPlusOne = document.getElementById("btn-guest-1");
const btnGuestPlusTwo = document.getElementById("btn-guest-2");
const btnGuestPlusThree = document.getElementById("btn-guest-3");

function addPoints(sectionEl, amount) {
  const current = parseInt(sectionEl.textContent, 10) || 0;

  sectionEl.textContent = String(current + amount);
}

btnHomePlusOne.addEventListener("click", () => addPoints(scoreHome, 1));
btnHomePlusTwo.addEventListener("click", () => addPoints(scoreHome, 2));
btnHomePlusThree.addEventListener("click", () => addPoints(scoreHome, 3));

btnGuestPlusOne.addEventListener("click", () => addPoints(scoreGuest, 1));
btnGuestPlusTwo.addEventListener("click", () => addPoints(scoreGuest, 2));
btnGuestPlusThree.addEventListener("click", () => addPoints(scoreGuest, 3));

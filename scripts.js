const GIF_LIST = [
  "https://media.giphy.com/media/FTGah7Mx3ss04PcasF/giphy.gif",
  "https://media.giphy.com/media/c76IJLufpNwSULPk77/giphy.gif",
  "https://media.giphy.com/media/gDfteqLchLcRTtjAD7/giphy.gif",
  "https://media.giphy.com/media/xT0BKBvMYBEq0CcYmY/giphy.gif",
  "https://media.giphy.com/media/3odxXG6oUNRVhsdcLK/giphy.gif",
];

const GIF = document.querySelector(".gif");
const NO_BUTTON = document.querySelector(".no-btn");
const QUESTION = document.querySelector(".question");
const YES_BUTTON = document.querySelector(".yes-btn");

let gifIndex = 0;

GIF.addEventListener("click", () => {
  gifIndex === GIF_LIST.length - 1 ? (gifIndex = 0) : gifIndex++;

  const newGif = GIF_LIST[gifIndex];
  GIF.src = newGif;
});

YES_BUTTON.addEventListener("click", () => {
  QUESTION.innerHTML =
    "Yaaay, see you soon my love! <img src='https://media.giphy.com/media/iiEo6XvWx7tdWRPxVw/giphy.gif' class='heart' />";
  GIF.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
  GIF.style = "pointer-events: none";
  GIF.parentElement.classList.add("remove-after");
  YES_BUTTON.style = "display:none";
  NO_BUTTON.style = "display:none";
});

NO_BUTTON.addEventListener("mouseover", () => {
  const noBtnRect = NO_BUTTON.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX) + 1;
  const randomY = Math.floor(Math.random() * maxY) + 1;

  NO_BUTTON.style.left = randomX + "px";
  NO_BUTTON.style.top = randomY + "px";
});

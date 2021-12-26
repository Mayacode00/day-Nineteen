var header;
var mainQuote;
var author;
const soundBtn = document.querySelector(".fa-volume-up");
const copyBtn = document.querySelector(".fa-copy");
const shareBtn = document.querySelector(".fa-twitter");

switch (new Date().getDay()) {
  case 0:
    header = "Quote for Sunday";
    mainQuote =
      "“Coming together is a beginning. Keeping together is progress. Working together is success.”";
    author = "Henry Ford";
    break;
  case 1:
    header = "Quote for Monday";
    mainQuote =
      "“Each morning when I open my eyes I say to myself: I, not events, have the power to make me happy or unhappy today. I can choose which it shall be. Yesterday is dead, tomorrow hasn’t arrived yet. I have just one day, today, and I’m going to be happy in it.”";
    author = "Groucho Marx";
    break;
  case 2:
    header = "Quote for Tuesday";
    mainQuote = "“A year from now you may wish you had started today.”";
    author = "Karen Lamb";
    break;
  case 3:
    header = "Quote for Wednesday";
    mainQuote =
      "“You are always stronger and more resourceful than you give yourself credit for.”";
    author = "Rob Moore";
    break;
  case 4:
    header = "Quote for Thursday";
    mainQuote =
      "“The true meaning of life is to plant trees under whose shade you do not expect to sit.”";
    author = "Nelson Henderson";
    break;
  case 5:
    header = "Quote for Friday";
    mainQuote =
      "“I have not failed. I’ve just found 10,000 ways that won’t work.”";
    author = "Thomas A. Edison";
    break;
  case 6:
    header = "Quote for Saturday";
    mainQuote = "“Without the weekend, where would the week be?”";
    author = "Anthony T. Hincks";
    break;
}

document.querySelector(".header").innerHTML = header;
document.querySelector(".main-quote").innerHTML = mainQuote;
document.querySelector(".author").innerHTML = author;

soundBtn.addEventListener("click", () => {
  let utterance = new SpeechSynthesisUtterance(mainQuote);
  speechSynthesis.speak(utterance);
});
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(mainQuote);
});
shareBtn.addEventListener("click", () => {
  let shareUrl = "https://twitter.com/intent/tweet?url";
  window.open(shareUrl, "_blank");
});

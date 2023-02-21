/* Declare variables below to save the different sections (divs) of your story*/
let goLeft = document.querySelector(".option-one");
let goRight = document.querySelector(".option-two");
let youfoundaDoor = document.querySelector(".option-one-screen");
let yes = document.querySelector(".yes");
let no = document.querySelector(".no");
let fellinDungeon = document.querySelector(".option-two-screen");
let youareOut = document.querySelector(".option-one-end");
let liveHere = document.querySelector(".option-two-end");
let caveImage = document.querySelector(".cave");
let storyOpening = document.querySelector(".story-opening");
let path = document.querySelector(".path");
let pathText = document.querySelector(".path-text");




caveImage.onmouseover = function() {
    storyOpening.style.display = "block";
    pathText.innerHTML = "Choose your path.";
};

goLeft.onclick = function() {
    youfoundaDoor.style.display = "block";
};

goRight.onclick = function() {
    fellinDungeon.style.display = "block";
};

yes.onclick = function() {
    youareOut.style.display = "block";
};

no.onclick = function() {
    liveHere.style.display = "block";
};

fellinDungeon.onmouseover = function() {
    liveHere.style.display = "block";
};
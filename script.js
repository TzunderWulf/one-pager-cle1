// JavaScript source code

/* navigational buttons linked to different parts of the page */
// information section
const infoButton = document.querySelector("#info-btn");
const infoSection = document.querySelector("#info-sec");
infoButton.addEventListener("click", function () {
    infoSection.scrollIntoView({ behavior: 'smooth' });
})

// showcase section
const showcaseButton = document.querySelector("#showcase-btn");
const showcaseSection = document.querySelector("#showcase-sec");
showcaseButton.addEventListener("click", function () {
    showcaseSection.scrollIntoView({ behavior: 'smooth' });
})

// our mission section
const missionButton = document.querySelector("#mission-btn");
const missionSection = document.querySelector("#mission-sec");
missionButton.addEventListener("click", function () {
    missionSection.scrollIntoView({ behavior: 'smooth' });
})

// slideshow section
const imagesButton = document.querySelector("#images-btn");
const imagesSection = document.querySelector("#images-sec");
imagesButton.addEventListener("click", function () {
    imagesSection.scrollIntoView({ behavior: 'smooth' });
})

// our team section
const teamButton = document.querySelector("#team-btn");
const teamSection = document.querySelector("#team-sec");
teamButton.addEventListener("click", function () {
    teamSection.scrollIntoView({ behavior: 'smooth' });
})

// button to return to top
const toTopButton = document.getElementById("to-top-btn");
toTopButton.addEventListener("click", function () {
    document.body.scrollTop = 0; // to make it work in Safari
    document.documentElement.scrollTop = 0; // to make it work in all other browsers
})
// JavaScript source code

/* navigational buttons linked to different parts of the page */
// information section
    const infoButton = document.querySelector("#information");
    const infoSection = document.querySelector("#information-section");
    infoButton.addEventListener("click", function () {
        infoSection.scrollIntoView({ behavior: 'smooth' });
    })

// showcase section
    const showcaseButton = document.querySelector("#showcase");
    const showcaseSection = document.querySelector("#showcase-section");
    showcaseButton.addEventListener("click", function () {
        showcaseSection.scrollIntoView({ behavior: 'smooth' });
    })

// our mission section
    const missionButton = document.querySelector("#our-mission");
    const missionSection = document.querySelector("#our-mission-section");
    missionButton.addEventListener("click", function () {
        missionSection.scrollIntoView({ behavior: 'smooth' });
    })

// images section
    const imagesButton = document.querySelector("#images");
    const imagesSection = document.querySelector("#images-section");
    imagesButton.addEventListener("click", function () {
        imagesSection.scrollIntoView({ behavior: 'smooth' });
    })

// our team section
    const teamButton = document.querySelector("#our-team");
    const teamSection = document.querySelector("#our-team-section");
    teamButton.addEventListener("click", function () {
        teamSection.scrollIntoView({ behavior: 'smooth' });
    })

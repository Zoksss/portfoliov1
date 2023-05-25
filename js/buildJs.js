const goBackBtn = document.querySelector("#galeryGoBack");
const galeryOverlay = document.querySelector("#galeryOverlay");

const imageArray = [
    [
        "./images/map0/map0_1.png",
        "./images/map0/map0_2.png",
        "./images/map0/map0_3.png",
        "./images/map0/map0_4.png",
        "./images/map0/map0_5.png",
        "./images/map0/map0_6.png",
        "./images/map0/map0_7.png",
        "./images/map0/map0_8.png",
        "./images/map0/map0_9.png",
        "./images/map0/map0_10.png",
        "./images/map0/map0_11.png",
        "./images/map0/map0_12.png",
    ],
]

const loadBuildImages = (num) => {
    let currArray = imageArray[num];
    console.log(currArray);

    goBackBtn.click();

}

goBackBtn.addEventListener("click", () => {
    
    if (galeryOverlay.style.display === "flex")
        galeryOverlay.style.display = "none"
    else
        galeryOverlay.style.display = "flex"
})


/*
intro.forEach((introEl) => {
    introEl.classList.add('intro-transition');
    introEl.children[0].classList.add("intro-zt-transition");
})
setTimeout(() => {
    window.location.href = url
    intro.forEach((introEl) => {
        introEl.classList.remove("intro-transition");
        introEl.children[0].classList.remove("intro-zt-transition");
    });
}, 950)
*/
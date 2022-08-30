const navOpen = document.querySelector("#navOpen");
const hamburger = document.querySelector("#hamburger");
const intro = document.querySelectorAll(".intro");

const transitionFire = document.querySelectorAll(".link-fire");
const homepage = document.querySelectorAll(".homepage");


hamburger.addEventListener("click", () => {
    if (navOpen.style.display == "none") {
        navOpen.style.display = "flex";
        navOpen.classList.add("nav-open-anim");
    }
    else {
        navOpen.classList.remove("nav-open-anim");
        navOpen.classList.add("nav-close-anim");
        setTimeout(() => {
            navOpen.style.display = "none";
            navOpen.classList.remove("nav-close-anim");
        }, 800);

    }
});


transitionFire.forEach(transitionEelemnt => {
    transitionEelemnt.addEventListener("click", () => {
        intro.forEach((introEl) => {
            introEl.classList.add('intro-transition');
            introEl.children[0].classList.add("intro-zt-transition");
        })
        setTimeout(() => {
            window.location.href = "http://127.0.0.1:5500/public/project.html"
            intro.forEach((introEl) => {
                introEl.classList.remove("intro-transition");
                introEl.children[0].classList.remove("intro-zt-transition");
            });
        }, 950)
    })
})




homepage.forEach((homeBtn) => {
    homeBtn.addEventListener("click", () => {
        intro.forEach((introEl) => {
            introEl.classList.add('intro-transition');
            introEl.children[0].classList.add("intro-zt-transition");
        })
        setTimeout(() => {
            window.location.href = "http://127.0.0.1:5500/public/index.html"
            intro.forEach((introEl) => {
                introEl.classList.remove("intro-transition");
                introEl.children[0].classList.remove("intro-zt-transition");
            });
        }, 950)
    })
});

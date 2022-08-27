const navOpen = document.querySelector("#navOpen");
const hamburger = document.querySelector("#hamburger");


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




butter.init({cancelOnTouch: true});

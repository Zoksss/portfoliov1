const navOpen = document.querySelector("#navOpen");
const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", () => {
    if(navOpen.style.display == "none")
        navOpen.style.display = "flex";
    else navOpen.style.display = "none";

});

let scrollto = window.localStorage.getItem("scrollto") || "";
let topSc;
setTimeout(() => {
    if (scrollto == "work")
        topSc = document.querySelector(".work-section").getBoundingClientRect().top
    else if (scrollto === "contact") {
        topSc = document.querySelector("#contact").getBoundingClientRect().top
    }
    else{
        return;
    }
    window.scroll({
        top: topSc - 200,
        left: 0,
        behavior: 'smooth'
    });
    window.localStorage.setItem("scrollto", "");
}, 800);
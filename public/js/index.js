const navOpen = document.querySelector("#navOpen");
const hamburger = document.querySelector("#hamburger");
const intro = document.querySelectorAll(".intro");

const transitionFire = document.querySelectorAll(".link-fire");
const homepage = document.querySelectorAll(".homepage");


const projectSubtitle = document.querySelector("#projectSubtitle");
const projectTitle = document.querySelector("#projectTitle");
const projectDesc = document.querySelector("#projectDesc");
const projectImage = document.querySelector("#projectImage");

const emailbtn = document.querySelector("#emailbtn");
const letsTalkBtn = document.querySelector("#letsTalkBtn");
const workBtn = document.querySelector("#workBtn");
const contactBtn = document.querySelector("#contactBtn");
const homeBtn = document.querySelector("#homeBtn");

const footerWorkBtn = document.querySelector("#footerWorkBtn");
const footerResumeBtn = document.querySelector("#footerResumeBtn");
const footerAboutBtn = document.querySelector("#footerAboutBtn");


const contact = document.querySelector("#contact");

let projectId = localStorage.getItem('projectId') || 0;

const setProjectId = (n) => {
    localStorage.setItem('projectId', n);
}


footerWorkBtn && footerWorkBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 700,
        left: 0,
        behavior: 'smooth'
    });
});

letsTalkBtn && letsTalkBtn.addEventListener("click", () => {
    window.scroll({
        top: contact.getBoundingClientRect().top - 200,
        left: 0,
        behavior: 'smooth'
    });
})



workBtn && workBtn.addEventListener("click", () => {
    if (document.URL.includes("index.html")) {
        navOpen.classList.remove("nav-open-anim");
        navOpen.classList.add("nav-close-anim");
        setTimeout(() => {
            navOpen.style.display = "none";
            navOpen.classList.remove("nav-close-anim");

            window.scroll({
                top: document.querySelector(".work-section").getBoundingClientRect().top - 1000,
                left: 0,
                behavior: 'smooth'
            });
        }, 500);
    } else {
        window.localStorage.setItem("scrollto", "work");
        navOpen.classList.remove("nav-open-anim");
        navOpen.classList.add("nav-close-anim");
        console.log("test");
        homepage[0].click();
    }
})


contactBtn && contactBtn.addEventListener("click", () => {
    if (document.URL.includes("index.html")) {
        navOpen.classList.remove("nav-open-anim");
        navOpen.classList.add("nav-close-anim");
        setTimeout(() => {
            navOpen.style.display = "none";
            navOpen.classList.remove("nav-close-anim");

            window.scroll({
                top: document.querySelector("#contact").getBoundingClientRect().top - 200,
                left: 0,
                behavior: 'smooth'
            });
        }, 500);
    } else {
        window.localStorage.setItem("scrollto", "contact");
        navOpen.classList.remove("nav-open-anim");
        navOpen.classList.add("nav-close-anim");
        console.log("test");
        homepage[0].click();
    }
})

homeBtn && homeBtn.addEventListener("click", () => {
    navOpen.classList.remove("nav-open-anim");
    navOpen.classList.add("nav-close-anim");
});

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



const setProject = () => {
    let currProjectObj = projects[projectId];
    console.log(projects);
    console.log(currProjectObj);
    projectDesc.innerHTML = currProjectObj.description;
    projectImage.src = currProjectObj.img;
    projectSubtitle.innerHTML = currProjectObj.subtitle;
    projectTitle.innerHTML = currProjectObj.name;
}


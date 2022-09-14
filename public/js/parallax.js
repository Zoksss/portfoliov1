
window.addEventListener("scroll", (e) => {
    const homeH6 = document.querySelector(".header-bg-text");
    const workH6 = document.querySelector(".workH6");

    let scrolled = window.scrollY * 0.5;


    homeH6.style.transform = `translateY(${-scrolled * 0.4}px)`;
    workH6.style.transform = `translateY(${scrolled * 0.3 - 150}px)`;



});
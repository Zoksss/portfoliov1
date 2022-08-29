
window.addEventListener("scroll", (e) => {
    const homeH6 = document.querySelector(".header-bg-text");
    //const contactH6 = document.querySelector(".contactH6");
    const workH6 = document.querySelector(".workH6");
    const footerH6 = document.querySelector(".footerH6");

    let scrolled = window.scrollY * 0.5;


    homeH6.style.transform = `translateY(${-scrolled * 0.4}px)`;
    //contactH6.style.transform = `translateY(${-scrolled * 0.5 - 200}px)`;
    workH6.style.transform = `translateY(${scrolled * 0.3 - 150}px)`;
    footerH6.style.transform = `translateY(${-scrolled * 0.8 + 1000}px)`;



});
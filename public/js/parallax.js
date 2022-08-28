
window.addEventListener("scroll", (e) => {
    const homeH6 = document.querySelector(".header-bg-text");
    const contactH6 = document.querySelector(".contactH6");
    const workH6 = document.querySelector(".workH6");
    const footerH6 = document.querySelector(".footerH6");

    let scrolled = window.scrollY*0.5;
    console.log(scrolled)

    /*
    homeH6.style.left = `${scrolled * 0.2}px`;
    contactH6.style.left = `${scrolled * 0.2+300}px`;
    workH6.style.left = `${-scrolled * 0.3+1000}px`;
    footerH6.style.left = `${-scrolled * 0.2 + 300}px`;
    */
  
});
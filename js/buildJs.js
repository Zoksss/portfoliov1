const goBackBtn = document.querySelector("#galeryGoBack");
const galeryOverlay = document.querySelector("#galeryOverlay");

const galeryGrid = document.querySelector("#galeryGrid");
const galeryTitle = document.querySelector("#galeryTitle");


const intro2 = document.querySelector(".intro2");

const nameArray = ["Fishing Tycoon Map", "Toy Tycoon Map", "Rooftop", "Monster Map", "Pirate Dock", "Alchemist", "Ultimate Race", "Trash City"];
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
    [
        "./images/map1/map1_1.png",
        "./images/map1/map1_2.png",
        "./images/map1/map1_3.png",
        "./images/map1/map1_4.png",
        "./images/map1/map1_5.png",
        "./images/map1/map1_6.png",
        "./images/map1/map1_7.png",
        "./images/map1/map1_8.png",
        "./images/map1/map1_9.png",
        "./images/map1/map1_10.png",
    ],
    [
        "./images/map2/map2_1.png",
        "./images/map2/map2_2.png",
        "./images/map2/map2_3.png",
        "./images/map2/map2_4.png",
    ],
    [
        "./images/map3/map3_1.png",
        "./images/map3/map3_2.png",
        "./images/map3/map3_3.png",
        "./images/map3/map3_4.png",
        "./images/map3/map3_5.png",
        "./images/map3/map3_6.png",
        "./images/map3/map3_7.png",
        "./images/map3/map3_8.png",
        "./images/map3/map3_9.png",
        "./images/map3/map3_10.png",
        "./images/map3/map3_11.png",
        "./images/map3/map3_12.png",
        "./images/map3/map3_13.png",
        "./images/map3/map3_14.png",
    ],
    [
        "./images/map4/map4_1.png",
        "./images/map4/map4_2.png",
        "./images/map4/map4_3.png",
        "./images/map4/map4_4.png",
        "./images/map4/map4_5.png",
    ],
    [
        "./images/map5/map5_1.png",
        "./images/map5/map5_2.png",
        "./images/map5/map5_3.png",
        "./images/map5/map5_4.png",
        "./images/map5/map5_5.png",
        "./images/map5/map5_6.png",
        "./images/map5/map5_7.png",
    ],
    [
        "./images/map6/map6_1.png",
        "./images/map6/map6_2.png",
        "./images/map6/map6_3.png",
        "./images/map6/map6_4.png",
        "./images/map6/map6_5.png",
        "./images/map6/map6_6.png",
        "./images/map6/map6_7.png",
    ],
    [
        "./images/map7/map7_1.png",
        "./images/map7/map7_2.png",
        "./images/map7/map7_3.png",
        "./images/map7/map7_4.png",
        "./images/map7/map7_5.png",
        "./images/map7/map7_6.png",
        "./images/map7/map7_7.png",
        "./images/map7/map7_8.png",
        "./images/map7/map7_9.png",
    ]
]

const loadBuildImages = (num) => {
    galeryGrid.innerHTML = ``;
    let currArray = imageArray[num];


    intro2.classList.add('intro-transition');
    intro2.children[0].classList.add("intro-zt-transition");
    setTimeout(() => {
        galeryTitle.innerHTML = `${nameArray[num]}`
        for (let i = 0; i <= currArray.length; i++) {
            galeryGrid.innerHTML += `<img class="galery-image" src="${currArray[i]}" alt="">`;
        }
        goBackBtn.click();

        intro2.classList.remove("intro-transition");
        intro2.children[0].classList.remove("intro-zt-transition");

    }, 950)
}

goBackBtn.addEventListener("click", () => {
    intro2.classList.add('intro-transition');
    intro2.children[0].classList.add("intro-zt-transition");

    setTimeout(() => {
        if (galeryOverlay.style.display === "flex")
            galeryOverlay.style.display = "none"
        else
            galeryOverlay.style.display = "flex"

        intro2.classList.remove("intro-transition");
        intro2.children[0].classList.remove("intro-zt-transition");

    }, 950)
})
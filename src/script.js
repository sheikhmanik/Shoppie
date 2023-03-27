let Categories = document.getElementById("Categories");
let sideMenu = document.getElementById("sideMenu");
Categories.addEventListener("click", () => {
    sideMenu.classList.toggle("hidden");
});

let sideMenuClose = document.getElementById("sideMenuClose");
sideMenuClose.addEventListener("click", () => {
    sideMenu.classList.add("hidden");
});

// // to make disappear when user clicked outside of the sidebar
// let doc = document.documentElement;
// doc.addEventListener("click", (event) => {
//     let isClickInsidesideMenu = sideMenu.contains(event.target);
//     if(!isClickInsidesideMenu) {
//         sideMenu.style.display = "none";
//     }
// });

let largeImg = document.getElementById("largeImg");
let imgOne = document.getElementById("imgOne");
let imgTwo = document.getElementById("imgTwo");
let imgThree = document.getElementById("imgThree");
let imgFour = document.getElementById("imgFour");
let imgFive = document.getElementById("imgFive");
imgOne.addEventListener("click", () => {
    largeImg.src = "/images/product-1.png";
    imgTwo.style.border = "none";
    imgThree.style.border = "none";
    imgFour.style.border = "none";
    imgFive.style.border = "none";
    imgOne.style.border = "1px solid gray"
})
imgTwo.addEventListener("click", () => {
    largeImg.src = "/images/product-2.png";
    imgOne.style.border = "none";
    imgThree.style.border = "none";
    imgFour.style.border = "none";
    imgFive.style.border = "none";
    imgTwo.style.border = "1px solid gray"
})
imgThree.addEventListener("click", () => {
    largeImg.src = "/images/product-3.png";
    imgOne.style.border = "none";
    imgTwo.style.border = "none";
    imgFour.style.border = "none";
    imgFive.style.border = "none";
    imgThree.style.border = "1px solid gray";
})
imgFour.addEventListener("click", () => {
    largeImg.src = "/images/product-4.png";
    imgOne.style.border = "none";
    imgTwo.style.border = "none";
    imgThree.style.border = "none";
    imgFive.style.border = "none";
    imgFour.style.border = "1px solid gray";
})
imgFive.addEventListener("click", () => {
    largeImg.src = "/images/product-5.png";
    imgOne.style.border = "none";
    imgTwo.style.border = "none";
    imgThree.style.border = "none";
    imgFour.style.border = "none";
    imgFive.style.border = "1px solid gray";
})
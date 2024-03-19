const sidebarNav = document.querySelector(".sidebar-nav");
const langSwitch = document.querySelector(".lang-switch");
const dashSwitch = document.querySelector(".dash-switch");
const frFlag = document.querySelector(".frFlag");
const enFlag = document.querySelector(".enFlag");
const frTranslate = document.querySelector(".frTranslate");
const enTranslate = document.querySelector(".enTranslate");
const sidebarBtn = document.querySelector(".sidebar-nav a");

sidebarNav.addEventListener("mouseenter", (e) => {
    langSwitch.style.opacity = "1";
    dashSwitch.style.opacity = "1";
    frTranslate.style.opacity = "1";
    enTranslate.style.opacity = "1";
    enFlag.style.transform = "unset";
    frFlag.style.transform = "unset";
    sidebarBtn.style.transform = "unset";
    
    console.log("enter");
});

sidebarNav.addEventListener("mouseleave", (e) => {
    langSwitch.style.opacity = "0";
    dashSwitch.style.opacity = "0";
    enTranslate.style.opacity = "0";
    frTranslate.style.opacity = "0";
    frFlag.style.transform = "rotate(90deg)";
    enFlag.style.transform = "rotate(90deg)";
    sidebarBtn.style.transform = "rotate(90deg)";
    console.log("leave");
});
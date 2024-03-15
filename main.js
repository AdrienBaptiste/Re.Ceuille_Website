const checkbox = document.querySelector('.dash-switch-checkbox');
const allSections = document.querySelectorAll(".section");
const allContainers = document.querySelectorAll(".container");

checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        allSections.forEach(function (section) {
            section.style.border = "2px dashed red";
        });
        allContainers.forEach(function (container) {
            container.style.border = "2px dashed blue";
        });
    } else {
        allSections.forEach(function (section) {
          section.style.border = "none";
        });
        allContainers.forEach(function (container) {
            container.style.border = "none";
        });
    } 
});

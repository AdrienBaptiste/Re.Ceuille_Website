const dashSwitch = document.querySelector(".dash-switch");

dashSwitch.addEventListener("click", deleteDashs);

function deleteDashs() {
  const dashSlider = document.getElementById(".dash-switch-slider");
  if (dashSlider.checked) {
    alert("checked");
  } else {
    alert("You didn't check it! Let me check it for you.");
  }
}
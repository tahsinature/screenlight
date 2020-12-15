alert(
  `
Before using please make sure that you are not sensitive to flashing lights.
======
Do not use this application if you, or others around you, have photosensitive epilepsy.
`
);

const body = document.querySelector("body");
const optionContents = document.querySelector(".option");
const presetItems = document.querySelectorAll(".preset");

const bgColorStandBy = "#fff";
const defaultColor = "red";
let selectedColor = defaultColor;

document.addEventListener("keyup", (key) => {
  if (key.code === "Space") {
    const isActive = optionContents.style.visibility === "hidden";
    isActive ? deactivate() : activate();
  }
});

function selectColor(element) {
  const isCustom = element.toString() === "[object HTMLInputElement]";
  const color = isCustom ? element.value : element.getAttribute("data-color");
  selectedColor = color;
  presetItems.forEach((ele) => ele.classList.remove("active"));
  element.classList.add("active");
}

function activate() {
  body.style.backgroundColor = selectedColor;
  optionContents.style.visibility = "hidden";
}

function deactivate() {
  body.style.backgroundColor = bgColorStandBy;
  optionContents.style.visibility = "visible";
}

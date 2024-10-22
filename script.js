// Theme Control

visibleArea = document.body;
visibleArea.classList.add("theme1");
chooseThemes = document.getElementById("themes-choice");

document.addEventListener('DOMContentLoaded', refreshTheme(), false);
chooseThemes.addEventListener('change', refreshTheme);

function refreshTheme() {
  visibleArea.removeAttribute("class");
  visibleArea.classList.add(`theme${chooseThemes.value}`);
}

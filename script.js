const toggleSwitch = document.querySelector("input[type='checkbox']");
const nav = document.querySelector("#nav");
const toggleIcon = document.querySelector("#toggle-icon");
const image1 = document.querySelector("#image1");
const image2 = document.querySelector("#image2");
const image3 = document.querySelector("#image3");
const textBox = document.querySelector("#text-box");

// Dark or Light Images
function imageMode(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}
// Dark Mode Styles
function darkMode() {
    nav.style.backgroundColor = "rgb(0 0 0 / 50%)";
    textBox.style.backgroundColor = "rgb(255 255 255 / 50%)";
    toggleIcon.children[0].textContent = "Dark Mode";
    toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
    imageMode("dark");
}

// Light Mode Styles
function lightMode() {
    nav.style.backgroundColor = "rgb(255 255 255 / 50%)";
    textBox.style.backgroundColor = "rgb(0 0 0 / 50%)";
    toggleIcon.children[0].textContent = "Light Mode";
    toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
    imageMode("light");
}

// Switch theme dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        darkMode();
    } else {
        document.documentElement.removeAttribute("data-theme", "dark");
        lightMode();
    }
}

toggleSwitch.addEventListener("change", switchTheme);

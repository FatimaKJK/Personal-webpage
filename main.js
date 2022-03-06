function toggleDarkMode() {
    localStorage.setItem('theme', 'dark');
    let bodyElement = document.getElementById("main-background");
    let darkModeButtonElement = document.getElementById("dark-mode-btn");
    //let navigationText = document.getElementsByClassName("nav-links");

if (bodyElement.style.background === "black") {
    bodyElement.style.background = "#fadbb7";
    darkModeButtonElement.innerHTML = "Dark Mode";
} else {
    bodyElement.style.background = "black";
    darkModeButtonElement.innerHTML = "Light Mode";
    //navigationText[0].style.color = "white";
    //navigationText[1].style.color = "white";
    //navigationText[2].style.color = "white";
}

}
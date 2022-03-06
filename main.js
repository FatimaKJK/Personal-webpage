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

//for slideshow
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
//fix to show 2 slides not three

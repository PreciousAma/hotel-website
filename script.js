const navLinks = document.querySelector(".navbar-items .navbar-links");
const menuButton = document.querySelector(".navbar-items .btn-menu");
const navBar = document.querySelector(".navbar");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("display-flex");
    navBar.classList.toggle("navbar-fill");
  }
);

window.addEventListener('scroll', function() {
  if (window.scrollY > 10) {
    document.querySelector('.navbar').style.backgroundColor = "#2C4664"
  } else {
    document.querySelector('.navbar').style.backgroundColor = "transparent";
  } 
});

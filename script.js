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


$(document).ready(function(){
  $('.room-wrap').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          // mobileFirst: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          // infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          // mobileFirst: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          // mobileFirst: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});

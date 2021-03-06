window.onload = function() {
  var navMain = document.querySelector(".main-nav");
  var navToggle = document.querySelector(".main-nav__toggle");

  navMain.classList.remove("main-nav_nojs");

  navToggle.addEventListener("click", function() {
    if (navMain.classList.contains("main-nav_closed")) {
      navMain.classList.remove("main-nav_closed");
      navMain.classList.add("main-nav_opened");
    } else {
      navMain.classList.add("main-nav_closed");
      navMain.classList.remove("main-nav_opened");
    }
  });

  var TABLET_WIDTH = 768;
  var viewportWidth = document.documentElement.clientWidth || window.innerWidth;
  var pictureBefore = document.querySelector(".slider__picture_before");
  var pictureAfter = document.querySelector(".slider__picture_after");
  var toggle = document.querySelector(".slider__toggle");
  var buttonBefore = document.querySelector(".slider__state_before");
  var buttonAfter = document.querySelector(".slider__state_after");

  function mobileSlider() {
    buttonBefore.addEventListener("click", function() {
      pictureBefore.style.display = "block";
      pictureAfter.style.display = "none";
      toggle.style.left = "8%";
    });

    buttonAfter.addEventListener("click", function() {
      pictureBefore.style.display = "none";
      pictureAfter.style.display = "block";
      toggle.style.left = "48%";
    });
  }

  function tabletSlider() {
    buttonBefore.addEventListener("click", function() {
      pictureAfter.style.width = "0%";
      pictureBefore.style.width = "100%";
      toggle.style.left = "0%";
    });
    buttonAfter.addEventListener("click", function() {
      pictureBefore.style.width = "0%";
      pictureAfter.style.width = "100%";
      toggle.style.left = "100%";
    });
  }

  if (viewportWidth >= TABLET_WIDTH) {
    tabletSlider()
  }  else {
    mobileSlider()
  }
};

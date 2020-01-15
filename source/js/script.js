window.onload = function() {
  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');

  navMain.classList.remove('main-nav_nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav_closed')) {
      navMain.classList.remove('main-nav_closed');
      navMain.classList.add('main-nav_opened');
    } else {
      navMain.classList.add('main-nav_closed');
      navMain.classList.remove('main-nav_opened');
    }
  });

  var TABLET_WIDTH = 768;
  var DESKTOP_WIDTH = 1300;
  var viewportWidth = document.documentElement.clientWidth || window.innerWidth;
  var example = document.querySelector('.example__content-wrap');
  var exampleSlider = document.querySelector('.example__slider');
  var pictureBefore = document.querySelector('.slider__picture_before');
  var pictureAfter = document.querySelector('.slider__picture_after');
  var imageAfter = document.querySelector('picture__image_after');
  var toggle = document.querySelector('.slider__toggle');
  var buttonBefore = document.querySelector('.slider__state_before');
  var buttonAfter = document.querySelector('.slider__state_after');

  function mobileSlider() {
    buttonBefore.addEventListener('click', function() {
      if (pictureBefore.classList.contains('slider__picture-hidden')) {
        pictureBefore.classList.remove('slider__picture-hidden');
        pictureAfter.classList.add('slider__picture-hidden');
        toggle.classList.remove('slider__toggle-after');
      }
    });

    buttonAfter.addEventListener('click', function() {
      if (pictureAfter.classList.contains('slider__picture-hidden')) {
        pictureAfter.classList.remove('slider__picture-hidden');
        pictureBefore.classList.add('slider__picture-hidden');
        toggle.classList.add('slider__toggle-after');
      }
    });
  }

  function tabletSlider() {
    pictureAfter.classList.remove('slider__picture-hidden');

    if (viewportWidth >= DESKTOP_WIDTH) {
      buttonBefore.addEventListener('click', function() {
        pictureAfter.classList.add('slider__picture-hidden');
        pictureBefore.style.width = '100%';
        exampleSlider.style.background = 'linear-gradient(to right, @gray-light 100%, @gray 100%)';
        example.style.background = 'linear-gradient(to right, @gray-light 100%, @gray 100%)';
      });
      buttonAfter.addEventListener('click', function() {
        pictureBefore.classList.add('slider__picture-hidden');
        pictureAfter.classList.remove('slider__picture-hidden');
        imageAfter.classList.add('slider__picture-display');
        pictureAfter.style.width = '100%';
        pictureAfter.style.position = 'static';
        exampleSlider.style.background = 'linear-gradient(to right, @gray-light 0%, @gray 0%)';
      });
    }
  }

  if (viewportWidth >= TABLET_WIDTH) {
    tabletSlider()
  }  else {
    mobileSlider()
  }
};

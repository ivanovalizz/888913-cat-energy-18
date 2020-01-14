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
};

function slider() {
  var pictureBefore = document.querySelector('.slider__picture_before');
  var pictureAfter = document.querySelector('.slider__picture_after');
  var toggle = document.querySelector('.slider__toggle');
  var buttonBefore = document.querySelector('.slider__state_before');
  var buttonAfter = document.querySelector('.slider__state_after');

  buttonAfter.addEventListener('click', function() {
    if (pictureBefore.classList.contains('slider__before-display')) {
      pictureBefore.classList.remove('slider__before-display');
      pictureBefore.classList.add('slider__before-hidden');
      pictureAfter.classList.remove('slider__after-hidden');
      pictureAfter.classList.add('slider__after-display');
    } else {
      if (pictureBefore.classList.contains('slider__before-hidden')) {
        pictureAfter.classList.remove('slider__after-hidden');
        pictureAfter.classList.add('slider__after-display');
      } else {
        pictureBefore.classList.remove('slider__before-hidden');
        pictureAfter.classList.remove('slider__after-hidden');
        pictureAfter.classList.add('slider__after-display');
      }
    }
  });

  buttonBefore.addEventListener('click', function() {
    if (pictureAfter.classList.contains('slider__after-display')) {
      pictureAfter.classList.remove('slider__after-display');
      pictureAfter.classList.add('slider__after-hidden');
      pictureBefore.classList.remove('slider__before-hidden');
      pictureBefore.classList.add('slider__before-display');
    } else {
      if (pictureAfter.classList.contains('slider__after-hidden')) {
        pictureBefore.classList.remove('slider__before-hidden');
        pictureBefore.classList.add('slider__before-display');
      } else {
        pictureAfter.classList.remove('slider__after-hidden');
        pictureBefore.classList.remove('slider__before-hidden');
        pictureBefore.classList.add('slider__before-display');
      }
    }
  });
}

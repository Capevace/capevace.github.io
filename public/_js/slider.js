module.exports = function (sliderId) {
  var slider = document.getElementById(sliderId);

  if (!slider) {
    window.console.warn('No slider with id "' + sliderId + '" found.');
    return;
  }

  // var slideContainer = slider.querySelector('.slider-slides');
  var slides = slider.querySelectorAll('.slider-slide');
  var currentSlide = 0;
  var slideCount = slides.length;
  var slideInterval = resetInterval();
  var nextButton = slider.querySelector('.slider-action-next');
  var prevButton = slider.querySelector('.slider-action-prev');

  if (slideCount === 1) {
    clearInterval(slideInterval);
    if (nextButton)
      nextButton.style.display = 'none';

    if (prevButton)
      prevButton.style.display = 'none';
  }

  for(var i = 0; i < slideCount; i++) {
    if (i === 0) {
      slides[i].style.opacity = 1;
      slides[i].style.zIndex = 1;
    }

    slides[i].style.marginLeft = '-' + (i * 50) + '%';
  }

  if (nextButton)
    nextButton
      .addEventListener('click', function (e) {
        e.preventDefault();

        updateSlide(currentSlide + 1);
        slideInterval = resetInterval();
      });

  if (prevButton)
    prevButton
      .addEventListener('click', function (e) {
        e.preventDefault();
        updateSlide(currentSlide - 1);
        slideInterval = resetInterval();
      });

  function resetInterval() {
    clearInterval(slideInterval);
    return setInterval(function () {
      updateSlide(currentSlide + 1);
    }, 5000);
  }

  function updateSlide(index) {
    var oldSlide = currentSlide;
    currentSlide = index;

    if (currentSlide >= slideCount) {
      currentSlide = 0;
    } else if (currentSlide < 0) {
      currentSlide = slideCount - 1;
    }

    // slideContainer.style.marginLeft = '-' + (currentSlide * 100) + '%';
    slides[currentSlide].style.opacity = 1;
    slides[currentSlide].style.zIndex = 1;
    slides[oldSlide].style.opacity = 0;
    slides[oldSlide].style.zIndex = 0;
  }
};

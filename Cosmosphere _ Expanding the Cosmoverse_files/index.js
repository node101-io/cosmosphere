window.addEventListener('load', () => {
  const locationSlider = document.querySelector('.page-three-location-slider-wrapper');
  locationSlider.scrollLeft = locationSlider.scrollWidth / 4;

  locationSlider.addEventListener('scroll', () => {
    const locationSliderImages = document.querySelectorAll('.page-thee-each-slider');

    for (let i = 0; i < locationSliderImages.length; i++) {
      const locationSliderImage = locationSliderImages[i];
      const locationSliderImageWidth = locationSliderImage.offsetWidth;
      const locationSliderImageLeft = locationSliderImage.offsetLeft;
      const locationSliderImageCenter = locationSliderImageLeft + locationSliderImageWidth / 2;
      const locationSliderCenter = locationSlider.scrollLeft + locationSlider.offsetWidth / 2;
      const locationSliderImageDistance = Math.abs(locationSliderImageCenter - locationSliderCenter);
      const locationSliderImageDistancePercent = locationSliderImageDistance / locationSlider.offsetWidth;
      const locationSliderImageOpacity = 1 - locationSliderImageDistancePercent;
      locationSliderImage.style.opacity = locationSliderImageOpacity;

      locationSliderImage.style.transform = `scale(${1 - locationSliderImageDistancePercent * 0.2})`;
    }
  });

  document.addEventListener('click', e => {
    if (e.target.closest('.page-thee-each-slider-arrow')) {
      if (e.target.closest('#location-slider-arrow-left')) {
        locationSlider.scrollTo({
          left: locationSlider.scrollLeft - locationSlider.offsetWidth / 2,
          behavior: 'smooth',
        });
      } else if (e.target.closest('#location-slider-arrow-right')) {
        locationSlider.scrollTo({
          left: locationSlider.scrollLeft + locationSlider.offsetWidth / 2,
          behavior: 'smooth',
        });
      };
    };
  });
});
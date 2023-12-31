window.addEventListener('load', () => {
  const headerMobileMenu = document.querySelector('.all-header-mobile-menu');

  document.addEventListener('click', e => {
    if (e.target.closest('.all-header-get-tickets-button')) {
      window.open('https://lu.ma/2gks8fp6', '_blank');
    };

    if (e.target.closest('#header-menu-button')) {
      headerMobileMenu.classList.toggle('display-none');
    };

    if (e.target.closest('#footer-speakers-button') || e.target.closest('#header-speakers-button') || e.target.closest('#header-speakers-button-mobile')) {
      document.querySelector('.page-three-speakers-wrapper').scrollIntoView({ behavior: 'smooth' });
    };

    if (e.target.closest('#footer-sponsors-button') || e.target.closest('#header-sponsors-button') || e.target.closest('#header-sponsors-button-mobile')) {
      document.querySelector('.page-three-sponsors-wrapper').scrollIntoView({ behavior: 'smooth' });
    };

    if (e.target.closest('#footer-schedule-button') || e.target.closest('#header-schedule-button') || e.target.closest('#header-schedule-button-mobile')) {
      document.querySelector('.page-three-schedule-wrapper').scrollIntoView({ behavior: 'smooth' });
    };
  });
});
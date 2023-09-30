window.addEventListener('load', () => {
  document.addEventListener('click', e => {
    if (e.target.closest('.all-header-get-tickets-button')) {
      window.open('https://lu.ma/2gks8fp6', '_blank');
    };
  });
});
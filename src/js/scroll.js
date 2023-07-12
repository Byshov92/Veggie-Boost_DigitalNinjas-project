(() => {
  const anchors = document.querySelectorAll('.anchor');

  anchors.forEach(anchor => {
    anchor.addEventListener('click', () => {
      let scrollDiv = document.getElementById(
        `${anchor.getAttribute('data-value')}`
      ).offsetTop;

      if (anchor.getAttribute('data-value') === 'vegetables') {
        window.scrollTo({ top: scrollDiv - 40, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: scrollDiv, behavior: 'smooth' });
      }
    });
  });
})();
document.getElementById('hamburger-icon').onclick = function () {
  var navigationBar = document.getElementById('navigation-bar');
  var currentWidth = navigationBar.style.width;
  var position = this.style.position;

  navigationBar.style.width = currentWidth == '100%' ? '0px' : '100%';
  this.style.position = position == 'fixed' ? 'absolute' : 'fixed';

  this.classList.toggle('change');
};

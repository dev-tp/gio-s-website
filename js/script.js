var elements = document.getElementsByClassName('animate-on-scroll');

for (var i = 0; i < elements.length; i++) {
  var boundingClientRect = elements[i].getBoundingClientRect();

  elements[i].active = false;

  elements[i].start = boundingClientRect.y;
  elements[i].end = boundingClientRect.height + elements[i].start;
}

document.body.onscroll = function () {
  var y = window.pageYOffset + window.innerHeight;

  for (var i = 0; i < elements.length; i++) {
    if (!elements[i].active) {
      if (elements[i].start <= y && y <= elements[i].end) {
        elements[i].active = true;
        console.log(elements[i]);
        break;
      }
    }
  }
};

document.getElementById('hamburger-icon').onclick = function () {
  var navigationBar = document.getElementById('navigation-bar');
  var currentWidth = navigationBar.style.width;
  var position = this.style.position;

  navigationBar.style.width = currentWidth == '100%' ? '0px' : '100%';
  this.style.position = position == 'fixed' ? 'absolute' : 'fixed';

  this.classList.toggle('change');
};

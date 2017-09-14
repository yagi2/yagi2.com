document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#F5A9F2',
    lineColor: '#F5A9F2',
    density: 13000,
    particleRadius: 8,
    parallax: false,
    proximity: 150
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 1.3 + 'px';
}, false);

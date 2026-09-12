(function () {
  'use strict';

  var root = document.querySelector('.hero');
  var viewer = document.getElementById('spline-scene');
  if (!root || !viewer) return;

  viewer.addEventListener('error', function () {
    root.classList.add('scene-error');
  }, { once: true });
})();

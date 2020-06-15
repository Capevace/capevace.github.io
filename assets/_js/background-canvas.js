module.exports = function backgroundCanvas(containerId) {
  console.log('works');
  var container = document.getElementById(containerId);

  if (!container)
    return;

  var canvas = container.querySelector('canvas.background-canvas');
  var context = canvas.getContext('2d');
  var dots = [];

  // Wanna use Array(100).fill() but dont think polyfill is worth it
  for (var i = 0; i < 100; i++) {
    dots.push({
      position: {
        x: Math.round(Math.random() * canvas.width),
        y: Math.round(Math.random() * canvas.height),
      },
      velocity: {
        x: Math.random() * (Math.random() < 0.5 ? 1 : -1),
        y: Math.random() * (Math.random() < 0.5 ? 1 : -1),
      },
      size: {
        width: 1,
        height: 1
      }
    });
  }

  function renderFrame() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Wanna use .map but dont think polyfill is worth it ;(
    for (var i = 0; i < dots.length; i++) {
      var dot = dots[i];
      context.fillStyle = 'white';
      context.fillRect(dot.position.x, dot.position.y, dot.size.width, dot.size.height);

      dot.position.x += dot.velocity.x;
      dot.position.y += dot.velocity.y;

      if (dot.position.x > canvas.width + dot.size.width) {
        dot.position.x = 0 - dot.size.width;
      } else if (dot.position.x < 0 - dot.size.width) {
        dot.position.x = canvas.width + dot.size.width;
      }

      if (dot.position.y > canvas.height + dot.size.height) {
        dot.position.y = 0 - dot.size.height;
      } else if (dot.position.y < 0 - dot.size.height) {
        dot.position.y = canvas.height + dot.size.height;
      }

      dots[i] = dot;
    }

    window.requestAnimationFrame(renderFrame);
  }

  renderFrame();
};

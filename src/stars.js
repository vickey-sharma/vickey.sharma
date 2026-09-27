// src/stars.js
(function () {
  const container = document.getElementById('stars');
  if (!container) return;

  const canvas = document.createElement('canvas');
  container.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  let width, height;
  let stars = [];

 
  const MAX_DEPTH = 1000;
//    const STAR_COUNT = 400;
//   const SPEED = 1.2;
//   const STAR_COLOR = '255, 255, 255';

  const STAR_COUNT = 400;
const SPEED = 1.2;
const STAR_COLOR = '255, 255, 255';

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  function createStar() {
    return {
      x: (Math.random() - 0.5) * width,
      y: (Math.random() - 0.5) * height,
      z: Math.random() * MAX_DEPTH
    };
  }

  function initStars() {
    stars = [];
    for (let i = 0; i < STAR_COUNT; i++) stars.push(createStar());
  }

//   function draw() {
//     ctx.fillStyle = 'rgba(10, 10, 10, 0.4)';
//     ctx.fillRect(0, 0, width, height);

//     const cx = width / 2;
//     const cy = height / 2;

//     for (let star of stars) {
//       const prevZ = star.z;
//       const prevX = cx + (star.x / prevZ) * MAX_DEPTH;
//       const prevY = cy + (star.y / prevZ) * MAX_DEPTH;

//       star.z -= SPEED * 4;

//       if (star.z <= 1) {
//         Object.assign(star, createStar());
//         star.z = MAX_DEPTH;
//         continue;
//       }

//       const sx = cx + (star.x / star.z) * MAX_DEPTH;
//       const sy = cy + (star.y / star.z) * MAX_DEPTH;
//       const size = (1 - star.z / MAX_DEPTH) * 2.5;
//       const alpha = 1 - star.z / MAX_DEPTH;

//       ctx.strokeStyle = `rgba(${STAR_COLOR}, ${alpha})`;
//       ctx.lineWidth = size;
//       ctx.beginPath();
//       ctx.moveTo(prevX, prevY);
//       ctx.lineTo(sx, sy);
//       ctx.stroke();
//     }

//     requestAnimationFrame(draw);
//   }

function draw() {
   ctx.fillStyle = 'rgba(18, 20, 23, 0.55)';   // matches your --bg (#121417) instead of the old mismatched 10,10,10
ctx.fillRect(0, 0, width, height);

    const cx = width / 2;
    const cy = height / 2;

    for (let star of stars) {
      star.z -= SPEED * 4;

      if (star.z <= 1) {
        Object.assign(star, createStar());
        star.z = MAX_DEPTH;
        continue;
      }

      const sx = cx + (star.x / star.z) * MAX_DEPTH;
      const sy = cy + (star.y / star.z) * MAX_DEPTH;
      const size = (1 - star.z / MAX_DEPTH) * 2.5;
      const alpha = 1 - star.z / MAX_DEPTH;

      ctx.fillStyle = `rgba(${STAR_COLOR}, ${alpha})`;
      ctx.beginPath();
      ctx.arc(sx, sy, size, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(draw);
  }




  window.addEventListener('resize', () => { resize(); initStars(); });

  resize();
  initStars();
  draw();
})();
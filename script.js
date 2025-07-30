// Spotlight effect
const spotlight = document.querySelector('.spotlight');

document.addEventListener('mousemove', (e) => {
  spotlight.style.left = `${e.clientX - 100}px`;
  spotlight.style.top = `${e.clientY - 100}px`;
});

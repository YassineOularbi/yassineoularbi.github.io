const cadre = document.querySelector('.cadre');
const hoverEffect = document.querySelector('.hover-effect');

cadre.addEventListener('mousemove', (event) => {
  const rect = cadre.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  hoverEffect.style.transform = `translate(${x - 50}px, ${y - 50}px)`;
});

cadre.addEventListener('mouseleave', () => {
  hoverEffect.style.transform = 'translate(-150%, -150%)';
});

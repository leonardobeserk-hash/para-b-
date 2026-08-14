const body = document.body;

for (let i = 0; i < 18; i += 1) {
  const heart = document.createElement('span');
  heart.textContent = '❤';
  heart.className = 'floating-heart';

  const left = Math.random() * 100;
  const delay = Math.random() * 4;
  const duration = 6 + Math.random() * 4;
  const size = 12 + Math.random() * 18;

  heart.style.left = `${left}%`;
  heart.style.animationDelay = `${delay}s`;
  heart.style.animationDuration = `${duration}s`;
  heart.style.fontSize = `${size}px`;
  heart.style.opacity = (0.2 + Math.random() * 0.7).toFixed(2);

  body.appendChild(heart);
}

const floatingHearts = document.querySelectorAll('.floating-heart');

floatingHearts.forEach((heart) => {
  heart.style.position = 'fixed';
  heart.style.bottom = '-20px';
  heart.style.left = heart.style.left || '50%';
  heart.style.zIndex = '0';
  heart.style.pointerEvents = 'none';
  heart.style.animation = 'floatUp 8s linear infinite';
});

const style = document.createElement('style');
style.textContent = `
  @keyframes floatUp {
    0% {
      transform: translateY(0) scale(0.9);
      opacity: 0;
    }
    15% {
      opacity: 1;
    }
    100% {
      transform: translateY(-115vh) scale(1.1);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

const layer = document.querySelector('.floating-layer');

function createFloatItem() {
  const item = document.createElement('div');
  const isHeart = Math.random() > 0.3;
  const symbols = ['❤', '💗', '💖', '💞', '✨', '🌷'];

  item.className = isHeart ? 'heart-float' : 'sparkle-float';
  item.textContent = symbols[Math.floor(Math.random() * symbols.length)];

  const startX = Math.random() * window.innerWidth;
  const drift = (Math.random() - 0.5) * 220;
  const duration = 8 + Math.random() * 8;
  const delay = Math.random() * 2;

  item.style.left = `${startX}px`;
  item.style.setProperty('--drift-x', `${drift}px`);
  item.style.setProperty('--rot', `${(Math.random() - 0.5) * 180}deg`);
  item.style.animationDuration = `${duration}s`;
  item.style.animationDelay = `${delay}s`;

  layer.appendChild(item);

  setTimeout(() => {
    item.remove();
  }, (duration + delay) * 1000);
}

for (let i = 0; i < 26; i++) {
  setTimeout(createFloatItem, i * 180);
}

setInterval(() => {
  createFloatItem();
}, 900);

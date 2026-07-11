(function() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const avatar = document.querySelector('.fire-avatar');
  if (!avatar) return;

  const container = document.createElement('span');
  container.className = 'sparks';

  const count = 28;

  for (let i = 0; i < count; i++) {
    const spark = document.createElement('span');
    spark.className = 'spark';

    const top = 1 + Math.random() * 10;
    const left = 35 + Math.random() * 30;
    const drift = (Math.random() - 0.5) * 50;
    const duration = 1.2 + Math.random() * 1.3;
    const delay = Math.random() * 2;
    const size = 2 + Math.random() * 3;

    spark.style.top = top + '%';
    spark.style.left = left + '%';
    spark.style.setProperty('--drift', drift + 'px');
    spark.style.animationDuration = duration + 's';
    spark.style.animationDelay = delay + 's';
    spark.style.width = size + 'px';
    spark.style.height = size + 'px';

    container.appendChild(spark);
  }

  avatar.appendChild(container);
})();

export function initCarousel(): void {
  const slides = document.querySelectorAll('.review-slide');
  const dots = document.querySelectorAll('.carousel-dot');
  if (!slides.length) return;

  let cur = 0;
  let timer: ReturnType<typeof setInterval>;

  function show(n: number): void {
    slides[cur].classList.remove('active');
    dots[cur]?.classList.remove('active');
    cur = (n + slides.length) % slides.length;
    slides[cur].classList.add('active');
    dots[cur]?.classList.add('active');
  }

  function start(): void {
    timer = setInterval(() => show(cur + 1), 5000);
  }

  function reset(): void {
    clearInterval(timer);
    start();
  }

  document.getElementById('nextBtn')?.addEventListener('click', () => { show(cur + 1); reset(); });
  document.getElementById('prevBtn')?.addEventListener('click', () => { show(cur - 1); reset(); });
  dots.forEach((d) =>
    d.addEventListener('click', () => {
      show(+(d as HTMLElement).dataset.idx!);
      reset();
    })
  );

  start();
}

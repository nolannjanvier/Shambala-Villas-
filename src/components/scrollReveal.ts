export function initScrollReveal(threshold = 0.1): void {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    },
    { threshold }
  );
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

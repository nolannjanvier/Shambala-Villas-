export function initLightbox(images: string[]): void {
  let current = 0;

  function updateLightbox(): void {
    const img = document.getElementById('lb-img') as HTMLImageElement | null;
    const count = document.getElementById('lb-count');
    if (img) img.src = images[current];
    if (count) count.textContent = `${current + 1} / ${images.length}`;
  }

  function openLightbox(i: number): void {
    current = i;
    updateLightbox();
    document.getElementById('lightbox')?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox(): void {
    document.getElementById('lightbox')?.classList.remove('active');
    document.body.style.overflow = '';
  }

  function shiftLightbox(dir: number): void {
    current = (current + dir + images.length) % images.length;
    updateLightbox();
  }

  // Expose to window for inline onclick handlers
  (window as any).openLightbox = openLightbox;
  (window as any).closeLightbox = closeLightbox;
  (window as any).shiftLightbox = shiftLightbox;

  document.getElementById('lightbox')?.addEventListener('click', function (e) {
    if (e.target === this) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!document.getElementById('lightbox')?.classList.contains('active')) return;
    if (e.key === 'ArrowRight') shiftLightbox(1);
    if (e.key === 'ArrowLeft') shiftLightbox(-1);
    if (e.key === 'Escape') closeLightbox();
  });
}

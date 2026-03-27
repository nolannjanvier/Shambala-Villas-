export function initAccordion(): void {
  document.querySelectorAll('.accordion-trigger').forEach((btn) => {
    btn.addEventListener('click', function (this: HTMLElement) {
      const body = this.nextElementSibling as HTMLElement | null;
      if (!body) return;
      const isOpen = body.classList.contains('open');

      document.querySelectorAll('.accordion-body').forEach((b) => b.classList.remove('open'));
      document.querySelectorAll('.accordion-trigger').forEach((t) => t.classList.remove('active'));

      if (!isOpen) {
        body.classList.add('open');
        this.classList.add('active');
      }
    });
  });
}

export function initForm(formId: string, successId: string): void {
  const form = document.getElementById(formId) as HTMLFormElement | null;
  if (!form) return;

  form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    form.style.display = 'none';
    const success = document.getElementById(successId);
    if (success) success.style.display = 'block';
  });
}

// Expose generic handler for inline onsubmit attributes
(window as any).submitForm = function (e: Event) {
  e.preventDefault();
  const form = document.getElementById('enquiryForm') as HTMLElement | null;
  const success = document.getElementById('form-success');
  if (form) form.style.display = 'none';
  if (success) success.style.display = 'block';
};

(window as any).submitVillaForm = function (e: Event, formId: string, successId: string) {
  e.preventDefault();
  const form = document.getElementById(formId);
  const success = document.getElementById(successId);
  if (form) form.style.display = 'none';
  if (success) success.style.display = 'block';
};

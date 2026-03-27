interface CalendarConfig {
  containerId: string;
  prevBtnId: string;
  nextBtnId: string;
  villaKey: string;
}

export function initCalendar(config: CalendarConfig): void {
  let offsetMonths = 0;
  let occupiedDates: Record<string, string> = {};

  fetch('/data/availability.json')
    .then((r) => r.json())
    .then((data: Record<string, Record<string, string>>) => {
      occupiedDates = data[config.villaKey] || {};
      renderCalendars();
    })
    .catch(() => renderCalendars());

  function renderCalendars(): void {
    const wrap = document.getElementById(config.containerId);
    if (!wrap) return;
    wrap.innerHTML = '';
    const today = new Date();
    for (let i = 0; i < 3; i++) {
      const d = new Date(today.getFullYear(), today.getMonth() + offsetMonths + i, 1);
      wrap.appendChild(buildMonth(d, today));
    }
  }

  function buildMonth(date: Date, today: Date): HTMLElement {
    const year = date.getFullYear();
    const month = date.getMonth();
    const wrap = document.createElement('div');
    wrap.className = 'cal-wrap';
    const title = new Date(year, month, 1).toLocaleString('default', { month: 'long', year: 'numeric' });
    wrap.innerHTML = `<div class="cal-header"><span class="cal-title">${title}</span></div>`;
    const grid = document.createElement('div');
    grid.className = 'cal-grid';
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    days.forEach((d) => {
      const h = document.createElement('div');
      h.className = 'cal-day-header';
      h.textContent = d;
      grid.appendChild(h);
    });
    const firstDay = new Date(year, month, 1).getDay();
    const startOffset = firstDay === 0 ? 6 : firstDay - 1;
    for (let e = 0; e < startOffset; e++) {
      const empty = document.createElement('div');
      empty.className = 'cal-cell empty';
      grid.appendChild(empty);
    }
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    for (let day = 1; day <= daysInMonth; day++) {
      const cell = document.createElement('div');
      cell.className = 'cal-cell';
      const key = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      if (occupiedDates[key] === 'occupied') cell.classList.add('occupied');
      if (today.getFullYear() === year && today.getMonth() === month && today.getDate() === day) {
        cell.classList.add('today');
      }
      cell.textContent = String(day);
      grid.appendChild(cell);
    }
    wrap.appendChild(grid);
    return wrap;
  }

  document.getElementById(config.prevBtnId)?.addEventListener('click', () => { offsetMonths--; renderCalendars(); });
  document.getElementById(config.nextBtnId)?.addEventListener('click', () => { offsetMonths++; renderCalendars(); });
}

export function initBookingCalendars(): void {
  fetch('/data/availability.json')
    .then((r) => r.json())
    .then((data: Record<string, Record<string, string>>) => {
      buildBookingCal('bk-lem-cal-wrap', 'bk-lem-prev', 'bk-lem-next', data.lembongan || {});
      buildBookingCal('bk-sem-cal-wrap', 'bk-sem-prev', 'bk-sem-next', data.seminyak || {});
    })
    .catch(() => {
      buildBookingCal('bk-lem-cal-wrap', 'bk-lem-prev', 'bk-lem-next', {});
      buildBookingCal('bk-sem-cal-wrap', 'bk-sem-prev', 'bk-sem-next', {});
    });
}

function buildBookingCal(containerId: string, prevId: string, nextId: string, availData: Record<string, string>): void {
  let offsetMonths = 0;

  function renderCalendars(): void {
    const wrap = document.getElementById(containerId);
    if (!wrap) return;
    wrap.innerHTML = '';
    const today = new Date();
    for (let i = 0; i < 3; i++) {
      const d = new Date(today.getFullYear(), today.getMonth() + offsetMonths + i, 1);
      wrap.appendChild(buildMonth(d, today));
    }
  }

  function buildMonth(date: Date, today: Date): HTMLElement {
    const year = date.getFullYear();
    const month = date.getMonth();
    const wrap = document.createElement('div');
    wrap.className = 'cal-wrap';
    const title = new Date(year, month, 1).toLocaleString('default', { month: 'long', year: 'numeric' });
    wrap.innerHTML = `<div class="cal-header"><span class="cal-title">${title}</span></div>`;
    const grid = document.createElement('div');
    grid.className = 'cal-grid';
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    days.forEach((d) => {
      const h = document.createElement('div');
      h.className = 'cal-day-header';
      h.textContent = d;
      grid.appendChild(h);
    });
    const firstDay = new Date(year, month, 1).getDay();
    const startOffset = firstDay === 0 ? 6 : firstDay - 1;
    for (let e = 0; e < startOffset; e++) {
      const empty = document.createElement('div');
      empty.className = 'cal-cell empty';
      grid.appendChild(empty);
    }
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    for (let day = 1; day <= daysInMonth; day++) {
      const cell = document.createElement('div');
      cell.className = 'cal-cell';
      const key = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      if (availData[key] === 'occupied') cell.classList.add('occupied');
      if (today.getFullYear() === year && today.getMonth() === month && today.getDate() === day) {
        cell.classList.add('today');
      }
      cell.textContent = String(day);
      grid.appendChild(cell);
    }
    wrap.appendChild(grid);
    return wrap;
  }

  document.getElementById(prevId)?.addEventListener('click', () => { offsetMonths--; renderCalendars(); });
  document.getElementById(nextId)?.addEventListener('click', () => { offsetMonths++; renderCalendars(); });
  renderCalendars();
}

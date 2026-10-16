(() => {
  const button = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#main-nav');
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
  button?.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Stäng menyn' : 'Öppna menyn');
    nav?.classList.toggle('is-open', open);
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    button?.setAttribute('aria-expanded', 'false');
    button?.setAttribute('aria-label', 'Öppna menyn');
  }));
})();

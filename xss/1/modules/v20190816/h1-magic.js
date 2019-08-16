[...document.querySelectorAll('h1')].forEach(el => {
  el.setAttribute('style', 'color: red');
  el.textContent = el.textContent.toUpperCase();
})
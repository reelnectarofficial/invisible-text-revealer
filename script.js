document.getElementById('toggle-theme').onclick = () => {
  document.body.classList.toggle('dark');
};

function revealText() {
  const html = document.getElementById('htmlInput').value;
  const output = document.getElementById('output');
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const hiddenElements = [...doc.querySelectorAll('[style*="display:none"], [style*="opacity:0"], [hidden]')];
  output.innerHTML = '<h3>Revealed Text:</h3>';
  hiddenElements.forEach(el => {
    output.innerHTML += `<p>${el.textContent.trim()}</p>`;
  });
}

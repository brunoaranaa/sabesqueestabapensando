// ============================================================
// app.js — lógica del sitio
// No necesitas tocar este archivo para publicar textos nuevos.
// Solo se edita si quieres cambiar comportamiento del sitio.
// ============================================================

const coloresHex = {
  sangre: '#d8463a',
  cielo: '#9fb1c8',
  humo: '#c8b48f',
  insomnio: '#8b7fae'
};

function renderConteos() {
  Object.keys(constelaciones).forEach(key => {
    const n = textos.filter(t => t.constelacion === key).length;
    const el = document.querySelector(`[data-count="${key}"]`);
    if (el) el.textContent = `${n} ${n === 1 ? 'texto' : 'textos'}`;
  });
}

function renderGrafo() {
  const auras = document.getElementById('auras');
  const nodos = document.getElementById('nodos');
  const labels = document.getElementById('labels');
  const conexiones = document.getElementById('conexiones');
  const constNames = document.getElementById('const-names');

  const centros = {
    sangre:   { x: 220, y: 240, radio: 110 },
    cielo:    { x: 780, y: 200, radio: 180 },
    humo:     { x: 480, y: 480, radio: 90 },
    insomnio: { x: 950, y: 550, radio: 90 }
  };

  Object.keys(constelaciones).forEach(key => {
    const c = centros[key];
    const aura = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    aura.setAttribute('cx', c.x);
    aura.setAttribute('cy', c.y);
    aura.setAttribute('r', c.radio + 40);
    aura.setAttribute('fill', coloresHex[key]);
    aura.setAttribute('class', 'const-aura');
    auras.appendChild(aura);
  });

  const posiciones = {};
  Object.keys(constelaciones).forEach(key => {
    const textosConst = textos.filter(t => t.constelacion === key);
    const centro = centros[key];
    textosConst.forEach((t, i) => {
      const angulo = (i / textosConst.length) * Math.PI * 2 +
                     (key === 'cielo' ? 0.4 : key === 'humo' ? 1.1 : key === 'insomnio' ? 0.2 : 0.7);
      const radioVariable = centro.radio * (0.7 + (i % 3) * 0.15);
      const x = centro.x + Math.cos(angulo) * radioVariable;
      const y = centro.y + Math.sin(angulo) * radioVariable * 0.85;
      posiciones[t.id] = { x, y };
    });
  });

  Object.keys(constelaciones).forEach(key => {
    const textosConst = textos.filter(t => t.constelacion === key);
    textosConst.forEach((t, i) => {
      textosConst.forEach((t2, j) => {
        if (i < j) {
          const p1 = posiciones[t.id];
          const p2 = posiciones[t2.id];
          const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
          line.setAttribute('x1', p1.x);
          line.setAttribute('y1', p1.y);
          line.setAttribute('x2', p2.x);
          line.setAttribute('y2', p2.y);
          line.setAttribute('class', 'conexion');
          line.setAttribute('stroke', coloresHex[key]);
          line.setAttribute('stroke-opacity', '0.18');
          conexiones.appendChild(line);
        }
      });
    });
  });

  textos.forEach(t => {
    const p = posiciones[t.id];

    const halo = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    halo.setAttribute('cx', p.x);
    halo.setAttribute('cy', p.y);
    halo.setAttribute('r', 14);
    halo.setAttribute('fill', coloresHex[t.constelacion]);
    halo.setAttribute('opacity', '0.12');
    halo.style.pointerEvents = 'none';
    nodos.appendChild(halo);

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', p.x);
    circle.setAttribute('cy', p.y);
    circle.setAttribute('r', 6);
    circle.setAttribute('fill', coloresHex[t.constelacion]);
    circle.setAttribute('class', 'nodo');
    circle.setAttribute('data-id', t.id);
    circle.addEventListener('click', () => abrirTexto(t.id));
    nodos.appendChild(circle);

    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    const centro = centros[t.constelacion];
    const aLaDerecha = p.x >= centro.x;
    text.setAttribute('x', p.x + (aLaDerecha ? 14 : -14));
    text.setAttribute('y', p.y + 4);
    text.setAttribute('text-anchor', aLaDerecha ? 'start' : 'end');
    text.setAttribute('class', 'nodo-label faint');
    text.setAttribute('fill', '#cfc8b9');
    text.textContent = t.titulo;
    labels.appendChild(text);
  });

  Object.keys(constelaciones).forEach(key => {
    const c = centros[key];
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', c.x);
    text.setAttribute('y', c.y - c.radio - 30);
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('class', 'const-name');
    text.setAttribute('fill', coloresHex[key]);
    text.setAttribute('opacity', '0.85');
    text.textContent = constelaciones[key].nombre;
    constNames.appendChild(text);
  });
}

function mostrarVista(viewId) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(viewId).classList.add('active');
  window.scrollTo(0, 0);
  document.querySelectorAll('nav.main-nav a').forEach(a => a.classList.remove('active'));
  if (viewId === 'view-home') {
    document.querySelector('nav.main-nav a[data-view="home"]').classList.add('active');
  }
  if (viewId === 'view-about') {
    document.querySelector('nav.main-nav a[data-view="about"]').classList.add('active');
  }
}

function abrirConstelacion(key) {
  const c = constelaciones[key];
  document.getElementById('const-title').textContent = c.nombre;
  document.getElementById('const-desc').textContent = c.descripcion;
  document.getElementById('view-constelacion').setAttribute('data-current', key);

  const lista = document.getElementById('textos-list');
  lista.innerHTML = '';
  const textosConst = textos.filter(t => t.constelacion === key);
  textosConst.forEach(t => {
    const card = document.createElement('a');
    card.className = 'texto-card';
    card.innerHTML = `
      <div class="meta">${formatFecha(t.fecha)}</div>
      <h3>${t.titulo}</h3>
      <div class="preview">${t.preview}</div>
    `;
    card.addEventListener('click', () => abrirTexto(t.id));
    lista.appendChild(card);
  });

  mostrarVista('view-constelacion');

  document.querySelectorAll('nav.main-nav a').forEach(a => {
    a.classList.toggle('active', a.dataset.const === key);
  });
}

function abrirTexto(id) {
  const t = textos.find(x => x.id === id);
  if (!t) return;

  document.getElementById('texto-const-tag').textContent = constelaciones[t.constelacion].nombre;
  document.getElementById('texto-title').textContent = t.titulo;
  document.getElementById('texto-fecha').textContent = formatFecha(t.fecha);
  document.getElementById('view-texto').setAttribute('data-current', t.constelacion);

  const body = document.getElementById('texto-body');
  body.innerHTML = '';

  const bloques = t.contenido.trim().split(/\n\s*\n/);
  bloques.forEach((bloque, bloqueIdx) => {
    if (bloqueIdx > 0) {
      const sep = document.createElement('div');
      sep.className = 'ornament';
      sep.textContent = '· · ·';
      body.appendChild(sep);
    }
    const parrafos = bloque.split('\n').filter(p => p.trim());
    parrafos.forEach((p, i) => {
      const el = document.createElement('p');
      el.textContent = p.trim();
      if (i === 0) el.classList.add('first-para');
      body.appendChild(el);
    });
  });

  const back = document.getElementById('texto-back-link');
  back.textContent = `← ${constelaciones[t.constelacion].nombre}`;
  back.onclick = () => abrirConstelacion(t.constelacion);

  mostrarVista('view-texto');
}

function formatFecha(iso) {
  const meses = ['enero','febrero','marzo','abril','mayo','junio',
                 'julio','agosto','septiembre','octubre','noviembre','diciembre'];
  const [y, m, d] = iso.split('-');
  return `${parseInt(d)} de ${meses[parseInt(m)-1]} de ${y}`;
}

document.querySelectorAll('[data-view="home"]').forEach(el => {
  el.addEventListener('click', () => mostrarVista('view-home'));
});
document.querySelectorAll('[data-view="about"]').forEach(el => {
  el.addEventListener('click', () => mostrarVista('view-about'));
});
document.querySelectorAll('[data-const]').forEach(el => {
  el.addEventListener('click', () => abrirConstelacion(el.dataset.const));
});

renderConteos();
renderGrafo();

(() => {
  "use strict";

  const book = window.BOOK_01;
  const app = document.getElementById("app");
  const state = {
    hero: null,
    item: null,
    flags: {},
    scene: null,
    history: [],
    lastItem: null
  };

  const escapeHtml = (value = "") => String(value).replace(/[&<>"']/g, c => ({
    "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"
  })[c]);

  function reset() {
    state.hero = null;
    state.item = null;
    state.flags = {};
    state.scene = null;
    state.history = [];
    state.lastItem = null;
  }

  function renderHome() {
    reset();
    app.innerHTML = `
      <section class="home card">
        <div class="book-badge">Livre 1 sur 5</div>
        <div class="kicker">Doctor Who · Ma Première Aventure</div>
        <h1 class="logo">${escapeHtml(book.title)}</h1>
        <p class="subtitle">${escapeHtml(book.subtitle)}</p>
        <button class="primary" id="start">Commencer l'aventure</button>
        <div class="collection" aria-label="Collection">
          <div class="book-dot active">1<br>Disparu</div>
          <div class="book-dot">2<br>Musée</div>
          <div class="book-dot">3<br>Dinosaure</div>
          <div class="book-dot">4<br>TARDIS</div>
          <div class="book-dot">5<br>Dalek</div>
        </div>
      </section>`;
    document.getElementById("start").onclick = renderHeroSelect;
  }

  function renderHeroSelect() {
    app.innerHTML = `
      <section class="select-screen card">
        <div class="kicker">Étape 1</div>
        <h1>Qui vas-tu accompagner ?</h1>
        <p class="subtitle" style="margin-left:0">Chaque héroïne commence avec un objet différent. Certains chemins seront plus faciles avec le bon objet.</p>
        <div class="select-grid">
          ${Object.entries(book.heroes).map(([id,h]) => `
            <button class="hero-select" data-hero="${id}">
              <div class="hero-avatar">${h.icon}</div>
              <h3>${escapeHtml(h.name)}</h3>
              <p>${escapeHtml(h.trait)}</p>
              <p><strong>${h.item.icon} ${escapeHtml(h.item.name)}</strong></p>
            </button>`).join("")}
        </div>
        <div class="footer-actions">
          <button class="secondary" id="back-home">← Retour</button>
        </div>
      </section>`;
    document.querySelectorAll("[data-hero]").forEach(btn => {
      btn.onclick = () => startWithHero(btn.dataset.hero);
    });
    document.getElementById("back-home").onclick = renderHome;
  }

  function startWithHero(id) {
    const hero = book.heroes[id];
    state.hero = id;
    state.item = hero.item.id;
    state.lastItem = null;
    state.flags = { courage:0, clues:0, mercy:0 };
    state.scene = book.start;
    state.history = [];
    renderScene(true);
  }

  function getItem(id) {
    if (!id) return {name:"Rien",icon:"○"};
    return book.items[id] || {name:id,icon:"?"};
  }

  function wheel(kind) {
    const hero = book.heroes[state.hero];
    const isHero = kind === "hero";
    const item = getItem(state.item);
    return `
      <aside class="wheel-wrap ${isHero ? "left":"right"}">
        <div class="wheel-label">${isHero ? "Personnage":"Objet"}</div>
        <div class="wheel ${!isHero && state.lastItem !== state.item ? "changed":""}">
          <div class="wheel-core">
            <span><span class="wheel-icon">${isHero ? hero.icon:item.icon}</span>${escapeHtml(isHero ? hero.short:item.name)}</span>
          </div>
        </div>
      </aside>`;
  }

  function applyEffects(scene) {
    state.lastItem = state.item;
    if (scene.giveItem) state.item = scene.giveItem;
    if (scene.removeItem) state.item = null;
    if (scene.flags) Object.entries(scene.flags).forEach(([k,v]) => {
      state.flags[k] = typeof v === "number" ? (state.flags[k] || 0) + v : v;
    });
  }

  function choiceAllowed(choice) {
    if (choice.requiresItem && state.item !== choice.requiresItem) return false;
    if (choice.requiresHero && state.hero !== choice.requiresHero) return false;
    if (choice.requiresFlag && !state.flags[choice.requiresFlag]) return false;
    return true;
  }

  function go(choice) {
    if (!choiceAllowed(choice)) return;
    if (choice.setItem !== undefined) {
      state.lastItem = state.item;
      state.item = choice.setItem;
    }
    if (choice.flags) Object.entries(choice.flags).forEach(([k,v]) => {
      state.flags[k] = typeof v === "number" ? (state.flags[k] || 0) + v : v;
    });
    state.history.push(state.scene);
    state.scene = typeof choice.next === "function" ? choice.next(state) : choice.next;
    renderScene();
  }

  function renderScene(first = false) {
    const scene = book.scenes[state.scene];
    if (!scene) {
      app.innerHTML = '<section class="home card"><h1>Scène introuvable</h1><button class="primary" id="home">Accueil</button></section>';
      document.getElementById("home").onclick = renderHome;
      return;
    }
    applyEffects(scene);
    if (scene.end) return renderEnd(scene);

    const eventText = scene.event ? `<div class="event">${escapeHtml(scene.event)}</div>` : "";
    app.innerHTML = `
      <section class="game">
        ${wheel("hero")}
        <article class="story card">
          <div class="scene-art" data-tone="${scene.tone || "blue"}">
            <span class="art-glyph" aria-hidden="true">${scene.glyph || "✦"}</span>
            <div><div class="chapter">${escapeHtml(scene.chapter || "Aventure")}</div><h2>${escapeHtml(scene.title)}</h2></div>
          </div>
          <div class="story-body">
            <p class="story-text">${escapeHtml(typeof scene.text === "function" ? scene.text(state) : scene.text)}</p>
            ${eventText}
            <div class="choices">
              ${scene.choices.map((c,i) => {
                const ok = choiceAllowed(c);
                const lockReason = c.requiresItem && !ok ? `Il faut : ${getItem(c.requiresItem).name}` :
                                   c.requiresHero && !ok ? "Ce choix appartient à un autre personnage" : "";
                return `<button class="choice ${ok ? "":"locked"}" data-choice="${i}" ${ok ? "":"disabled"}>
                  <span class="ci">${c.icon || ["🔷","🟨","🔺"][i] || "➜"}</span>
                  ${escapeHtml(c.label)}
                  <small>${escapeHtml(ok ? (c.hint || "") : lockReason)}</small>
                </button>`;
              }).join("")}
            </div>
            <div class="footer-actions">
              <button class="secondary" id="restart">↻ Recommencer</button>
              <button class="secondary" id="home">⌂ Accueil</button>
            </div>
          </div>
        </article>
        ${wheel("item")}
      </section>`;

    document.querySelectorAll("[data-choice]").forEach(btn => {
      btn.onclick = () => go(scene.choices[Number(btn.dataset.choice)]);
    });
    document.getElementById("restart").onclick = renderHeroSelect;
    document.getElementById("home").onclick = renderHome;
  }

  function renderEnd(scene) {
    const hero = book.heroes[state.hero];
    app.innerHTML = `
      <section class="game">
        ${wheel("hero")}
        <article class="story card end-card">
          <div class="scene-art" data-tone="${scene.tone || "success"}">
            <span class="art-glyph" aria-hidden="true">${scene.glyph || "✨"}</span>
            <div>
              <div class="end-rank">${escapeHtml(scene.endLabel || "Fin")}</div>
              <h2>${escapeHtml(scene.title)}</h2>
            </div>
          </div>
          <div class="story-body">
            <p class="story-text">${escapeHtml(typeof scene.text === "function" ? scene.text(state) : scene.text)}</p>
            <div class="event">Tu as terminé l'aventure avec <strong>${escapeHtml(hero.name)}</strong> et <strong>${escapeHtml(getItem(state.item).name)}</strong>.</div>
            <div class="choices" style="grid-template-columns:1fr 1fr">
              <button class="primary" id="again">Rejouer avec un autre personnage</button>
              <button class="secondary" id="home">Retour à la collection</button>
            </div>
          </div>
        </article>
        ${wheel("item")}
      </section>`;
    document.getElementById("again").onclick = renderHeroSelect;
    document.getElementById("home").onclick = renderHome;
  }

  renderHome();
})();

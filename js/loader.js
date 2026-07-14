/**
 * イントロ：ローディング → 炭酸リキッド上昇 → メイン表示
 * index.html 専用
 */
(function () {
  const MIN_MS = 1600;
  const POUR_MS = 2100;
  const CLEAR_MS = 1000;

  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function makeBubbles(container, count, className) {
    for (let i = 0; i < count; i++) {
      const b = document.createElement("span");
      b.className = className;
      const size = 4 + Math.random() * (className.includes("tiny") ? 8 : 18);
      b.style.setProperty("--x", `${Math.random() * 100}%`);
      b.style.setProperty("--size", `${size}px`);
      b.style.setProperty("--delay", `${Math.random() * 2.8}s`);
      b.style.setProperty("--dur", `${1.8 + Math.random() * 3.2}s`);
      b.style.setProperty("--drift", `${-30 + Math.random() * 60}px`);
      b.style.setProperty("--opacity", `${0.35 + Math.random() * 0.5}`);
      container.appendChild(b);
    }
  }

  function createIntro() {
    const el = document.createElement("div");
    el.className = "intro";
    el.id = "intro";
    el.setAttribute("aria-busy", "true");
    el.setAttribute("aria-live", "polite");
    el.innerHTML = `
      <div class="intro__loader">
        <div class="intro__rings" aria-hidden="true">
          <span></span><span></span><span></span>
        </div>
        <img class="intro__logo" src="assets/brand/logo.webp" alt="NAZONE" width="180" height="38">
        <p class="intro__label" id="introLabel">Loading</p>
        <div class="intro__bar" aria-hidden="true"><span class="intro__bar-fill" id="introBar"></span></div>
        <p class="intro__percent" id="introPercent">0%</p>
        <p class="intro__hint">謎が、はじまる。</p>
        <div class="intro__sparks" id="introSparks" aria-hidden="true"></div>
      </div>
      <div class="intro__soda" aria-hidden="true">
        <div class="intro__fill" id="introFill">
          <svg class="intro__surface" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="sodaFoam" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="rgba(255,255,255,0.95)"/>
                <stop offset="55%" stop-color="rgba(210,255,230,0.55)"/>
                <stop offset="100%" stop-color="rgba(126,217,168,0)"/>
              </linearGradient>
            </defs>
            <path class="intro__surface-path intro__surface-path--back" d="M0,60 C150,20 300,100 450,60 C600,20 750,100 900,55 C1050,15 1150,80 1200,50 L1200,120 L0,120 Z"></path>
            <path class="intro__surface-path intro__surface-path--mid" d="M0,70 C180,35 320,105 480,65 C640,25 780,95 940,60 C1080,30 1160,85 1200,55 L1200,120 L0,120 Z"></path>
            <path class="intro__surface-path intro__surface-path--front" d="M0,78 C160,45 340,110 500,70 C660,35 820,100 980,68 C1100,45 1160,90 1200,62 L1200,120 L0,120 Z"></path>
          </svg>
          <div class="intro__body">
            <div class="intro__shine"></div>
            <div class="intro__caustic"></div>
            <div class="intro__depth"></div>
            <div class="intro__bubbles-deep" id="bubblesDeep"></div>
            <div class="intro__bubbles-mid" id="bubblesMid"></div>
          </div>
          <div class="intro__foam-line" id="foamLine"></div>
        </div>
        <div class="intro__spray" id="introSpray"></div>
        <div class="intro__burst" id="introBurst" aria-hidden="true"></div>
      </div>
    `;
    document.body.prepend(el);

    const sparks = el.querySelector("#introSparks");
    for (let i = 0; i < 14; i++) {
      const s = document.createElement("span");
      s.className = "intro__spark";
      s.style.setProperty("--x", `${10 + Math.random() * 80}%`);
      s.style.setProperty("--y", `${10 + Math.random() * 70}%`);
      s.style.setProperty("--delay", `${Math.random() * 2}s`);
      s.style.setProperty("--dur", `${1.2 + Math.random() * 1.8}s`);
      sparks.appendChild(s);
    }

    const burst = el.querySelector("#introBurst");
    for (let i = 0; i < 24; i++) {
      const p = document.createElement("span");
      p.className = "intro__particle";
      const angle = (i / 24) * Math.PI * 2;
      p.style.setProperty("--dx", `${Math.cos(angle) * (80 + Math.random() * 140)}px`);
      p.style.setProperty("--dy", `${Math.sin(angle) * (60 + Math.random() * 120) - 40}px`);
      p.style.setProperty("--delay", `${Math.random() * 0.25}s`);
      burst.appendChild(p);
    }

    makeBubbles(el.querySelector("#bubblesDeep"), 22, "intro__bubble intro__bubble--deep");
    makeBubbles(el.querySelector("#bubblesMid"), 26, "intro__bubble intro__bubble--mid");
    makeBubbles(el.querySelector("#introSpray"), 18, "intro__bubble intro__bubble--spray");

    const foam = el.querySelector("#foamLine");
    for (let i = 0; i < 36; i++) {
      const f = document.createElement("span");
      f.className = "intro__foam-dot";
      f.style.setProperty("--x", `${(i / 35) * 100 + (Math.random() * 3 - 1.5)}%`);
      f.style.setProperty("--size", `${8 + Math.random() * 22}px`);
      f.style.setProperty("--y", `${-6 + Math.random() * 18}px`);
      f.style.setProperty("--delay", `${Math.random() * 1.2}s`);
      foam.appendChild(f);
    }

    return el;
  }

  function setProgress(n) {
    const bar = document.getElementById("introBar");
    const pct = document.getElementById("introPercent");
    const label = document.getElementById("introLabel");
    const v = Math.max(0, Math.min(100, Math.round(n)));
    if (bar) bar.style.width = `${v}%`;
    if (pct) pct.textContent = `${v}%`;
    if (label) {
      if (v < 35) label.textContent = "Loading";
      else if (v < 70) label.textContent = "Preparing";
      else if (v < 95) label.textContent = "Almost";
      else label.textContent = "Ready!";
    }
  }

  function finishIntro(intro) {
    intro.classList.add("is-pouring");
    intro.setAttribute("aria-busy", "false");
    window.setTimeout(() => intro.classList.add("is-burst"), 150);

    window.setTimeout(() => {
      document.body.classList.remove("is-intro");
      document.body.classList.add("is-ready");
      intro.classList.add("is-clearing");

      window.setTimeout(() => {
        intro.remove();
        document.dispatchEvent(new CustomEvent("nazone:ready"));
      }, CLEAR_MS);
    }, POUR_MS);
  }

  function run() {
    if (prefersReducedMotion()) {
      document.body.classList.remove("is-intro");
      document.body.classList.add("is-ready");
      document.dispatchEvent(new CustomEvent("nazone:ready"));
      return;
    }

    const force = /(?:\?|&)intro=1(?:&|$)/.test(location.search);
    try {
      if (!force && sessionStorage.getItem("nazone-intro-done") === "1") {
        document.body.classList.remove("is-intro");
        document.body.classList.add("is-ready");
        document.dispatchEvent(new CustomEvent("nazone:ready"));
        return;
      }
    } catch (_) {}

    document.body.classList.add("is-intro");
    const intro = createIntro();
    const started = performance.now();
    let progress = 0;

    const tick = window.setInterval(() => {
      progress = Math.min(92, progress + 2 + Math.random() * 6);
      setProgress(progress);
    }, 80);

    const ready = new Promise((resolve) => {
      if (document.readyState === "complete") resolve();
      else window.addEventListener("load", resolve, { once: true });
    });

    ready.then(() => {
      const wait = Math.max(0, MIN_MS - (performance.now() - started));
      window.setTimeout(() => {
        window.clearInterval(tick);
        setProgress(100);
        try {
          sessionStorage.setItem("nazone-intro-done", "1");
        } catch (_) {}
        window.setTimeout(() => finishIntro(intro), 220);
      }, wait);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();

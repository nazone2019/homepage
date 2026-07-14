/**
 * 共通UI — ヘッダー／フッター注入、モバイルメニュー、表示アニメ
 */
(function () {
  const X_ICON = `<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.743l7.227-8.941L1.61 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`;
  const EXT_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M14 5h5v5M19 5l-9 9M10 5H5v14h14v-5"/></svg>`;

  function currentPage() {
    const file = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    if (!file || file === "") return "index.html";
    return file;
  }

  function renderHeader() {
    const mount = document.getElementById("site-header");
    if (!mount || typeof SITE === "undefined") return;

    const page = currentPage();
    const links = SITE.nav
      .map((item) => {
        const active = page === item.href.toLowerCase() ? " is-active" : "";
        const contact = item.href === "contact.html" ? " nav__contact" : "";
        return `<a href="${item.href}" class="${(active + contact).trim()}">${item.label}</a>`;
      })
      .join("");

    mount.innerHTML = `
      <a class="logo" href="index.html" aria-label="${SITE.name} ホームへ">
        <img src="assets/brand/logo.webp" alt="${SITE.name}" width="160" height="34">
      </a>
      <nav class="nav" aria-label="メインナビゲーション">
        ${links}
        <a class="nav__x" href="${SITE.twitter}" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">${X_ICON}</a>
      </nav>
      <button class="menu-btn" id="menuBtn" type="button" aria-label="メニュー" aria-expanded="false">
        <span></span><span></span>
      </button>
      <div class="mobile-nav" id="mobileNav" aria-hidden="true">
        <nav>
          ${links}
          <a href="${SITE.twitter}" target="_blank" rel="noopener noreferrer">X / Twitter</a>
        </nav>
      </div>
    `;

    const btn = document.getElementById("menuBtn");
    const panel = document.getElementById("mobileNav");
    if (btn && panel) {
      btn.addEventListener("click", () => {
        const open = !panel.classList.contains("is-open");
        panel.classList.toggle("is-open", open);
        btn.classList.toggle("is-open", open);
        btn.setAttribute("aria-expanded", String(open));
        panel.setAttribute("aria-hidden", String(!open));
        document.body.style.overflow = open ? "hidden" : "";
      });
    }
  }

  function renderFooter(crumb) {
    const mount = document.getElementById("site-footer");
    if (!mount || typeof SITE === "undefined") return;

    let crumbHtml = "";
    if (crumb) {
      crumbHtml = `<nav class="breadcrumb" aria-label="パンくず">
        <a href="index.html">HOME</a><span>›</span><span>${crumb}</span>
      </nav>`;
    }

    mount.innerHTML = `
      ${crumbHtml}
      <p class="copyright">${SITE.copyright}</p>
    `;
  }

  function observeReveal() {
    const nodes = document.querySelectorAll(".reveal:not(.is-in)");
    if (!nodes.length) return;
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    nodes.forEach((n) => io.observe(n));
  }

  function workImageHtml(work) {
    if (work.image) {
      return `<img src="assets/works/${work.image}" alt="${work.title}" loading="lazy">`;
    }
    return `<div class="work-card__placeholder">${work.title}</div>`;
  }

  function workCardHtml(work, heading = "h3", rideNo) {
    const no = rideNo != null ? String(rideNo).padStart(2, "0") : "";
    const ride = no
      ? `<span class="work-card__ride">No.${no}</span>`
      : "";
    return `
      <a class="work-card reveal" href="work.html?id=${encodeURIComponent(work.id)}" data-year="${work.year || ""}">
        <div class="work-card__thumb">
          ${workImageHtml(work)}
          ${ride}
          <span class="work-card__year">${work.year || ""}</span>
          <div class="work-card__cap">
            <${heading} class="work-card__title">${work.title}</${heading}>
            <p class="work-card__date">${work.date}</p>
          </div>
        </div>
      </a>`;
  }

  function startMotion() {
    observeReveal();
  }

  window.NAZONE = {
    renderHeader,
    renderFooter,
    observeReveal,
    workImageHtml,
    workCardHtml,
    EXT_ICON,
    X_ICON,
    init(options = {}) {
      renderHeader();
      renderFooter(options.crumb || "");

      const waitIntro = options.waitIntro === true;
      if (waitIntro && !document.body.classList.contains("is-ready")) {
        document.addEventListener("nazone:ready", startMotion, { once: true });
        // フォールバック（ローダー無し／スキップ時）
        window.setTimeout(() => {
          if (!document.body.classList.contains("is-ready")) {
            document.body.classList.add("is-ready");
            startMotion();
          }
        }, 5000);
      } else {
        document.body.classList.add("is-ready");
        startMotion();
      }
    },
  };
})();

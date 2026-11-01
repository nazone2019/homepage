/**
 * 共通UI — ヘッダー／フッター注入、モバイルメニュー
 */
(function () {
  const EXT_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M14 5h5v5M19 5l-9 9M10 5H5v14h14v-5"/></svg>`;

  function siteRoot() {
    const parts = location.pathname.replace(/\/+$/, "").split("/").filter(Boolean);
    if (parts.length === 0) return "";
    const last = parts[parts.length - 1];
    const depth = last.includes(".") ? parts.length - 1 : parts.length;
    return depth > 0 ? "../".repeat(depth) : "";
  }

  function href(path) {
    if (!path || /^(https?:)?\/\//.test(path)) return path;
    return siteRoot() + path;
  }

  function currentPage() {
    const parts = location.pathname.replace(/\/+$/, "").split("/").filter(Boolean);
    const last = (parts[parts.length - 1] || "index.html").toLowerCase();
    if (parts.includes("naiyoubutsu")) return "naiyoubutsu/";
    if (!last || last === "") return "index.html";
    return last;
  }

  function renderHeader() {
    const mount = document.getElementById("site-header");
    if (!mount || typeof SITE === "undefined") return;

    const page = currentPage();
    const hideMenu = page === "naiyoubutsu/";
    const links = hideMenu
      ? ""
      : SITE.nav
          .map((item) => {
            const active = page === item.href.toLowerCase() ? " is-active" : "";
            return `<a href="${href(item.href)}" class="${active.trim()}">
          <span class="nav__jp">${item.jp || item.label}</span>
          <span class="nav__en">${item.label}</span>
        </a>`;
          })
          .join("");

    mount.innerHTML = `
      <a class="logo" href="${href("index.html")}" aria-label="${SITE.name} ホームへ">
        <img src="${href("assets/brand/logo.webp")}" alt="${SITE.name}" width="160" height="34">
      </a>
      ${
        hideMenu
          ? ""
          : `<nav class="nav" id="site-nav" aria-label="メインナビゲーション">
        ${links}
        <a href="${SITE.twitter}" target="_blank" rel="noopener noreferrer">
          <span class="nav__jp">X / Twitter</span>
          <span class="nav__en">X</span>
        </a>
      </nav>
      <button class="menu-btn" id="menuBtn" type="button" aria-label="メニュー" aria-expanded="false">
        <span></span><span></span>
      </button>`
      }
    `;

    const nav = document.getElementById("site-nav");
    const btn = document.getElementById("menuBtn");
    const setOpen = (open) => {
      nav.classList.toggle("is-open", open);
      btn.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", String(open));
      document.body.classList.toggle("is-nav-open", open);
    };
    if (btn && nav) {
      btn.addEventListener("click", () => setOpen(!nav.classList.contains("is-open")));
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && nav.classList.contains("is-open")) setOpen(false);
      });
    }
  }

  function renderFooter(crumb) {
    const mount = document.getElementById("site-footer");
    if (!mount || typeof SITE === "undefined") return;

    let crumbHtml = "";
    if (crumb) {
      crumbHtml = `<nav class="breadcrumb" aria-label="パンくず">
        <a href="${href("index.html")}">HOME</a><span>›</span><span>${crumb}</span>
      </nav>`;
    }

    mount.innerHTML = `
      ${crumbHtml}
      <p class="copyright">${SITE.copyright}</p>
    `;
  }

  function workImageHtml(work) {
    if (work.image) {
      return `<img src="${href("assets/works/" + work.image)}" alt="${work.title}" loading="lazy">`;
    }
    return `<div class="work-card__placeholder">${work.title}</div>`;
  }

  function workCardHtml(work, heading = "h3") {
    return `
      <a class="work-card" href="${href("work.html")}?id=${encodeURIComponent(work.id)}" data-year="${work.year || ""}">
        <div class="work-card__thumb">${workImageHtml(work)}</div>
        <div class="work-card__cap">
          <${heading} class="work-card__title">${work.title}</${heading}>
          <p class="work-card__date">${work.date}</p>
        </div>
      </a>`;
  }

  window.NAZONE = {
    renderHeader,
    renderFooter,
    workImageHtml,
    workCardHtml,
    href,
    EXT_ICON,
    init(options = {}) {
      if (currentPage() !== "naiyoubutsu/") renderHeader();
      renderFooter(options.crumb || "");
      document.body.classList.add("is-ready");
    },
  };
})();

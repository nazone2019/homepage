(function () {
  const page = document.body.dataset.page;
  const isWorks = page === "works";
  const rawItems = isWorks ? window.DRAFT_WORKS : window.DRAFT_GOODS;
  const items = window.DRAFT_sortByDateDesc
    ? window.DRAFT_sortByDateDesc(rawItems)
    : (rawItems || []).slice();
  const filters = isWorks ? window.DRAFT_WORK_FILTERS : window.DRAFT_GOOD_FILTERS;
  const detailBase = isWorks ? "work.html?id=" : "good.html?id=";

  const filterRoot = document.getElementById("mock-filters");
  const listRoot = document.getElementById("mock-list");
  if (!filterRoot || !listRoot || !items || !filters) return;

  let active = filters[0] || "すべて";

  function matchesFilter(item, key) {
    if (key === "すべて") return true;
    const value = item.filter;
    if (Array.isArray(value)) return value.includes(key);
    return value === key;
  }

  function cardHtml(item) {
    const href = detailBase + encodeURIComponent(item.id);
    const desc = item.story || "";
    const media = window.DRAFT_cardMediaHtml
      ? window.DRAFT_cardMediaHtml(href, item.image)
      : `<a class="mock-list-card__media" href="${href}" aria-label="${item.title}の詳細"><img src="${item.image}" alt="" loading="lazy"></a>`;
    const peek = window.DRAFT_cardPeekHtml
      ? window.DRAFT_cardPeekHtml(href, {
          src: isWorks ? "homepage_kwsk.webp" : "homepage_kwskgoods.webp",
          label: isWorks ? "この公演をのぞいてみる" : "このグッズをのぞいてみる",
        })
      : "";
    return `
      <article class="mock-list-card">
        ${media}
        ${peek}
        <div class="mock-list-card__body">
          <span class="mock-list-card__tag">${item.tag}</span>
          <h2 class="mock-list-card__title">
            <a class="mock-list-card__title-link" href="${href}">${item.title}</a>
          </h2>
          <p class="mock-list-card__date">${item.date}</p>
          <p class="mock-list-card__desc">${desc}</p>
        </div>
      </article>`;
  }

  function renderFilters() {
    filterRoot.innerHTML = filters
      .map((label) => {
        const on = label === active;
        return `
      <button
        type="button"
        class="mock-filter-btn${on ? " is-active" : ""}"
        data-filter="${label}"
        aria-pressed="${on ? "true" : "false"}"
      >${label}</button>`;
      })
      .join("");
  }

  function renderList() {
    const shown = items.filter((item) => matchesFilter(item, active));
    if (!shown.length) {
      listRoot.innerHTML = `<p class="mock-list-empty">該当する項目がありません。</p>`;
    } else {
      listRoot.innerHTML = shown.map(cardHtml).join("");
      window.DRAFT_enhanceCardMedia?.(listRoot);
    }
  }

  filterRoot.addEventListener("click", (e) => {
    const btn = e.target.closest(".mock-filter-btn");
    if (!btn) return;
    active = btn.dataset.filter;
    renderFilters();
    renderList();
  });

  renderFilters();
  renderList();
})();

(function () {
  const page = document.body.dataset.page;
  const isWork = page === "work";
  const mount = document.getElementById("detail-mount");
  if (!mount) return;

  const params = new URLSearchParams(location.search);
  const id = params.get("id") || "";
  const item = isWork
    ? (typeof getWorkById === "function" ? getWorkById(id) : null)
    : (typeof getGoodById === "function" ? getGoodById(id) : null);

  const listHref = isWork ? "works.html" : "goods.html";
  const listLabel = "戻る";
  const assetDir = isWork ? "assets/works/" : "assets/goods/";
  const draftList = isWork ? window.DRAFT_WORKS : window.DRAFT_GOODS;
  const draftMeta = (draftList || []).find((d) => d.id === id);

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function nlToBr(value) {
    return escapeHtml(value).replace(/\n/g, "<br>");
  }

  function section(title, html) {
    if (!html) return "";
    return `<section class="mock-detail__section"><h2>${title}</h2>${html}</section>`;
  }

  if (!item) {
    mount.innerHTML = `
      <div class="mock-detail mock-detail--empty">
        <p>${isWork ? "作品" : "グッズ"}が見つかりませんでした。</p>
        <p class="mock-detail__back"><a href="${listHref}">${listLabel}</a></p>
      </div>`;
    return;
  }

  document.title = `${item.title} | NAZONE`;

  const tag = draftMeta && draftMeta.tag
    ? `<span class="mock-detail__tag">${escapeHtml(draftMeta.tag)}</span>`
    : "";

  const image = item.image
    ? `<div class="mock-detail__media">
         <img src="${assetDir}${encodeURIComponent(item.image).replace(/%2F/g, "/")}" alt="${escapeHtml(item.title)}" decoding="async" fetchpriority="high">
       </div>`
    : "";

  let story = "";
  let about = "";
  if (isWork) {
    if (item.story) {
      story = section("【STORY】", `<p>${nlToBr(item.story)}</p>`);
    }
    if (item.about) {
      about = section("【ABOUT】", `<p>${nlToBr(item.about)}</p>`);
    }
  } else if (item.about) {
    about = section("【ABOUT】", `<p>${nlToBr(item.about)}</p>`);
  }

  const meta =
    item.meta && item.meta.length
      ? `<ul class="mock-detail__meta">${item.meta
          .map((m) => `<li>${escapeHtml(m)}</li>`)
          .join("")}</ul>`
      : "";

  function hashtagHtml(raw) {
    const text = String(raw || "").trim();
    if (!text) return "";
    const links = text
      .split(/\s+/)
      .filter(Boolean)
      .map((part) => {
        const label = part.startsWith("#") ? part : `#${part}`;
        const query = label.replace(/^#/, "");
        const href = `https://x.com/hashtag/${encodeURIComponent(query)}`;
        return `<a class="mock-detail__hashtag-link" href="${href}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a>`;
      })
      .join(" ");
    return `<p class="mock-detail__hashtag">ハッシュタグ：${links}</p>`;
  }

  const hashtag = hashtagHtml(item.hashtag);

  const history =
    isWork && item.history && item.history.length
      ? section(
          "【過去の公演】",
          `<ul>${item.history.map((h) => `<li>${escapeHtml(h)}</li>`).join("")}</ul>`
        )
      : "";

  const buyLinks =
    item.buyLinks && item.buyLinks.length
      ? `<div class="mock-detail__buys">${item.buyLinks
          .map(
            (link) =>
              `<a class="mock-detail__buy" href="${escapeHtml(link.href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.label)}</a>`
          )
          .join("")}</div>`
      : "";

  mount.innerHTML = `
    <article class="mock-detail">
      ${image}
      <div class="mock-detail__body">
        ${tag}
        <h1 class="mock-detail__title">${escapeHtml(item.title)}</h1>
        <p class="mock-detail__date">${escapeHtml(item.date || "")}</p>
        ${story}
        ${about}
        ${meta}
        ${hashtag}
        ${buyLinks}
        ${history}
        <p class="mock-detail__back"><a href="${listHref}">${listLabel}</a></p>
      </div>
    </article>`;
})();

/**
 * カード共通：キービジュアル（切れない / 角丸なし / ドア開き）
 */
(function () {
  function mediaHtml(href, src) {
    const safeSrc = src || "";
    return `
      <a class="mock-list-card__media" href="${href}" aria-label="詳細を見る">
        <span class="mock-list-card__kv">
          <span class="mock-list-card__behind" aria-hidden="true"></span>
          <span class="mock-list-card__door">
            <img class="mock-list-card__blur" src="${safeSrc}" alt="" aria-hidden="true" decoding="async">
            <img class="mock-list-card__main" src="${safeSrc}" alt="" loading="lazy" decoding="async">
          </span>
        </span>
      </a>`;
  }

  /* ドアから出てくる吹き出し（カード右下で位置統一） */
  function peekHtml(href, options) {
    const opts = options || {};
    const src = opts.src || "homepage_kwsk.webp";
    const label = opts.label || "この公演をのぞいてみる";
    return `
      <a class="mock-list-card__kwsk" href="${href}" aria-label="${label}">
        <img src="${src}" alt="" decoding="async" draggable="false">
      </a>`;
  }

  function rgbToCss(r, g, b) {
    return `rgb(${r | 0}, ${g | 0}, ${b | 0})`;
  }

  /* 端の余白を避けつつ、鮮やかめなメインカラーを拾う */
  function sampleMainColor(img) {
    try {
      const w = Math.min(48, img.naturalWidth || 0);
      const h = Math.min(48, img.naturalHeight || 0);
      if (!w || !h) return null;
      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) return null;
      ctx.drawImage(img, 0, 0, w, h);
      const { data } = ctx.getImageData(0, 0, w, h);

      let best = null;
      let bestScore = -1;
      let sumR = 0;
      let sumG = 0;
      let sumB = 0;
      let count = 0;

      for (let i = 0; i < data.length; i += 16) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3];
        if (a < 200) continue;
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const sat = max === 0 ? 0 : (max - min) / max;
        const lum = (r + g + b) / 3;
        if (lum < 28 || lum > 235) continue;
        sumR += r;
        sumG += g;
        sumB += b;
        count += 1;
        const score = sat * 1.35 + (1 - Math.abs(lum - 118) / 118) * 0.35;
        if (score > bestScore) {
          bestScore = score;
          best = [r, g, b];
        }
      }

      if (best) return rgbToCss(best[0], best[1], best[2]);
      if (!count) return null;
      return rgbToCss(sumR / count, sumG / count, sumB / count);
    } catch (_) {
      return null;
    }
  }

  function applyMainColor(media) {
    const probe = media.querySelector(".mock-list-card__main");
    const behind = media.querySelector(".mock-list-card__behind");
    if (!probe || !behind) return;

    const apply = () => {
      const color = sampleMainColor(probe) || "#5a7a6a";
      media.style.setProperty("--kv-main", color);
      behind.style.background = color;
    };

    if (probe.complete && probe.naturalWidth) apply();
    else probe.addEventListener("load", apply, { once: true });
  }

  function applyLetterbox(media) {
    const probe = media.querySelector(".mock-list-card__main");
    if (!probe) return;

    const finish = () => {
      if (!probe.naturalWidth) return;
      /* 枠より横長ならぼかし帯が出る（縦長でも contain で切れない） */
      const frame = media.getBoundingClientRect();
      if (!frame.width || !frame.height) {
        media.classList.add("is-letterbox");
        return;
      }
      const imageRatio = probe.naturalWidth / probe.naturalHeight;
      const frameRatio = frame.width / frame.height;
      const letterbox = Math.abs(imageRatio - frameRatio) > 0.03;
      media.classList.toggle("is-letterbox", letterbox);
      media.classList.toggle("is-wide", imageRatio >= 1);
      media.classList.toggle("is-tall", imageRatio < 1);
    };

    if (probe.complete && probe.naturalWidth) finish();
    else probe.addEventListener("load", finish, { once: true });
  }

  function bindDoorHover(card) {
    if (!card || card.dataset.doorBound) return;
    /* タッチ端末ではホバー用の1回目タップで遷移を邪魔しない */
    const canHover =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canHover) return;
    card.dataset.doorBound = "1";
    const media = card.querySelector(".mock-list-card__media");
    const open = () => {
      media?.classList.add("is-open");
      card.classList.add("is-door-open");
    };
    const close = () => {
      /* カード内の別リンクへフォーカス移動中は閉じない */
      if (card.contains(document.activeElement)) return;
      media?.classList.remove("is-open");
      card.classList.remove("is-door-open");
    };
    card.addEventListener("pointerenter", open);
    card.addEventListener("pointerleave", close);
    card.addEventListener("focusin", open);
    card.addEventListener("focusout", (e) => {
      if (card.contains(e.relatedTarget)) return;
      close();
    });
  }

  function enhance(root) {
    const scope = root || document;
    scope.querySelectorAll(".mock-list-card").forEach((card) => {
      const media = card.querySelector(".mock-list-card__media");
      if (media) {
        applyLetterbox(media);
        applyMainColor(media);
      }
      bindDoorHover(card);
    });
  }

  window.DRAFT_cardMediaHtml = mediaHtml;
  window.DRAFT_cardPeekHtml = peekHtml;
  window.DRAFT_enhanceCardMedia = enhance;
})();

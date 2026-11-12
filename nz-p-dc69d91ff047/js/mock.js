(function () {
  function revealMotion() {
    document.querySelectorAll(".catch__line, .mock-scroll__img").forEach((el) => {
      el.classList.add("is-in");
    });
  }

  const startReveal = () => requestAnimationFrame(revealMotion);
  if (document.readyState === "complete") startReveal();
  else window.addEventListener("load", startReveal);

  function toCarouselItems(list, detailBase, peek, limit) {
    return (list || []).slice(0, limit).map((item) => ({
      title: item.title,
      tag: item.tag,
      date: item.date,
      image: item.image,
      story: item.story || "",
      href: detailBase + encodeURIComponent(item.id),
      peekSrc: peek.src,
      peekLabel: peek.label,
    }));
  }

  const WORKS = toCarouselItems(
    window.DRAFT_WORKS,
    "work.html?id=",
    { src: "homepage_kwsk.webp", label: "この公演をのぞいてみる" },
    4
  );
  const GOODS = toCarouselItems(
    window.DRAFT_GOODS,
    "good.html?id=",
    { src: "homepage_kwskgoods.webp", label: "このグッズをのぞいてみる" },
    4
  );

  function cardHtml(item) {
    const media = window.DRAFT_cardMediaHtml
      ? window.DRAFT_cardMediaHtml(item.href, item.image)
      : `<a class="mock-list-card__media" href="${item.href}" aria-label="${item.title}の詳細"><img src="${item.image}" alt="" loading="lazy"></a>`;
    const peek = window.DRAFT_cardPeekHtml
      ? window.DRAFT_cardPeekHtml(item.href, {
          src: item.peekSrc,
          label: item.peekLabel,
        })
      : "";
    return `
      <article class="mock-list-card">
        ${media}
        ${peek}
        <div class="mock-list-card__body">
          <span class="mock-list-card__tag">${item.tag}</span>
          <h2 class="mock-list-card__title">
            <a class="mock-list-card__title-link" href="${item.href}">${item.title}</a>
          </h2>
          <p class="mock-list-card__date">${item.date}</p>
          <p class="mock-list-card__desc">${item.story}</p>
        </div>
      </article>`;
  }

  function setupCarousel(name, items) {
    const slot = document.getElementById(`${name}-card-slot`);
    const prev = document.querySelector(`.hotspot--${name}-prev`);
    const next = document.querySelector(`.hotspot--${name}-next`);
    if (!slot || !items.length) return;

    let index = 0;
    let busy = false;

    function paint(i, animate) {
      index = (i + items.length) % items.length;
      const html = cardHtml(items[index]);

      const mount = () => {
        slot.innerHTML = html;
        window.DRAFT_enhanceCardMedia?.(slot);
      };

      if (!animate) {
        mount();
        return;
      }

      if (busy) return;
      busy = true;
      const current = slot.querySelector(".mock-list-card");
      if (current) current.classList.add("is-swap");

      window.setTimeout(() => {
        mount();
        const nextCard = slot.querySelector(".mock-list-card");
        if (nextCard) {
          nextCard.classList.add("is-swap");
          requestAnimationFrame(() => {
            requestAnimationFrame(() => nextCard.classList.remove("is-swap"));
          });
        }
        busy = false;
      }, 180);
    }

    function step(dir) {
      paint(index + dir, true);
    }

    prev?.addEventListener("click", () => step(-1));
    next?.addEventListener("click", () => step(1));

    let startX = 0;
    slot.addEventListener("touchstart", (e) => {
      startX = e.changedTouches[0].clientX;
    }, { passive: true });
    slot.addEventListener("touchend", (e) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) < 40) return;
      step(dx < 0 ? 1 : -1);
    }, { passive: true });

    paint(0, false);
  }

  setupCarousel("works", WORKS);
  setupCarousel("goods", GOODS);

  const menuBtn = document.getElementById("menu-btn");
  const nav = document.getElementById("mock-nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      const open = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-expanded", open ? "false" : "true");
      nav.hidden = open;
    });
    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        menuBtn.setAttribute("aria-expanded", "false");
        nav.hidden = true;
      });
    });
  }
})();

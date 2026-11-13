(function () {
  function flyHomeArrow(arrow) {
    if (!arrow) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const end = { x: 85.27, y: 30.3 };
    // モバイル枠の右端・やや上から等速・直線で「ロ」へ刺さる
    const start = { x: 100, y: 10 };
    const tip = "translate(-4%, -94%)";
    const duration = 180;
    const delay = 1850;

    arrow.classList.remove("is-flying", "is-landed");
    arrow.style.left = start.x + "%";
    arrow.style.top = start.y + "%";
    arrow.style.opacity = "0";
    arrow.style.transform = tip + " rotate(0deg)";

    if (reduce) {
      arrow.classList.add("is-landed");
      arrow.style.left = end.x + "%";
      arrow.style.top = end.y + "%";
      arrow.style.opacity = "1";
      arrow.style.transform = tip + " rotate(0deg)";
      return;
    }

    window.setTimeout(() => {
      arrow.classList.add("is-flying");
      const t0 = performance.now();

      function frame(now) {
        // イージングなし = 一定速度
        const p = Math.min(1, (now - t0) / duration);
        const x = start.x + (end.x - start.x) * p;
        const y = start.y + (end.y - start.y) * p;
        const opacity = p < 0.06 ? p / 0.06 : 1;

        arrow.style.left = x + "%";
        arrow.style.top = y + "%";
        arrow.style.opacity = String(opacity);
        arrow.style.transform = tip + " rotate(0deg)";

        if (p < 1) {
          requestAnimationFrame(frame);
        } else {
          arrow.classList.remove("is-flying");
          arrow.classList.add("is-landed");
          arrow.style.left = end.x + "%";
          arrow.style.top = end.y + "%";
          arrow.style.opacity = "1";
          arrow.style.transform = tip + " rotate(0deg)";
        }
      }

      requestAnimationFrame(frame);
    }, delay);
  }

  function revealHomeHero() {
    const hero = document.getElementById("home-hero");
    if (!hero) return;

    const arrow = hero.querySelector(".home-hero__arrow");
    const arts = hero.querySelectorAll(
      ".home-hero__base, .home-hero__overlay, .home-hero__arrow"
    );
    const wait = [...arts].map((img) =>
      img.complete
        ? Promise.resolve()
        : new Promise((resolve) => {
            img.addEventListener("load", resolve, { once: true });
            img.addEventListener("error", resolve, { once: true });
          })
    );

    Promise.all(wait).then(() => {
      requestAnimationFrame(() => {
        hero.classList.remove("is-ready");
        requestAnimationFrame(() => {
          hero.classList.add("is-ready");
          flyHomeArrow(arrow);
        });
      });
    });
  }

  if (document.readyState === "complete") revealHomeHero();
  else window.addEventListener("load", revealHomeHero);

  function revealHomePanels() {
    const panels = document.querySelectorAll(".home-panel");
    if (!panels.length) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      panels.forEach((panel) => panel.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );

    panels.forEach((panel) => io.observe(panel));
  }

  revealHomePanels();

  function sorted(list) {
    return window.DRAFT_sortByDateDesc
      ? window.DRAFT_sortByDateDesc(list)
      : (list || []).slice();
  }

  function toCarouselItems(list, detailBase, peek, limit) {
    return sorted(list).slice(0, limit).map((item) => ({
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
    { src: "assets/site/homepage_kwsk.webp", label: "この公演をのぞいてみる" },
    3
  );
  const GOODS = toCarouselItems(
    window.DRAFT_GOODS,
    "good.html?id=",
    { src: "assets/site/homepage_kwskgoods.webp", label: "このグッズをのぞいてみる" },
    1
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
        </div>
      </article>`;
  }

  function mountCard(slot, item) {
    slot.innerHTML = cardHtml(item);
    window.DRAFT_enhanceCardMedia?.(slot);
  }

  function setupSlideshow(slot, items, dotsRoot) {
    if (!slot || !items.length) return;

    let index = 0;
    let busy = false;
    let timer = null;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const intervalMs = 4200;

    const dots = items.map((_, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "home-slideshow-dots__dot";
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-label", `${i + 1}枚目`);
      btn.addEventListener("click", () => go(i, true));
      dotsRoot?.appendChild(btn);
      return btn;
    });

    function syncDots() {
      dots.forEach((dot, i) => {
        const on = i === index;
        dot.classList.toggle("is-active", on);
        if (on) dot.setAttribute("aria-current", "true");
        else dot.removeAttribute("aria-current");
      });
    }

    function paint(i, animate) {
      index = ((i % items.length) + items.length) % items.length;
      syncDots();

      const apply = () => mountCard(slot, items[index]);

      if (!animate) {
        apply();
        return;
      }
      if (busy) return;
      busy = true;
      const current = slot.querySelector(".mock-list-card");
      if (current) current.classList.add("is-swap");

      window.setTimeout(() => {
        apply();
        const nextCard = slot.querySelector(".mock-list-card");
        if (nextCard) {
          nextCard.classList.add("is-swap");
          requestAnimationFrame(() => {
            requestAnimationFrame(() => nextCard.classList.remove("is-swap"));
          });
        }
        busy = false;
      }, 200);
    }

    function go(i, user) {
      paint(i, true);
      if (user) restart();
    }

    function next() {
      paint(index + 1, true);
    }

    function restart() {
      if (timer) window.clearInterval(timer);
      timer = null;
      if (reduce || items.length < 2) return;
      timer = window.setInterval(next, intervalMs);
    }

    let startX = 0;
    slot.addEventListener("touchstart", (e) => {
      startX = e.changedTouches[0].clientX;
    }, { passive: true });
    slot.addEventListener("touchend", (e) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) < 40) return;
      go(index + (dx < 0 ? 1 : -1), true);
    }, { passive: true });

    slot.addEventListener("mouseenter", () => {
      if (timer) window.clearInterval(timer);
      timer = null;
    });
    slot.addEventListener("mouseleave", () => restart());

    paint(0, false);
    restart();
  }

  function setupStaticCard(slot, items) {
    if (!slot || !items.length) return;
    mountCard(slot, items[0]);
  }

  setupSlideshow(
    document.getElementById("works-card-slot"),
    WORKS,
    document.getElementById("works-dots")
  );
  setupStaticCard(document.getElementById("goods-card-slot"), GOODS);
})();

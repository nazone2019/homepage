(function () {
  const WORKS = [
    {
      title: "ブースターコースター",
      tag: "ブース突破型",
      date: "2026/9/26〜",
      image: "../assets/works/booster-coaster.webp",
      href: "work.html?id=booster-coaster",
    },
    {
      title: "かけめぐれ！ムリヤリセイトンスケルトン",
      tag: "探索型",
      date: "2026/9/26〜",
      image: "../assets/works/kakemegure-muriyari.webp",
      href: "work.html?id=kakemegure-muriyari",
    },
    {
      title: "たぶんなに？",
      tag: "推測型",
      date: "2026/9/26〜",
      image: "../assets/works/tabunnani.webp",
      href: "work.html?id=tabunnani",
    },
    {
      title: "ギリギリダンシャリ",
      tag: "スコアアタック",
      date: "2026/5/2〜",
      image: "../assets/works/girigiri-danshari.webp",
      href: "work.html?id=girigiri-danshari",
    },
  ];

  const GOODS = [
    {
      title: "まずは内容物一覧をご確認ください！",
      tag: "ネット",
      date: "2026年",
      image: "../assets/goods/mazu-naiyoubutsu.png",
      href: "good.html?id=mazu-naiyoubutsu",
    },
    {
      title: "オクダケパズル",
      tag: "持ち帰り",
      date: "2025年",
      image: "../assets/goods/okudake-puzzle.webp",
      href: "good.html?id=okudake-puzzle",
    },
  ];

  function cardHtml(item) {
    return `
      <li class="draft-card">
        <a class="draft-card__media" href="${item.href}">
          <img src="${item.image}" alt="${item.title}" loading="lazy">
        </a>
        <div class="draft-card__body">
          <span class="draft-card__tag">${item.tag}</span>
          <h3 class="draft-card__title">${item.title}</h3>
          <p class="draft-card__date">${item.date}</p>
        </div>
      </li>`;
  }

  function setupCarousel(root, items) {
    const track = root.querySelector(".draft-carousel__track");
    const prev = root.querySelector(".draft-carousel__nav.is-prev");
    const next = root.querySelector(".draft-carousel__nav.is-next");
    if (!track || !items.length) return;

    track.innerHTML = items.map(cardHtml).join("");
    let index = 0;

    function render() {
      track.style.transform = `translateX(-${index * 100}%)`;
    }

    prev.addEventListener("click", () => {
      index = (index - 1 + items.length) % items.length;
      render();
    });
    next.addEventListener("click", () => {
      index = (index + 1) % items.length;
      render();
    });

    let startX = 0;
    track.addEventListener("touchstart", (e) => {
      startX = e.changedTouches[0].clientX;
    }, { passive: true });
    track.addEventListener("touchend", (e) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) < 40) return;
      if (dx < 0) index = (index + 1) % items.length;
      else index = (index - 1 + items.length) % items.length;
      render();
    }, { passive: true });

    render();
  }

  const worksRoot = document.querySelector('[data-carousel="works"]');
  const goodsRoot = document.querySelector('[data-carousel="goods"]');
  if (worksRoot) setupCarousel(worksRoot, WORKS);
  if (goodsRoot) setupCarousel(goodsRoot, GOODS);

  const menuBtn = document.getElementById("menu-btn");
  const nav = document.getElementById("draft-nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      const open = menuBtn.classList.toggle("is-open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      nav.hidden = !open;
    });
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuBtn.classList.remove("is-open");
        menuBtn.setAttribute("aria-expanded", "false");
        nav.hidden = true;
      });
    });
  }
})();

(function () {
  const menuBtn = document.getElementById("menu-btn");
  const nav = document.getElementById("mock-nav");
  if (!menuBtn || !nav) return;

  function setOpen(open) {
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    nav.hidden = !open;
  }

  function isOpen() {
    return menuBtn.getAttribute("aria-expanded") === "true";
  }

  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    setOpen(!isOpen());
  });

  nav.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => setOpen(false));
  });

  document.addEventListener("pointerdown", (e) => {
    if (!isOpen()) return;
    if (menuBtn.contains(e.target) || nav.contains(e.target)) return;
    setOpen(false);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen()) setOpen(false);
  });
})();

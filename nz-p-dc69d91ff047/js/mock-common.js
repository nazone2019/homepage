(function () {
  const menuBtn = document.getElementById("menu-btn");
  const nav = document.getElementById("mock-nav");
  if (!menuBtn || !nav) return;

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
})();

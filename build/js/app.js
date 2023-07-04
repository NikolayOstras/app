(() => {
  // src/js/components/dom.js
  var $ = {
    header: document.querySelector(".__header"),
    burger: document.querySelector(".__burger"),
    menu: document.querySelector(".__menu")
  };
  var dom_default = $;

  // src/js/app.js
  var documentHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
  };
  window.addEventListener("resize", documentHeight);
  documentHeight();
  var headerHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--header-height", `${dom_default.header.offsetHeight}px`);
  };
  headerHeight();
  dom_default.burger.addEventListener("click", () => {
    dom_default.burger.classList.toggle("is-active");
    dom_default.menu.classList.toggle("is-active");
  });
})();

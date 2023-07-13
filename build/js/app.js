(() => {
  // src/js/components/dom.js
  var $ = {
    header: document.querySelector(".__header"),
    burger: document.querySelector(".__burger"),
    menu: document.querySelector(".__menu")
  };
  var dom_default = $;

  // src/js/components/burger.js
  var burger = () => {
    dom_default.burger.addEventListener("click", () => {
      dom_default.burger.classList.toggle("is-active");
      dom_default.menu.classList.toggle("is-active");
    });
  };
  var burger_default = burger;

  // src/js/components/header.js
  var lastScrollTop = 0;
  var header = () => {
    const scrollY = window.scrollY;
    if (scrollY <= dom_default.header.offsetTop) {
      dom_default.header.classList.remove("fixed");
      return;
    }
    if (scrollY > lastScrollTop) {
      dom_default.header.classList.remove("fixed");
    } else if (scrollY < lastScrollTop) {
      dom_default.header.classList.add("fixed");
    }
    lastScrollTop = scrollY;
  };
  var header_default = header;

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
  burger_default();
  window.addEventListener("scroll", () => header_default());
})();

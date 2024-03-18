let translations = {
  ["en-us"]: {
    btnText: "Search network",
  },
  ["pt-br"]: {
    btnText: "Conheça nossa rede",
  },
};
let path = document.location.pathname.split("/")[1];
let lang = translations[path];

function checkIfReady(fn) {
  if (document.readyState != "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}
checkIfReady(function () {
  init();
  runobs();
});

function runobs() {
  const doc = document.body || document.documentElement;
  const config = {
    childList: true,
    subtree: true,
  };

  var observer = new MutationObserver(function () {
    let htmlElement = document.querySelector("html");
    const speero = document.querySelector(".speero-nav");
    const container = document.querySelector("header > nav div:nth-child(5) a");
    const speeroMobile = document.querySelector(".speero-nav-mobile");
    const mobileContainer = document.querySelector(
      "header + div + div > ul > li:nth-child(6)"
    );
    if (container && !speero) {
      init("desktop");
      observer.observe(doc, config);
    }
    if (mobileContainer && !speeroMobile) {
      init("mobile");
      observer.observe(doc, config);
    }
  });

  observer.observe(doc, config);
}

function init(device) {
  if (device == "desktop") {
    const container = document.querySelector("header > nav div:nth-child(5) a");
    if (container) {
      container.classList.add("speero-nav");
      container.textContent = `${lang.btnText}`;
    }
  }
  if (device == "mobile") {
    const mobileContainer = document.querySelector(
      "header + div + div > ul > li:nth-child(6) a"
    );
    if (mobileContainer) {
      mobileContainer.classList.add("speero-nav-mobile");
      mobileContainer.textContent = `${lang.btnText}`;
    }
  }
}

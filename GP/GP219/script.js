var translations = {
  ["en-us"]: {
    btnLink: "https://gympass.com/en-us/search/",
    btnText: "Search network",
  },
  ["pt-br"]: {
    btnLink: "https://gympass.com/pt-br/search/",
    btnText: "Procurar rede",
  },
};
var path = document.location.pathname.split("/")[1];
var lang = translations[path];

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
    const container = document.querySelector("#plan_carrousel");
    const speero = document.querySelector(".sp");
    if (container && !speero) {
      observer.disconnect();
      init();
      observer.observe(doc, config);
    }
  });

  observer.observe(doc, config);
}

function init() {
  const targetSection = document.querySelector("#plan_carrousel");
  if (!targetSection) {
    return;
  }
  const slides = document.querySelectorAll("#plan_carrousel .swiper-slide");
  let carrousel = document.querySelector("#plan_carrousel");
  carrousel.classList.add("sp");
  let newSection = document.createElement("div");
  newSection.classList.add("sp-button-wrap");
  newSection.innerHTML = `<a class="sp-btn" href="${lang.btnLink}">${lang.btnText}</a>`;
  slides.forEach((slide) => {
    let btn = slide.querySelector("a");

    btn.insertAdjacentHTML(
      "afterend",
      `<a class="sp-btn" href="${lang.btnLink}">${lang.btnText}</a>`
    );
  });
}

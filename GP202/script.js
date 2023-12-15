var translations = {
  ["en-us"]: {
    header: "Choose wellness that moves you",
    tagline:
      "Explore thousands of popular in-person and on-demand options in our network.",
    nav1: "MENTAL WELLBEING",
    nav2: "PHYSICAL ACTIVITY",
    nav3: "NUTRITIONAL HEALTH",
    nav4: "HEALTHY HABITS",
    tab1Header: "Mental wellbeing",
    tab1Copy:
      "Emotional health is essential for everyone. Using Gympass, employees can access top-rated, premium apps for sleep, meditation, and stress management. ",
    tab1Img:
      "https://cdn.jsdelivr.net/gh/dynaen/goassets/GP/GP197/us/mental-desktop.png",
    tab1ImgSmall:
      "https://cdn.jsdelivr.net/gh/dynaen/goassets/GP/GP197/us/mental-mobile.png",
    tab1ImgSize: "480",
    tab2Header: "Physical activity",
    tab2Copy:
      "Movement helps us feel happier and healthier. With Gympass, employees get access to the best options for fitness, personal training, classes, and virtual workouts.",
    tab2Img:
      "https://cdn.jsdelivr.net/gh/dynaen/goassets/GP/GP197/us/physical-desktop.png",
    tab2ImgSmall:
      "https://cdn.jsdelivr.net/gh/dynaen/goassets/GP/GP197/us/physical-mobile.png",
    tab2ImgSize: "474",
    tab3Header: "Nutritional health",
    tab3Copy:
      "What we eat fuels our physical and mental wellbeing. Gympass members get top-rated, premium apps for nutritional guidance, recipes, grocery lists, and more!",
    tab3Img:
      "https://cdn.jsdelivr.net/gh/dynaen/goassets/GP/GP197/us/nutrition-desktop.png",
    tab3ImgSmall:
      "https://cdn.jsdelivr.net/gh/dynaen/goassets/GP/GP197/us/nutrition-mobile.png",
    tab3ImgSize: "320",
    tab4Header: "Healthy habits",
    tab4Copy:
      "Harnessing healthy habits is key to wellbeing. Gympass members can establish–and stick to–meaningful rituals for all types of self-care with science-backed premium apps.",
    tab4Img:
      "https://cdn.jsdelivr.net/gh/dynaen/goassets/GP/GP197/us/healthy-desktop.png",
    tab4ImgSmall:
      "https://cdn.jsdelivr.net/gh/dynaen/goassets/GP/GP197/us/healthy-mobile.png",
    tab4ImgSize: "478",
    btnLink: "https://gympass.com/en-us/companies#map",
    btnText: "Search gyms &amp; studios",
  },
  ["pt-br"]: {
    header: "Bem-estar em ação",
    tagline: "Nossa rede oferece milhares de opções presenciais e online.",
    nav1: "BEM-ESTAR MENTAL",
    nav2: "ATIVIDADES FÍSICAS",
    nav3: "NUTRIÇÃO",
    nav4: "HÁBITOS SAUDÁVEIS",
    tab1Header: "Bem-estar mental",
    tab1Copy:
      "Saúde emocional é fundamental para todos. Através do Gympass, os colaboradores têm acesso a apps premium para cuidar da qualidade do sono, meditar e controlar o estresse. ",
    tab1Img:
      "https://cdn.jsdelivr.net/gh/dynaen/goassets/GP/GP197/br/mental-br.png",
    tab1ImgSmall:
      "https://cdn.jsdelivr.net/gh/dynaen/goassets/GP/GP197/br/mental-br-mobile.png",
    tab1ImgSize: "475",
    tab2Header: "Atividades físicas",
    tab2Copy:
      "Estar em movimento nos traz felicidade e saúde. Com Gympass, os colaboradores têm à disposição as melhores opções em academias, personal trainers, aulas e treinos online.",
    tab2Img:
      "https://cdn.jsdelivr.net/gh/dynaen/goassets/GP/GP197/br/physical-br.png",
    tab2ImgSmall:
      "https://cdn.jsdelivr.net/gh/dynaen/goassets/GP/GP197/br/physical-br-mobile.png",
    tab2ImgSize: "477",

    tab3Header: "Nutrição",
    tab3Copy:
      "Nossa saúde física e mental dependem muito do que comemos. Com acesso a apps premium, os assinantes Gympass têm orientação nutricional, receitas saudáveis, listas de compras e muito mais!",
    tab3Img:
      "https://cdn.jsdelivr.net/gh/dynaen/goassets/GP/GP197/br/nutritional-br_.png",
    tab3ImgSmall:
      "https://cdn.jsdelivr.net/gh/dynaen/goassets/GP/GP197/br/nutritional-br-mobile_.png",
    tab3ImgSize: "479",
    tab4Header: "Hábitos saudáveis",
    tab4Copy:
      "Ter um estilo de vida saudável é a chave para o bem-estar. Com a ajuda dos nossos apps premium fundamentados na ciência, os usuários Gympass conseguem definir - e manter - uma rotina de autocuidado.",
    tab4Img:
      "https://cdn.jsdelivr.net/gh/dynaen/goassets/GP/GP197/br/healthy-br.png",
    tab4ImgSmall:
      "https://cdn.jsdelivr.net/gh/dynaen/goassets/GP/GP197/br/healthy-br-mobile.png",
    tab4ImgSize: "476.5",
    btnLink: "https://gympass.com/pt-br/companies#map",
    btnText: "Procurar academias e estúdios",
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
    const container = document.querySelector(
      "#wellbeing_roi + section ~ section"
    );
    const speero = document.querySelector(".speero-container");
    if (container && !speero) {
      observer.disconnect();
      init();
      observer.observe(doc, config);
    }
  });

  observer.observe(doc, config);
}

window.addEventListener("resize", setIndicator);
function init() {
  const targetSection = document.querySelector(
    "#wellbeing_roi + section ~ section"
  );
  if (!targetSection) {
    return;
  }
  targetSection.innerHTML = "";
  let newSection = document.createElement("div");
  newSection.classList.add("speero-container");
  newSection.innerHTML = `<div class="speero-container-inner"><h2>${lang.header}</h2><p class="tagline">${lang.tagline}</p>
            <nav class="nav">
  <div class="nav-wrap">
  <div class="nav-inner">
          <a id="nav-1" class="nav-link active">${lang.nav1}</a>
          <a id="nav-2" class="nav-link">${lang.nav2}</a>
          <a id="nav-3" class="nav-link">${lang.nav3}</a>
          <a id="nav-4" class="nav-link">${lang.nav4}</a>
          <div class="indicator"></div>
  </div>
  </div>
        </nav>
        <div class="speero-tab-content">
                <div data-id="nav-1">
                    <div class="col">
                        <h4>${lang.tab1Header}</h4>
                        <p>${lang.tab1Copy}</p>
                    </div>
                    <div class="col">
                    <div style="max-width:${lang.tab1ImgSize}px"><picture>
              <source media="(min-width: 650px)" srcset="${lang.tab1Img}"/>
              <img src="${lang.tab1ImgSmall}"/>
            </picture></div>
            </div>
                </div>
                <div data-id="nav-2">
                    <div class="col">
                        <h4>${lang.tab2Header}</h4>
                        <p>${lang.tab2Copy}</p>
                    </div>
                    <div class="col">
                    <div style="max-width:${lang.tab2ImgSize}px"><picture>
              <source media="(min-width: 650px)" srcset="${lang.tab2Img}"/>
              <img src="${lang.tab2ImgSmall}"/>
            </picture></div>
            </div>
                </div>
                <div data-id="nav-3">
                    <div class="col">
                        <h4>${lang.tab3Header}</h4>
                        <p>${lang.tab3Copy}</p>
                    </div>
                    <div class="col">
                    <div style="max-width:${lang.tab3ImgSize}px"><picture>
              <source media="(min-width: 650px)" srcset="${lang.tab3Img}"/>
              <img src="${lang.tab3ImgSmall}"/>
            </picture></div>
            </div>
                </div>
                <div data-id="nav-4">
                <div class="col">
                    <h4>${lang.tab4Header}</h4>
                    <p>${lang.tab4Copy}</p>
                </div>
                <div class="col">
                <div style="max-width:${lang.tab4ImgSize}px"><picture>
              <source media="(min-width: 650px)" srcset="${lang.tab4Img}"/>
              <img src="${lang.tab4ImgSmall}"/>
            </picture></div>
            </div>
                </div>
        </div>
        <div class="sp-button-wrap">
        <a color="vibin" href="${lang.btnLink}" target="_self" class="sp-button">${lang.btnText}</a>
        </div>
        </div>
            `;
  targetSection.append(newSection);
  const navlinks = document.querySelectorAll(".speero-container .nav-link");
  navlinks.forEach((element) => {
    element.addEventListener("click", tabChange);
  });
  setTimeout(function () {
    setIndicator();
  }, 250);
}

function tabChange(e) {
  e.preventDefault();
  let tab = e.target;

  let alltabs = document.querySelectorAll(".speero-container .nav-link");
  let tabs = document.querySelectorAll(".speero-tab-content > div");
  alltabs.forEach((ele) => {
    if (ele != tab) {
      ele.classList.remove("active");
    }
  });
  tabs.forEach((ele) => {
    ele.classList.remove("active");
  });
  tab.classList.add("active");
  setIndicator();
}
function setIndicator() {
  let indicator = document.querySelector(".indicator");
  let tab = document.querySelector(".speero-container .nav-link.active");
  if (indicator && tab) {
    indicator.style.width = tab.offsetWidth + "px";
    indicator.style.left = tab.offsetLeft + "px";
    indicator.style.top = tab.offsetTop + tab.offsetHeight + "px";
    let currentId = tab.id;
    let tabToShow = document.querySelector(
      `.speero-tab-content > div[data-id="${currentId}"]`
    );
    tabToShow.classList.add("active");
  }
}

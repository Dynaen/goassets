function checkIfReady(fn) {
  if (document.readyState != "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}
checkIfReady(function () {
  //is ready!
  newHero();
});
function newHero() {
  const targetNode = document.body;
  const config = { childList: true, subtree: true, characterData: true };
  
  const observer = new MutationObserver((mutations, obs) => {
    const pricewrap = document.querySelector("div[class^='styles__PriceWrapper'] h2 span");
    const leftcontainer = document.querySelector(
      "div[class^='styles__ContainerLeft'] div[class^='styles__Box']"
    );
    for (const mutation of mutations) {

      if (mutation.type === "characterData") {
        if (mutation.target.parentElement === document.querySelector("h1")) {
          obs.disconnect();
          updateNumbers();
          obs.observe(targetNode, config);
        }
      }
      if (pricewrap && leftcontainer && !document.querySelector("#eyebrow")) {
        obs.disconnect();
        init();
        obs.observe(targetNode, config);
      }
    }
  });
 observer.observe(targetNode, config);
}
function init() {
  document.querySelector("div[class^='styles__PriceWrapper']").id =
    "#sp-monthly";
  let eyebrow = document.querySelector("#eyebrow");
  if (!eyebrow) {
    document.querySelector("div[class^='styles__PriceWrapper']").textContent =
      getMonthlyPrice();
    priceTarget = document.querySelector(
      "div[class^='styles__ContainerLeft'] div[class^='styles__Box']"
    );
    let eyebrow = document.createElement("div");
    eyebrow.id = "eyebrow";
    eyebrow.classList.add("eyebrow");
    eyebrow.textContent = "Your custom quote";
    priceTarget.prepend(eyebrow);

    let tagline = document.querySelector(
      "div[class^='styles__DescriptionSection']"
    );
    if (tagline) {
      tagline.classList.add("sp-tagline");
      tagline.innerHTML = getEmployee();
    }
    let mainCTA = document.querySelector("div[class^='styles__ContainerLeft']  button[class*='styles__CustomButton'] span");
    if(mainCTA) {
    	mainCTA.innerHTML = `See subscription details`;
    }
    let sizeButton = document.querySelector(
      "div[class^='styles__ContainerLeft'] div[class^='styles__Box'] button"
    );
    let ctaWrapTarget = document.querySelector(
      "section[width='100%'] div[class^='styles__CTAWrapper']"
    );
    ctaWrapTarget.append(sizeButton);
  }
  //add stuff to the right..
  let rightContainer = document.querySelector(
    "div[class^='styles__ContainerRight']"
  );
  let svg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7071 6.29289C20.0976 6.68342 20.0976 7.31658 19.7071 7.70711L10.7071 16.7071C10.5196 16.8947 10.2652 17 10 17C9.73478 17 9.48043 16.8947 9.29289 16.7071L4.29289 11.7071C3.90237 11.3166 3.90237 10.6834 4.29289 10.2929C4.68342 9.9024 5.31658 9.9024 5.70711 10.2929L10 14.5858L18.2929 6.29289C18.6834 5.90237 19.3166 5.90237 19.7071 6.29289Z" fill="#D8385E"/>
  </svg>`;
  rightContainer.innerHTML = `<div class="eyebrow">WHAT YOUR COMPANY GETS</div>
    <ul id="sp-list">
    <li><div>${svg}<p>One platform to manage Gympass</p></div></li>
    <li><div>${svg}<p>Company enrollment assistance</p></div></li>
    <li><div>${svg}<p>Employee support services</p></div></li>
    <li><div>${svg}<p>Wellness program resources</p></div></li>
    <li><div>${svg}<p>Family member access option</p></div></li>
    </ul>`;
}

function updateNumbers() {
  let monthlyPrice = document.querySelector(
    "div[class^='styles__PriceWrapper']"
  );
  monthlyPrice.id = "#sp-monthly";
  let initRan = document.querySelector("#eyebrow");
  let tagline = document.querySelector(
    "div[class^='styles__DescriptionSection']"
  );
  let mainCTA = document.querySelector("div[class^='styles__ContainerLeft']  button[class*='styles__CustomButton'] span");
  if (!initRan) {
    init();
    return;
  }
  monthlyPrice.textContent = getMonthlyPrice();
  tagline.innerHTML = getEmployee();
  mainCTA.innerHTML = `See subscription details`;
}

function getEmployee() {
  let stringwithnumber = document.querySelector("#__next h1").textContent;
  let number = stringwithnumber.replace(/\D+/g, "");
  let newString = `Company subscription for ${number} people.`;
  return newString;
}
function getMonthlyPrice() {
  let inner = document.querySelector(
    "div[class^='styles__PriceWrapper']"
  ).textContent;
  let newString = `${inner}/month`;
  return newString;
}

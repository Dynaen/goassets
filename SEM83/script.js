var waitForHero = function (callback, maxTimes = false) {
  console.log(
    document.querySelector(
      'div[data-test="root-search-section"] div[class*="search_icon__"]'
    ) &&
      document.querySelector('div[class^="search_icon__"]').style.opacity ===
        "0.9"
  );
  if (
    document.querySelector(
      'div[data-test="root-search-section"] div[class^="search_icon__"]'
    ) &&
    document.querySelector(
      'div[data-test="root-search-section"] div[class^="search_icon__"]'
    ).style.opacity === "0.9"
  ) {
    callback();
  } else {
    if (maxTimes === false || maxTimes > 0) {
      maxTimes != false && maxTimes--;
      setTimeout(function () {
        waitForHero(callback, maxTimes);
      }, 5);
    }
  }
};
waitForHero(function () {
  let iconWrap = document.querySelector(
    'div[data-test="root-search-section"] div[class^="search_icon__"]'
  );
  console.log(iconWrap);
  iconWrap.innerHTML = `<svg id="sp" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="7.84068" cy="7.84068" r="6.54068" transform="matrix(-1 0 0 1 19.146 2)" stroke="#191B23" stroke-width="2.6"/>
<rect width="8" height="2.6" rx="0.392034" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 22.3486 19.6415)" fill="#191B23"/>
</svg>`;
}, 200);

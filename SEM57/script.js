function checkIfReady(fn) {
  if (document.readyState != "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}
checkIfReady(function () {
  window.addEventListener("scroll", testScroll);
});

function testScroll() {
  if (window.scrollY + window.innerHeight > document.body.clientHeight / 4) {
    if (sessionStorage.getItem("SEM57") === "true") {
      return;
    }
    sessionStorage.setItem("SEM57", "true");
    showPopup();
  }
}

function showPopup() {
  window.removeEventListener("scroll", testScroll);

  let banner = document.createElement("div");
  banner.id = "speero-content-banner";
  banner.innerHTML = `<div class="banner-block"><div id="close-btn">
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M13 1L8.001 6L3 1L1 3.001L6.001 8L1 13.001L3 15L8.001 10L13 15L15.001 13.001L10 8L15.001 3.001L13 1Z" fill="#181A22"/>
  </svg>
  </div>
            <div class="content">
              <div class="banner-body-container">
                  <div class="banner-header-container">
                      <p class="banner-heading">Unlock Comprehensive Insights for Any Website!</p>
                  </div>
                  <ul class="speero-list">
                  <li>Dive into deep traffic analysis</li>
                  <li>Their most important pages</li>
                  <li>Which keywords they target</li>
                  <li>How they make money</li>
                  </ul>
                  <div class="cta">
                      <div id="banner-cta" class="btn-link">Get Started For Free →</div>
                      <p class="sub-text">Enjoy 10 Free Daily Requests on Us When You Sign Up</p>
                  </div>
                </div>
                <div class="banner-image">
                  <img data-test="no-border" class="lazyloaded img-1" src="https://cdn.jsdelivr.net/gh/dynaen/goassets/SEM57.png">
                </div>
            </div>
        </div>
        <div class="sp-overlay"></div>`;
  document.querySelector("body").appendChild(banner);
  if (document.querySelector("#speero-content-banner")) {
    document.querySelector(".banner-block").addEventListener("click", ctaClick);
    document.querySelector(".sp-overlay").addEventListener("click", closePopup);
  }
  function ctaClick(e) {
    if (e.target.id === "close-btn") {
      document.querySelector("#speero-content-banner").remove();
    } else {
      window.location =
        "https://www.semrush.com/signup/?src=mapages&onboarding=off&custom=ci";
    }
  }
  function closePopup() {
    document.querySelector("#speero-content-banner").remove();
  }
}

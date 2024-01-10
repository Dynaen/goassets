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
let auth;
const texts = {
  ["Unauthenticated."]: {
    header:
      "Your competitors are using tools to boost their marketing reach. Don't get left behind!",
    listitem1: "Reveal competitor secrets and strategies",
    listitem2: "Find untapped keywords",
    listitem3: "Discover winning content ideas",
    listitem4: "Get on-page SEO recommendations",
    listitem5: "Fix technical errors and optimization issues",
    listitem6: "Get more traffic and conversions",
    button: "Get Your Free Account",
    sub: "Try our powerful stack of marketing tools for free.",
  },
  ["free"]: {
    header:
      "While you do everything yourself, your competitors are using powerful tools to gain an edge. Catch up!",
    listitem1: "Uncover competitor strategies",
    listitem2: "Find profitable keywords",
    listitem3: "Discover winning content ideas",
    listitem4: "Optimize your website for Google",
    listitem5: "Implement high-impact SEO suggestions",
    listitem6: "Boost traffic, engagement, and conversions",
    button: "Start Your Free Trial",
    sub: "Get full access to our 55+ marketing tools for free.",
  },
  ["admin_free"]: {
    header:
      "While you do everything yourself, your competitors are using powerful tools to gain an edge. Catch up!",
    listitem1: "Uncover competitor strategies",
    listitem2: "Find profitable keywords",
    listitem3: "Discover winning content ideas",
    listitem4: "Optimize your website for Google",
    listitem5: "Implement high-impact SEO suggestions",
    listitem6: "Boost traffic, engagement, and conversions",
    button: "Start Your Free Trial",
    sub: "Get full access to our 55+ marketing tools for free.",
  },
  ["trial"]: {
    header:
      "When your free trial ends, so will your advantage. Don't let your competitors gain an edge!",
    listitem1: "Develop SEO-friendly content strategies",
    listitem2: "Boost organic search rankings",
    listitem3: "Uncover high-impact keywords",
    listitem4: "Leverage diverse marketing channels",
    listitem5: "Optimize on-page elements",
    listitem6: "Monitor keyword positions and analytics",
    button: "Get Full Access",
    sub: "Let us help you stay on top of the competition.",
  },
};
function testScroll() {
  //check if scroll is 25%
  if (window.scrollY + window.innerHeight > document.body.clientHeight / 4) {
    if (sessionStorage.getItem("sem80") === "true") {
      return;
    }
    sessionStorage.setItem("sem80", "true");

    async function getData() {
      const response = await fetch("api/v3/auth/info");
      const data = await response.json();
      if (data.data.message) {
        auth = data.data.message;
      }
      if (data.data.paidStatus) {
        auth = data.data.paidStatus;
      }
      return data;
    }
    getData().then(showPopup);
  }
}

function showPopup(data) {
  window.removeEventListener("scroll", testScroll);
  let banner = document.createElement("div");
  banner.id = "speero-content-banner";
  banner.innerHTML = `<div class="banner-block"><div id="close-btn">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M20.707 4.70698C20.8891 4.51838 20.9899 4.26578 20.9877 4.00358C20.9854 3.74138 20.8802 3.49057 20.6948 3.30516C20.5094 3.11975 20.2586 3.01458 19.9964 3.01231C19.7342 3.01003 19.4816 3.11082 19.293 3.29298L12 10.586L4.70699 3.29298C4.51839 3.11082 4.26579 3.01003 4.00359 3.01231C3.74139 3.01458 3.49058 3.11975 3.30517 3.30516C3.11976 3.49057 3.01459 3.74138 3.01232 4.00358C3.01004 4.26578 3.11083 4.51838 3.29299 4.70698L10.586 12L3.29299 19.293C3.19748 19.3852 3.1213 19.4956 3.06889 19.6176C3.01648 19.7396 2.98889 19.8708 2.98774 20.0036C2.98659 20.1364 3.01189 20.268 3.06217 20.3909C3.11245 20.5138 3.1867 20.6255 3.28059 20.7194C3.37449 20.8133 3.48614 20.8875 3.60904 20.9378C3.73193 20.9881 3.86361 21.0134 3.99639 21.0122C4.12917 21.0111 4.26039 20.9835 4.38239 20.9311C4.5044 20.8787 4.61474 20.8025 4.70699 20.707L12 13.414L19.293 20.707C19.4816 20.8891 19.7342 20.9899 19.9964 20.9877C20.2586 20.9854 20.5094 20.8802 20.6948 20.6948C20.8802 20.5094 20.9854 20.2586 20.9877 19.9964C20.9899 19.7342 20.8891 19.4816 20.707 19.293L13.414 12L20.707 4.70698Z" fill="#A7ABB7"/>
  </svg></div>
              <div class="content">
                  <div class="banner-header-container">
                      <p class="banner-heading">${texts[auth].header}</p>
                  </div>
                  <div class="cta">
                      <div id="banner-cta" class="btn-link">${texts[auth].button}</div>
                      <p class="sub-text">${texts[auth].sub}</p>
                  </div>
                  <div class="inner">
                      <ul class="speero-list">
                      <li>${texts[auth].listitem1}</li>
                      <li>${texts[auth].listitem2}</li>
                      <li>${texts[auth].listitem3}</li>
                      <li>${texts[auth].listitem4}</li>
                      <li>${texts[auth].listitem5}</li>
                      <li>${texts[auth].listitem6}</li>
                      </ul>
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
        "https://www.semrush.com/signup/get-free-trial/?src=blog&onboarding=off";
    }
  }
  function closePopup() {
    document.querySelector("#speero-content-banner").remove();
  }
}

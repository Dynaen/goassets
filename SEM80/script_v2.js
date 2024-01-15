function checkIfReady(fn) {
  if (document.readyState != "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}
checkIfReady(function () {
  runobs();
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

function runobs() {
  console.debug("run observer");
  const targetNode = document.querySelector("body");
  const config = { childList: true, subtree: true };
  const callback = (mutationsList, observer) => {
    let element = document.querySelector("div[data-test='semrush-popup']");
    if (document.contains(element)) {
      observer.disconnect();
      getData().then(showPopup);
    }
  };
  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
}
async function getData() {
  try {
    const response = await fetch("https://www.semrush.com/blog/api/v3/auth/info");
    const data = await response.json();
    if (data.data) {
      auth = data.data.paidStatus;
      return auth
    }
    const err = await res.json();
  } catch (err) {
    auth = "Unauthenticated.";
  }
}

function showPopup() {
  let header = document.querySelector("div[data-test='semrush-popup'] h6");
  let listitem1 = document.querySelector(
    "div[data-test='semrush-popup'] ul li:nth-child(1)"
  );
  let listitem2 = document.querySelector(
    "div[data-test='semrush-popup'] ul li:nth-child(2)"
  );
  let listitem3 = document.querySelector(
    "div[data-test='semrush-popup'] ul li:nth-child(3)"
  );
  let listitem4 = document.querySelector(
    "div[data-test='semrush-popup'] ul li:nth-child(4)"
  );
  let listitem5 = document.querySelector(
    "div[data-test='semrush-popup'] ul li:nth-child(5)"
  );
  let listitem6 = document.querySelector(
    "div[data-test='semrush-popup'] ul li:nth-child(6)"
  );
  let btn = document.querySelector(
    "div[data-test='semrush-popup'] a[data-test='cta-button']"
  );
  let sub = document.querySelector(
    "div[data-test='semrush-popup'] span[data-test='description']"
  );
  header.innerHTML = `${texts[auth].header}`;
  listitem1.textContent = `${texts[auth].listitem1}`;
  listitem2.textContent = `${texts[auth].listitem2}`;
  listitem3.textContent = `${texts[auth].listitem3}`;
  listitem4.textContent = `${texts[auth].listitem4}`;
  listitem5.textContent = `${texts[auth].listitem5}`;
  listitem6.textContent = `${texts[auth].listitem6}`;
  btn.textContent = `${texts[auth].button}`;
  sub.textContent = `${texts[auth].sub}`;
}

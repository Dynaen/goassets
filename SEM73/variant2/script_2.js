function checkIfReady(fn) {
  if (document.readyState != "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}
checkIfReady(function () {
  createWidget();
  getData();
});

function createWidget() {
  let uri = window.location.href;
  let currentURL = encodeURIComponent(uri);
  const article = document.querySelector(
    "div[data-test='template-article-base'] div[data-parse] + div"
  );

  const widget = document.createElement("div");
  widget.id = "sp-widget";
  widget.innerHTML = `<h6>Page Metrics for November</h6>
    <p class="sp-strapline">Data from Sermrush tools</p>
    <div class="sp-cols">
    <a href="https://www.semrush.com/analytics/overview/?searchType=subfolder&q=${currentURL}" id="traffic" class="sp-col"><p class="sp-numbers">XXX</p><p>monthly traffic</p></a>
    <a href="https://www.semrush.com/analytics/organic/overview/?db=us&q=${currentURL}&searchType=subfolder" id="keywords" class="sp-col"><p class="sp-numbers">XXX</p><p>keywords driving traffic</p></a>
    <a href="https://www.semrush.com/analytics/backlinks/overview/?q=${currentURL}&protocol=https&currency=usd" id="backlinks" class="sp-col"><p class="sp-numbers">XXX</p><p>sources linking to this page</p></a>
    </div>
    <a href="https://www.semrush.com/signup/get-free-trial/?src=blog&onboarding=off" id="sp-cta"><span data-test="text-content">Try for Free →</span></a>
    <p class="sp-cta-sub">Get these stats and more for any page!</p>`;
  if (article) {
    article.prepend(widget);
    let widgetHeight = document.querySelector("#sp-widget").clientHeight;
    let otherWidget = document.querySelector(
      "section[data-test='domain-overview-widget']"
    );
    if (otherWidget) {
      otherWidget.style.top = `${widgetHeight + 136 + 16}px`;
    }
  }
}
async function getData() {
  var URLmatches = false;
  const response = await fetch(
    "https://cdn.jsdelivr.net/gh/dynaen/goassets/SEM73/sem73.json"
  );
  const entries = await response.json();
  for (var i = 0; i < entries.length; i++) {
    if (entries[i].URL == window.location.href) {
      let traffic = document.querySelector("#traffic > .sp-numbers");
      if (traffic) {
        traffic.textContent = entries[i].Traffic;
      }
      let keywords = document.querySelector("#keywords > .sp-numbers");
      if (keywords) {
        keywords.textContent = entries[i].Keywords;
      }
      let backlinks = document.querySelector("#backlinks > .sp-numbers");
      if (backlinks) {
        backlinks.textContent = entries[i].Backlinks;
      }
      URLmatches = true;
      break;
    }
  }
  return URLmatches;
}

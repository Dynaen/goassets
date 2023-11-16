function checkIfReady(fn) {
  if (document.readyState != "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}
checkIfReady(function () {
  createWidget();
});

function createWidget() {
  let uri = window.location.href;
  let currentURL = encodeURIComponent(uri);
  const article = document.querySelector(
    "div[data-test='template-article-base'] div[data-parse] + div"
  );

  const widget = document.createElement("div");
  widget.id = "sp-widget";
  widget.innerHTML = `<h6>Page Metrics for [month]</h6>
    <p class="sp-strapline">Data from Sermrush tools</p>
    <div class="sp-cols">
    <div class="sp-col"><p class="sp-numbers">XXX</p><p>monthly traffic</p></div>
    <div class="sp-col"><p class="sp-numbers">XXX</p><p>keywords driving traffic</p></div>
    <div class="sp-col"><p class="sp-numbers">XXX</p><p>sources linking to this page</p></div>
    </div>
    <a href="https://www.semrush.com/analytics/overview/?searchType=subfolder&q=${currentURL}" id="sp-cta"><span data-test="text-content">Try for Free →</span></a>
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

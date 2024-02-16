function checkIfReady(fn) {
  if (document.readyState != "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}
checkIfReady(function () {
  //is ready!
  makeWidget();
});

function makeWidget() {
  const original = document.querySelector(
    "section[data-test='domain-overview-widget']"
  );
  let copy = original.cloneNode(true);

  copy.id = "sp-widget";
  original.parentElement.append(copy);
  original.remove();
  const header = "Get Instant Domain Overview";
  const sub =
    "Discover your competitors' strengths and leverage them to achieve your own success";
  const footer = "Free Competitor Analysis Tool";
  const placeholdertxt = "Enter a domain or URL";

  let orgHeader = document.querySelector("#sp-widget h6");
  let orgSub = document.querySelector("#sp-widget h6 + p");
  let orgInput = document.querySelector("#sp-widget input");
  let orgButton = document.querySelector("#sp-widget button");
  let orgfooter = document.querySelector("#sp-widget div + p");

  orgHeader.textContent = header;
  orgSub.textContent = sub;
  orgInput.placeholder = placeholdertxt;
  orgfooter.textContent = footer;

  orgButton.addEventListener("click", initsearch);
  orgInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      initsearch(e);
    }
  });
}

function initsearch(e) {
  console.log("click");
  let searchParameter = encodeURIComponent(
    document.querySelector("section[data-test='domain-overview-widget'] input")
      .value
  );
  const fullUrl = `https://www.semrush.com/signup/?onboarding=off&src=blog&redirect_to=%2Fanalytics%2Foverview%2F%3FsearchType%3Ddomain%26q%3D${searchParameter}`;
  window.open(fullUrl, "_blank");
}

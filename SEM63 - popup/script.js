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

function runobs() {
  const targetNode = document.querySelector("body");
  const config = { childList: true, subtree: true };
  const callback = (mutationsList, observer) => {
    let element = document.querySelector("div[data-test='semrush-popup']");
    if (document.contains(element)) {
      observer.disconnect();
      showPopup();
    }
  };
  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
}

function showPopup() {
  let main = document.querySelector("div[data-test='semrush-popup']");
  main.classList.add("speero-pop");
  let head = main.querySelector("h6");
  head.innerHTML = `Your competitors are optimizing their websites.<span>Are you?</span>`;
  let tagline = main.querySelector("h6 + p");
  tagline.remove();
  let listItems = main.querySelector("ul");
  let btn = main.querySelector("button[data-test='cta-button'] span span");
  btn.textContent = "Create Free Account";
  let btntagline = main.querySelector("span[data-test='description']");
  btntagline.textContent = "Don’t miss out. Try 55+ products for free.";
  let sub = document.querySelector("span[data-test='description']");
  sub.innerHTML = "Don’t miss out. Try 55+ products for free.";
  listItems.classList.add("speero-list");
  listItems.innerHTML = `
      <li>Analyze competitor strategies</li>
      <li>Find profitable keywords</li>
      <li>Create winning content</li>
      <li>Get more organic traffic</li>
      <li>Fix technical errors</li>
      <li>Identify link building opportunities</li>
      `;
}

function checkIfReady(fn) {
  if (document.readyState != "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}
checkIfReady(function () {
  addUVPS();
});

const checkmark = `<svg xmlns="http://www.w3.org/2000/svg" width="11" height="8" viewBox="0 0 11 8" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7071 0.292847C11.0976 0.683372 11.0976 1.31654 10.7071 1.70706L4.71109 7.70715C4.32057 8.09767 3.6874 8.09767 3.29688 7.70715L0.292909 4.6994C-0.0976152 4.30888 -0.0976152 3.6757 0.292909 3.28517C0.683433 2.89465 1.3166 2.89465 1.70712 3.28517L4.00399 5.58583L9.29288 0.292847C9.6834 -0.0976769 10.3166 -0.0976769 10.7071 0.292847Z" fill="#FF642D"/>
    </svg>`;
function addUVPS() {
  if (!document.querySelector("div[class^='summary_ctaBlock_']")) {
    return;
  }
  let mainContainer = document.querySelector("div[class^='summary_ctaBlock_']");
  let header = mainContainer.querySelector("p");
  header.textContent = "Reveal More Competitor Secrets for Free";
  let listItems = document.createElement("ul");
  listItems.innerHTML = `
      <li>${checkmark}Which keywords they target</li>
      <li>${checkmark}Their most important pages</li>
      <li>${checkmark}Where their traffic comes from</li>
      <li>${checkmark}Where they get backlinks from</li>
      <li>${checkmark}How they monetize their site</li>`;
  mainContainer.insertBefore(listItems, header.nextElementSibling);
  let cta = mainContainer.querySelector("a");
  cta.textContent = "Get More Free Data";
}

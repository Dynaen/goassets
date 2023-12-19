function checkIfReady(fn) {
  if (document.readyState != "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}
checkIfReady(function () {
  let target = document.querySelector(
    "div[data-path='header'][data-test='sticky-header-base']"
  );
  if (target) {
    createPopup(target);
  }
  checkHeader();
});

function checkHeader() {
  const targetNode = document.querySelector("body");
  const config = { childList: true, subtree: true };

  const callback = (mutationsList, observer) => {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        for (let node of mutation.addedNodes) {
          if (!(node instanceof HTMLElement)) continue;
          if (
            node.matches(
              "div[data-path='header'][data-test='sticky-header-base']"
            )
          ) {
            //console.log("sticky base!!");
            createPopup(node);
          }

          if (
            node.matches(
              "div[data-path='header']:not([data-test='sticky-header-base'])"
            )
          ) {
            createPopup(node);
          }
          if (
            node == document.querySelector("#root").parentElement ||
            node == document.querySelector("#root")
          ) {
            if (
              document.querySelector(
                "div[data-path='header'][data-test='sticky-header-base']"
              )
            ) {
              let sticky = document.querySelector(
                "div[data-path='header'][data-test='sticky-header-base']"
              );
              createPopup(sticky);
            }
            if (
              document.querySelector(
                "div[data-path='header']:not([data-test='sticky-header-base']"
              )
            ) {
              let nonsticky = document.querySelector(
                "div[data-path='header']:not([data-test='sticky-header-base']"
              );
              createPopup(nonsticky);
            }
          }
        }
      }
    }
  };
  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
}
function createPopup(menuTarget) {
  let inputfieldwrap = document.querySelector(
    ".___SBoxInline_jkgv4_gg_.search_trigger__pvVhV"
  );
  let btn = document.querySelector(
    ".search_button__mgl2v.___SButton_1a5qt_gg_._size_m_1a5qt_gg_._theme_primary-info_1a5qt_gg_"
  );
  let inputfield = document.querySelector("input[data-test='search_input']");
  if (
    menuTarget ==
    document.querySelector(
      "div[data-path='header'][data-test='sticky-header-base']"
    )
  ) {
    let menu = menuTarget.querySelector(
      "div[class^='horizontal-wrapper_main'] > div"
    );
    let wrapper = document.createElement("div");
    wrapper.id = "sp-wrap";
    menu.append(wrapper);
    wrapper.append(inputfieldwrap);
    wrapper.append(btn);
    /*menu.append(inputfieldwrap);
    menu.append(btn);*/
    let inputfield = document.querySelector("input[data-test='search_input']");
    if (inputfield) {
      inputfield.placeholder = "Enter domain";
    }
  } else {
    console.log("non-sticky");
    //console.log("non sticky..");
    let regular = document.querySelector("div[data-test='root-search-section'");
    if (regular) {
      let targetDIV = document.querySelector(
        "div[data-test='search-examples']"
      );
      regular.insertBefore(inputfieldwrap, targetDIV);
      regular.insertBefore(btn, targetDIV);
    }
    let domainSearch = document.querySelector(
      "div[class*='domain-page_search___']"
    );
    if (domainSearch) {
      domainSearch.append(inputfieldwrap);
      domainSearch.append(btn);
    }
    let topDomainSearch = document.querySelector(
      "div[class*='top-page_search__']"
    );
    if (topDomainSearch) {
      topDomainSearch.append(inputfieldwrap);
      topDomainSearch.append(btn);
    }
    //let inputfield = document.querySelector("input[data-test='search_input']");
    if (inputfield) {
      inputfield.placeholder = "Enter domain and get more information";
    }
  }
}

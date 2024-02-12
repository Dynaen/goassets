const targets = [
  {
    targetUrl: "https://www.semrush.com/blog/keyword-search-volume/",
    targetHeader: "how-do-you-find-keywords",
  },
  {
    targetUrl: "https://www.semrush.com/blog/google-keyword-planner/",
    targetHeader: "conduct-in-depth-keyword-research",
  },
  {
    targetUrl: "https://www.semrush.com/blog/keyword-research-guide-for-seo/",
    targetHeader: "step-2:-analyzing-keywords",
  },
  {
    targetUrl:
      "https://www.semrush.com/blog/types-of-keywords-commercial-informational-navigational-transactional/",
    targetHeader: "3--find-keywords-by-intent",
  },
  {
    targetUrl: "https://www.semrush.com/blog/related-keywords/",
    targetHeader: "1--do-keyword-research",
  },
  {
    targetUrl: "https://www.semrush.com/blog/most-searched-keywords-google/",
    targetHeader: "find-popular-keywords-in-your-niche-with-semrush",
  },
  {
    targetUrl: "https://www.semrush.com/blog/how-to-choose-long-tail-keywords/",
    targetHeader: "how-to-identify-long-tail-keywords",
  },
  {
    targetUrl: "https://www.semrush.com/blog/keyword-research-tools/",
    targetHeader: "1--keyword-magic-tool",
  },
  {
    targetUrl: "https://www.semrush.com/blog/keyword-match-types/",
    targetHeader: "how-to-find-keywords-for-ppc-and-seo",
  },
  {
    targetUrl:
      "https://www.semrush.com/blog/what-are-keywords-simple-keyword-definition/",
    targetHeader: "how-to-find-keywords-for-seo",
  },
];

//remove this part and call validateUrl(targets) if script is loaded after React is fully loaded.
//below is waiting for last element to be present, so the page can be manipulated.
var waitLastElement = function (callback, maxTimes = false) {
  if (document.querySelector('section[data-region="c1"]')) {
    callback(targets);
  } else {
    if (maxTimes === false || maxTimes > 0) {
      maxTimes != false && maxTimes--;
      setTimeout(function () {
        waitLastElement(callback, maxTimes);
      }, 5);
    }
  }
};
waitLastElement(function (targets) {
  validateUrl(targets);
}, 200);

function validateUrl(targets) {
  targets.forEach((targetPage) => {
    let originUrl = window.location.origin;
    let pathUrl = window.location.pathname;
    let currentPage = originUrl + pathUrl;
    if (
      currentPage == targetPage.targetUrl &&
      document.querySelector(`[id="${targetPage.targetHeader}"`)
    ) {
      createWidget(document.querySelector(`[id="${targetPage.targetHeader}"`));
    }
  });
}

function createWidget(targetAfter) {
  let widget = document.createElement("div");

  widget.innerHTML = `<p>Jumpstart your research by discovering important keywords for your business and filtering them based on your specific content goals.
    <br/><br/>
    Take a quick interactive tour of our Keyword Magic Tool to learn more.</p>
    <div>
    <script src="https://js.storylane.io/js/v1/storylane.js"></script>
    <div class="sl-embed" style="position:relative;padding-bottom:calc(65.86% + 27px);width:100%;height:0;transform:scale(1)">
      <iframe class="sl-demo" src="https://app.storylane.io/demo/rj2y66bdtlds" name="sl-embed" allow="fullscreen; camera; microphone" style="position:absolute;top:0;left:0;width:100%;height:100%;border:1px solid rgba(63,95,172,0.35);box-shadow: 0px 0px 18px rgba(26, 19, 72, 0.15);border-radius:10px;box-sizing:border-box;"></iframe>
    </div>
  </div>`;
  targetAfter.parentNode.insertBefore(widget, targetAfter.nextSibling);
}

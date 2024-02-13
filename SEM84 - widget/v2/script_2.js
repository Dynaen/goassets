const targets = [
  {
    targetUrl: "https://www.semrush.com/blog/keyword-search-volume/",
    targetHeader: "semrush-keyword-magic-tool",
  },
  {
    targetUrl: "https://www.semrush.com/blog/google-keyword-planner/",
    targetHeader: "conduct-in-depth-keyword-research",
  },
  {
    targetUrl: "https://www.semrush.com/blog/keyword-research-guide-for-seo/",
    targetHeader: "use-a-seed-keyword-to-get-more-keyword-ideas",
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
    targetHeader: "use-the-keyword-magic-tool",
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
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://js.storylane.io/js/v1/storylane.js";

  document.head.appendChild(script);

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
        <div style="text-align: center;">
        <script src="https://js.storylane.io/js/v1/storylane.js"></script>
        <button onclick="Storylane.Play({type: 'popup', demo_type: 'image', width: 1280, height: 843, scale: '0.95', demo_url: 'https://app.storylane.io/demo/rj2y66bdtlds', padding_bottom: 'calc(65.86% + 27px)'})" class="sl-preview-cta" style="margin-top: 15px;text-align: center;background-color:#ff642dff;border:none;border-radius:8px;box-shadow:0px 0px 15px rgba(26, 19, 72, 0.45);color:#FFFFFF;display:inline-block;font-family:Poppins, Arial, sans-serif;font-size:clamp(16px, 1.599vw, 20px);font-weight:600;height:clamp(40px, 3.996vw, 50px);line-height:1.2;padding:0 clamp(15px, 1.776vw, 20px);text-overflow:ellipsis;transform:translateZ(0);transition:background 0.4s;white-space:nowrap;width:auto;z-index:999999;cursor:pointer">Start the Tour<div class="sl-preview-cta-ripple" style="position:absolute;border:1px solid #ff642dff;inset:0;border-radius:inherit;pointer-events:none"><div class="sl-preview-cta-ripple-shadow" style="box-shadow:#ff642dff 0px 0px 4px 4px;opacity:0;border-radius:inherit;position:absolute;inset:0"></div></div></button><style>.sl-preview-cta:hover .sl-preview-cta-ripple{transition:all 1s cubic-bezier(0,0,.2,1);inset:-0.75em!important;opacity:0!important}.sl-preview-cta:hover .sl-preview-cta-ripple-shadow{opacity:0.125!important;}</style>
      </div>`;
  targetAfter.parentNode.insertBefore(widget, targetAfter.nextSibling);
}

Storylane.Play({
  type: "popup",
  demo_type: "image",
  width: 1280,
  height: 843,
  scale: "0.95",
  demo_url: "https://app.storylane.io/demo/rj2y66bdtlds",
  padding_bottom: "calc(65.86% + 27px)",
});

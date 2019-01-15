"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../css/style.scss");
require("./oldScripts.js");
// From https://fontawesome.com/how-to-use/on-the-web/other-topics/server-side-rendering:
// "If the CSS is missing when this icon displays in the browser it will flash
// from a very large icon down to a properly sized one a moment later."
require("@fortawesome/fontawesome-svg-core/styles.css");
var Analytics_1 = require("./Analytics");
var runChartsIndexPage_1 = require("./runChartsIndexPage");
var SiteHeaderMenus_1 = require("./SiteHeaderMenus");
Analytics_1.Analytics.logEvent("OWID_PAGE_LOAD");
var search = document.querySelector("form#search-nav");
if (search) {
    var input_1 = search.querySelector("input[type=search]");
    var lastQuery = "";
    search.addEventListener('submit', function (ev) {
        ev.preventDefault();
        Analytics_1.Analytics.logEvent("OWID_SITE_SEARCH", { query: input_1.value }).then(function () { return search.submit(); }).catch(function () { return search.submit(); });
    });
}
function getParent(el, condition) {
    var current = el;
    while (current) {
        if (condition(current))
            return current;
        current = current.parentElement;
    }
    return null;
}
var trackedLinkExists = !!document.querySelector("a[data-track-click]");
if (trackedLinkExists) {
    document.addEventListener("click", function (ev) {
        var targetElement = ev.target;
        var trackedElement = getParent(targetElement, function (el) { return el.getAttribute("data-track-click") != null; });
        if (trackedElement) {
            // Note this will not work on anchor tags without target=_blank, as
            // they immediately navigate away before the event can be sent.
            // To handle those we need to wait before navigating.
            Analytics_1.Analytics.logEvent("OWID_SITE_CLICK", {
                text: trackedElement.innerText,
                href: trackedElement.getAttribute("href")
            });
        }
    });
}
window.runChartsIndexPage = runChartsIndexPage_1.runChartsIndexPage;
window.runHeaderMenus = SiteHeaderMenus_1.runHeaderMenus;
SiteHeaderMenus_1.runHeaderMenus();
//# sourceMappingURL=owid.entry.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../css/style.scss");
require("./oldScripts.js");
var Analytics_1 = require("./Analytics");
Analytics_1.Analytics.logEvent("OWID_PAGE_LOAD");
var search = document.querySelector("form#search-nav");
if (search) {
    var input_1 = search.querySelector("input[type=search]");
    var lastQuery = "";
    search.addEventListener('submit', function (ev) {
        ev.preventDefault();
        Analytics_1.Analytics.logEvent("OWID_SITE_SEARCH", { query: input_1.value, href: window.location.href }).then(function () { return search.submit(); }).catch(function () { return search.submit(); });
    });
}
//# sourceMappingURL=owid.entry.js.map
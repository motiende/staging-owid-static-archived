"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fuzzysort = require("fuzzysort");
var _ = require("lodash");
var mobx_1 = require("mobx");
function encodeHashSafe(s) {
    return encodeURIComponent(s.replace(/ /g, "-"));
}
function decodeHashSafe(s) {
    return decodeURIComponent(s).replace(/-/g, " ");
}
var ChartSearcher = /** @class */ (function () {
    function ChartSearcher() {
        this.chartItems = [];
        this.chartItemsByTitle = {};
        this.results = [];
        this.sections = [];
        this.query = "";
        this.searchInput = document.querySelector(".chartsSearchInput");
        this.sections = Array.from(document.querySelectorAll(".ChartsIndexPage main section"));
        var lis = Array.from(document.querySelectorAll(".ChartsIndexPage main li"));
        this.chartItems = lis.map(function (li) { return ({
            title: li.textContent.replace(/₂/g, '2'),
            li: li,
            ul: li.closest('ul')
        }); });
        this.chartItemsByTitle = _.keyBy(this.chartItems, 'title');
        this.strings = this.chartItems.map(function (c) { return fuzzysort.prepare(c.title); });
    }
    Object.defineProperty(ChartSearcher.prototype, "searchStrings", {
        get: function () {
            return this.chartItems.map(function (c) { return fuzzysort.prepare(c.title); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartSearcher.prototype, "searchResults", {
        get: function () {
            return fuzzysort.go(this.query, this.searchStrings, { threshold: -150 });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartSearcher.prototype, "resultsByTitle", {
        get: function () {
            return _.keyBy(this.searchResults, 'target');
        },
        enumerable: true,
        configurable: true
    });
    ChartSearcher.prototype.onSearchInput = function () {
        this.query = this.searchInput.value;
    };
    /*@action.bound onKeydown(ev: KeyboardEvent) {
        if (ev.keyCode === 13 && this.query && this.searchResults.length) {
            const href = this.chartItemsByTitle[this.searchResults[0].target].li.children[0].getAttribute('href') as string
            window.location.assign(href)
        }
    }*/
    ChartSearcher.prototype.render = function () {
        history.replaceState(null, document.title, window.location.pathname + (this.query ? "#search=" + encodeHashSafe(this.query) : ""));
        if (!this.query) {
            for (var _i = 0, _a = this.sections; _i < _a.length; _i++) {
                var section = _a[_i];
                section.style.display = null;
            }
            for (var _b = 0, _c = this.chartItems; _b < _c.length; _b++) {
                var c = _c[_b];
                c.ul.append(c.li);
                c.li.style.display = null;
                c.li.children[0].innerHTML = c.title;
            }
            return;
        }
        /*for (let i = this.searchResults.length-1; i >= 0; i--) {
            const c = this.chartItemsByTitle[this.searchResults[i].target]
            c.ul.prepend(c.li)
        }*/
        for (var _d = 0, _e = this.chartItems; _d < _e.length; _d++) {
            var c = _e[_d];
            var res = this.resultsByTitle[c.title];
            if (!res) {
                c.li.style.display = 'none';
            }
            else {
                c.li.style.display = null;
                c.li.children[0].innerHTML = fuzzysort.highlight(res);
            }
        }
        // Ensure tag headings are only shown if they have charts under them
        for (var _f = 0, _g = this.sections; _f < _g.length; _f++) {
            var section = _g[_f];
            if (!Array.from(section.querySelectorAll("li")).some(function (li) { return li.style.display !== 'none'; })) {
                section.style.display = 'none';
            }
            else {
                section.style.display = null;
            }
        }
    };
    ChartSearcher.prototype.run = function () {
        var _this = this;
        this.searchInput.addEventListener('input', this.onSearchInput);
        //this.searchInput.addEventListener('keydown', this.onKeydown)
        mobx_1.autorun(function () { return _this.render(); });
        var m = window.location.hash.match(/search=(.+)/);
        if (m) {
            this.searchInput.value = decodeHashSafe(m[1]);
        }
        this.query = this.searchInput.value;
        this.searchInput.focus();
    };
    __decorate([
        mobx_1.observable
    ], ChartSearcher.prototype, "query", void 0);
    __decorate([
        mobx_1.computed
    ], ChartSearcher.prototype, "searchStrings", null);
    __decorate([
        mobx_1.computed
    ], ChartSearcher.prototype, "searchResults", null);
    __decorate([
        mobx_1.computed
    ], ChartSearcher.prototype, "resultsByTitle", null);
    __decorate([
        mobx_1.action.bound
    ], ChartSearcher.prototype, "onSearchInput", null);
    __decorate([
        mobx_1.action.bound
    ], ChartSearcher.prototype, "run", null);
    return ChartSearcher;
}());
function runChartsIndexPage() {
    var searcher = new ChartSearcher();
    searcher.run();
}
exports.runChartsIndexPage = runChartsIndexPage;
//# sourceMappingURL=runChartsIndexPage.js.map
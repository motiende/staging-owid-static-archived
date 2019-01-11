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
        this.query = "";
        this.searchInput = document.querySelector(".chartsSearchInput");
        this.ul = document.querySelector(".ChartsIndexPage main ul");
        var lis = Array.from(document.querySelectorAll(".ChartsIndexPage main li"));
        this.chartItems = lis.map(function (li) { return ({
            title: li.textContent.replace(/₂/g, '2'),
            li: li
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
    ChartSearcher.prototype.onKeydown = function (ev) {
        if (ev.keyCode === 13 && this.query && this.searchResults.length) {
            var href = this.chartItemsByTitle[this.searchResults[0].target].li.children[0].getAttribute('href');
            window.location.assign(href);
        }
    };
    ChartSearcher.prototype.render = function () {
        history.replaceState(null, document.title, window.location.pathname + (this.query ? "#search=" + encodeHashSafe(this.query) : ""));
        if (!this.query) {
            for (var _i = 0, _a = this.chartItems; _i < _a.length; _i++) {
                var c = _a[_i];
                this.ul.append(c.li);
                c.li.style.display = 'block';
                c.li.children[0].innerHTML = c.title;
            }
            return;
        }
        for (var i = this.searchResults.length - 1; i >= 0; i--) {
            var c = this.chartItemsByTitle[this.searchResults[i].target];
            this.ul.prepend(c.li);
        }
        for (var _b = 0, _c = this.chartItems; _b < _c.length; _b++) {
            var c = _c[_b];
            var res = this.resultsByTitle[c.title];
            if (!res) {
                c.li.style.display = 'none';
            }
            else {
                c.li.style.display = 'block';
                c.li.children[0].innerHTML = fuzzysort.highlight(res);
            }
        }
    };
    ChartSearcher.prototype.run = function () {
        var _this = this;
        this.searchInput.addEventListener('input', this.onSearchInput);
        this.searchInput.addEventListener('keydown', this.onKeydown);
        this.searchInput.focus();
        mobx_1.autorun(function () { return _this.render(); });
        var m = window.location.hash.match(/search=(.+)/);
        if (m) {
            this.searchInput.value = decodeHashSafe(m[1]);
        }
        this.query = this.searchInput.value;
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
    ], ChartSearcher.prototype, "onKeydown", null);
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
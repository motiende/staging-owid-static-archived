"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var mobx_1 = require("mobx");
var mobx_react_1 = require("mobx-react");
var algoliasearch = require("algoliasearch");
var PostResult = /** @class */ (function (_super) {
    __extends(PostResult, _super);
    function PostResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PostResult.prototype.render = function () {
        var hit = this.props.hit;
        return React.createElement("div", { className: "PostResult" },
            React.createElement("a", { href: "/" + hit.slug }, hit.title),
            React.createElement("p", null, hit.content));
    };
    return PostResult;
}(React.Component));
var ChartResult = /** @class */ (function (_super) {
    __extends(ChartResult, _super);
    function ChartResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChartResult.prototype.render = function () {
        var hit = this.props.hit;
        return React.createElement("div", { className: "ChartResult" },
            React.createElement("a", { href: "https://ourworldindata.org/grapher/" + hit.slug }, hit.title));
    };
    return ChartResult;
}(React.Component));
var SearchResults = /** @class */ (function (_super) {
    __extends(SearchResults, _super);
    function SearchResults() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.newChart = false;
        return _this;
    }
    Object.defineProperty(SearchResults.prototype, "bestChartSlug", {
        get: function () {
            return this.props.results.charts.length ? this.props.results.charts[0].slug : undefined;
        },
        enumerable: true,
        configurable: true
    });
    SearchResults.prototype.componentDidMount = function () {
        var _this = this;
        mobx_1.autorun(function () {
            _this.bestChartSlug && _this.renderChart();
            _this.bestChartSlug ? _this.newChart = true : undefined;
        });
    };
    SearchResults.prototype.renderChart = function () {
        document.querySelectorAll("figure").forEach(function (e) { return e.remove(); });
        var fig = document.createElement("figure");
        fig.setAttribute("data-grapher-src", "https://ourworldindata.org/grapher/" + this.bestChartSlug);
        document.querySelector(".chartResults h2").after(fig);
        this.newChart = false;
        window.Grapher.embedAll();
    };
    SearchResults.prototype.componentWillUnmount = function () {
        document.body.style.overflowY = null;
    };
    SearchResults.prototype.render = function () {
        var results = this.props.results;
        return React.createElement("div", { className: "SearchResults" },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "postResults" },
                    React.createElement("h2", null, "Articles"),
                    results.posts.map(function (hit) { return React.createElement(PostResult, { key: hit.slug, hit: hit }); })),
                React.createElement("div", { className: "chartResults" },
                    React.createElement("h2", null, "Data"),
                    results.charts.map(function (hit) { return React.createElement(ChartResult, { key: hit.slug, hit: hit }); }))));
    };
    __decorate([
        mobx_1.computed
    ], SearchResults.prototype, "bestChartSlug", null);
    __decorate([
        mobx_1.action.bound
    ], SearchResults.prototype, "renderChart", null);
    SearchResults = __decorate([
        mobx_react_1.observer
    ], SearchResults);
    return SearchResults;
}(React.Component));
var HeaderSearch = /** @class */ (function (_super) {
    __extends(HeaderSearch, _super);
    function HeaderSearch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderSearch.prototype.onSearch = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var value, algolia, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        value = e.currentTarget.value;
                        if (!value) return [3 /*break*/, 2];
                        algolia = algoliasearch("TBPYZP1AP6", "2078ca669653f7f0e5aac70e4f7c7eb1");
                        return [4 /*yield*/, algolia.search([
                                { indexName: 'mispydev_owid_articles', query: value, params: { distinct: true } },
                                { indexName: 'mispydev_owid_charts', query: value, params: {} }
                            ])];
                    case 1:
                        json = _a.sent();
                        this.results = {
                            posts: json.results[0].hits,
                            charts: json.results[1].hits
                        };
                        return [3 /*break*/, 3];
                    case 2:
                        this.results = undefined;
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    HeaderSearch.prototype.render = function () {
        var _this = this;
        var results = this.results;
        return React.createElement("form", { id: "search-nav" },
            React.createElement("input", { type: "search", onChange: function (e) { return _this.onSearch(e); }, autoFocus: true }),
            results && React.createElement(SearchResults, { results: results }));
    };
    __decorate([
        mobx_1.observable.ref
    ], HeaderSearch.prototype, "results", void 0);
    HeaderSearch = __decorate([
        mobx_react_1.observer
    ], HeaderSearch);
    return HeaderSearch;
}(React.Component));
exports.HeaderSearch = HeaderSearch;
//# sourceMappingURL=HeaderSearch.js.map
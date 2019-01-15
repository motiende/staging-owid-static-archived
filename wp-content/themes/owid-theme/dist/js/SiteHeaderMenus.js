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
var ReactDOM = require("react-dom");
var mobx_1 = require("mobx");
var mobx_react_1 = require("mobx-react");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var HeaderSearch_1 = require("./HeaderSearch");
var DesktopHeader = /** @class */ (function (_super) {
    __extends(DesktopHeader, _super);
    function DesktopHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DesktopHeader.prototype.setCategory = function (category) {
        this.activeCategory = category;
    };
    DesktopHeader.prototype.render = function () {
        var _this = this;
        var activeCategory = this.activeCategory;
        var categories = this.props.categories;
        return React.createElement(React.Fragment, null,
            React.createElement("nav", { id: "owid-topbar" },
                React.createElement("a", { className: "logo", href: "/" }, "Our World in Data"),
                React.createElement("ul", { className: "desktop" },
                    React.createElement("li", null,
                        React.createElement(HeaderSearch_1.HeaderSearch, null)),
                    React.createElement("li", null,
                        React.createElement("a", { href: "/charts" }, "Charts")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "https://sdg-tracker.org", title: "Sustainable Development Goals" }, "SDGs")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "/blog" }, "Blog")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "/about" }, "About")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "/teaching" }, "Teaching")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "/support" }, "Donate")))),
            React.createElement("div", { id: "category-nav", className: "desktop" },
                React.createElement("ul", null, categories.map(function (category) {
                    return React.createElement("li", { key: category.slug, className: "category" + (activeCategory === category ? " active" : ""), title: category.name },
                        React.createElement("a", { onClick: function () { return _this.setCategory(category); } },
                            React.createElement("span", null, category.name)),
                        React.createElement("ul", { className: "entries" },
                            React.createElement("li", null,
                                React.createElement("hr", null)),
                            category.entries.map(function (entry) {
                                return React.createElement("li", { key: entry.slug },
                                    React.createElement("a", { className: entry.starred ? "starred" : undefined, title: entry.starred ? "Starred pages are our best and most complete entries." : undefined, href: "/" + entry.slug }, entry.title));
                            })));
                }))),
            React.createElement("div", { id: "entries-nav", className: "desktop" }, activeCategory && React.createElement(React.Fragment, null,
                React.createElement("li", { key: 0 },
                    React.createElement("hr", null)),
                activeCategory.entries.map(function (entry) {
                    var classes = [];
                    return React.createElement("li", { key: entry.slug },
                        React.createElement("a", { className: entry.starred ? "starred" : undefined, title: entry.starred ? "Starred pages are our best and most complete entries." : undefined, href: "/" + entry.slug }, entry.title));
                }))));
    };
    __decorate([
        mobx_1.observable.ref
    ], DesktopHeader.prototype, "activeCategory", void 0);
    __decorate([
        mobx_1.action.bound
    ], DesktopHeader.prototype, "setCategory", null);
    DesktopHeader = __decorate([
        mobx_react_1.observer
    ], DesktopHeader);
    return DesktopHeader;
}(React.Component));
exports.DesktopHeader = DesktopHeader;
var MobileEntriesMenu = /** @class */ (function (_super) {
    __extends(MobileEntriesMenu, _super);
    function MobileEntriesMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MobileEntriesMenu.prototype.toggleCategory = function (category) {
        if (this.activeCategory === category)
            this.activeCategory = undefined;
        else
            this.activeCategory = category;
    };
    MobileEntriesMenu.prototype.render = function () {
        var _this = this;
        var categories = this.props.categories;
        var activeCategory = this.activeCategory;
        return React.createElement("div", { id: "topics-dropdown", className: "mobile" },
            React.createElement("ul", null,
                React.createElement("li", { className: "header" },
                    React.createElement("h2", null, "Entries")),
                categories.map(function (category) {
                    return React.createElement("li", { key: category.slug, className: "category" },
                        React.createElement("a", { onClick: function () { return _this.toggleCategory(category); } },
                            React.createElement("span", null, category.name)),
                        activeCategory === category && React.createElement("div", { className: "subcategory-menu" },
                            React.createElement("ul", null, category.entries.map(function (entry) {
                                return React.createElement("li", { key: entry.slug },
                                    React.createElement("a", { className: entry.starred ? "starred" : undefined, title: entry.starred ? "Starred pages are our best and most complete entries." : undefined, href: "/" + entry.slug }, entry.title));
                            }))));
                }),
                React.createElement("li", { className: "end-link" },
                    React.createElement("a", { href: "/charts" }, "Charts")),
                React.createElement("li", { className: "end-link" },
                    React.createElement("a", { href: "https://sdg-tracker.org" }, "SDGs")),
                React.createElement("li", { className: "end-link" },
                    React.createElement("a", { href: "/blog" }, "Blog")),
                React.createElement("li", { className: 'end-link' },
                    React.createElement("a", { href: '/about' }, "About")),
                React.createElement("li", { className: 'end-link' },
                    React.createElement("a", { href: '/teaching' }, "Teaching")),
                React.createElement("li", { className: 'end-link' },
                    React.createElement("a", { href: '/support' }, "Donate"))));
    };
    __decorate([
        mobx_1.observable.ref
    ], MobileEntriesMenu.prototype, "activeCategory", void 0);
    __decorate([
        mobx_1.action.bound
    ], MobileEntriesMenu.prototype, "toggleCategory", null);
    MobileEntriesMenu = __decorate([
        mobx_react_1.observer
    ], MobileEntriesMenu);
    return MobileEntriesMenu;
}(React.Component));
exports.MobileEntriesMenu = MobileEntriesMenu;
var MobileHeader = /** @class */ (function (_super) {
    __extends(MobileHeader, _super);
    function MobileHeader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.showSearch = false;
        _this.showCategories = false;
        return _this;
    }
    MobileHeader.prototype.onToggleSearch = function () {
        this.showSearch = !this.showSearch;
    };
    MobileHeader.prototype.onToggleCategories = function () {
        this.showCategories = !this.showCategories;
    };
    MobileHeader.prototype.render = function () {
        return React.createElement(React.Fragment, null,
            React.createElement("nav", { id: "owid-topbar" },
                React.createElement("a", { className: "logo", href: "/" }, "Our World in Data"),
                React.createElement("ul", { className: "mobile" },
                    React.createElement("li", { className: "nav-button" },
                        React.createElement("a", { onClick: this.onToggleSearch },
                            React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faSearch }))),
                    React.createElement("li", { className: "nav-button" },
                        React.createElement("a", { onClick: this.onToggleCategories, "data-expand": "#topics-dropdown", className: 'mobile' },
                            React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faBars }))))),
            this.showSearch && React.createElement("div", { id: "search-dropdown", className: "mobile" },
                React.createElement("form", { id: "search-nav", action: "https://google.com/search", method: "GET" },
                    React.createElement("input", { type: "hidden", name: "sitesearch", value: "ourworldindata.org" }),
                    React.createElement("input", { type: "search", name: "q", placeholder: "Search...", autoFocus: true }))),
            this.showCategories && React.createElement(MobileEntriesMenu, { categories: this.props.categories }));
    };
    __decorate([
        mobx_1.observable
    ], MobileHeader.prototype, "showSearch", void 0);
    __decorate([
        mobx_1.observable
    ], MobileHeader.prototype, "showCategories", void 0);
    __decorate([
        mobx_1.action.bound
    ], MobileHeader.prototype, "onToggleSearch", null);
    __decorate([
        mobx_1.action.bound
    ], MobileHeader.prototype, "onToggleCategories", null);
    MobileHeader = __decorate([
        mobx_react_1.observer
    ], MobileHeader);
    return MobileHeader;
}(React.Component));
exports.MobileHeader = MobileHeader;
var SiteHeaderMenus = /** @class */ (function (_super) {
    __extends(SiteHeaderMenus, _super);
    function SiteHeaderMenus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SiteHeaderMenus.prototype.onResize = function () {
        this.width = window.innerWidth;
    };
    SiteHeaderMenus.prototype.componentDidMount = function () {
        this.onResize();
        window.addEventListener('resize', this.onResize);
    };
    SiteHeaderMenus.prototype.componentWillUnmount = function () {
        window.removeEventListener('resize', this.onResize);
    };
    SiteHeaderMenus.prototype.render = function () {
        return this.width > 1060 ? React.createElement(DesktopHeader, { categories: this.props.categories }) : React.createElement(MobileHeader, { categories: this.props.categories });
    };
    __decorate([
        mobx_1.observable
    ], SiteHeaderMenus.prototype, "width", void 0);
    __decorate([
        mobx_1.action.bound
    ], SiteHeaderMenus.prototype, "onResize", null);
    SiteHeaderMenus = __decorate([
        mobx_react_1.observer
    ], SiteHeaderMenus);
    return SiteHeaderMenus;
}(React.Component));
exports.SiteHeaderMenus = SiteHeaderMenus;
var HeaderMenus = /** @class */ (function () {
    function HeaderMenus() {
    }
    HeaderMenus.prototype.run = function () {
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("/headerMenu.json", {
                            method: "GET",
                            credentials: 'same-origin',
                            headers: {
                                "Accept": "application/json"
                            }
                        })];
                    case 1: return [4 /*yield*/, (_a.sent()).json()];
                    case 2:
                        json = _a.sent();
                        ReactDOM.render(React.createElement(SiteHeaderMenus, { categories: json.categories }), document.querySelector(".SiteHeader"));
                        return [2 /*return*/];
                }
            });
        });
    };
    return HeaderMenus;
}());
exports.HeaderMenus = HeaderMenus;
function runHeaderMenus() {
    var header = new HeaderMenus();
    header.run();
}
exports.runHeaderMenus = runHeaderMenus;
//# sourceMappingURL=SiteHeaderMenus.js.map
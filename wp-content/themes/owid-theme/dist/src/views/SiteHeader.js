"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var entities_1 = require("entities");
var slugify = require('slugify');
exports.SiteHeader = function () {
    var categoryOrder = [
        "Population",
        "Health",
        "Food",
        "Energy",
        "Environment",
        "Technology",
        "Growth &amp; Inequality",
        "Work &amp; Life",
        "Public Sector",
        "Global Connections",
        "War &amp; Peace",
        "Politics",
        "Violence &amp; Rights",
        "Education",
        "Media",
        "Culture"
    ];
    var categories = categoryOrder.map(function (cat) {
        return {
            name: entities_1.decodeHTML(cat),
            slug: slugify(entities_1.decodeHTML(cat).toLowerCase())
        };
    });
    return React.createElement("header", { className: "SiteHeader" },
        React.createElement("nav", { id: "owid-topbar" },
            React.createElement("a", { className: "logo", href: "/" }, "Our World in Data"),
            React.createElement("ul", { className: "desktop" },
                React.createElement("li", null,
                    React.createElement("form", { id: "search-nav", action: "https://google.com/search", method: "GET" },
                        React.createElement("input", { type: "hidden", name: "sitesearch", value: "ourworldindata.org" }),
                        React.createElement("input", { type: "search", name: "q", placeholder: "Search..." }))),
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
                    React.createElement("a", { href: "/support" }, "Donate"))),
            React.createElement("ul", { className: "mobile" },
                React.createElement("li", { className: "nav-button" },
                    React.createElement("a", { href: "https://google.com/search?q=site:ourworldindata.org", "data-expand": "#search-dropdown" },
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faSearch }))),
                React.createElement("li", { className: "nav-button" },
                    React.createElement("a", { href: "/", "data-expand": "#topics-dropdown", className: 'mobile' },
                        React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faBars }))))),
        React.createElement("div", { id: "category-nav", className: "desktop" },
            React.createElement("ul", null, categories.map(function (category) {
                return React.createElement("li", { key: category.slug, className: "category", title: category.name },
                    React.createElement("a", { href: "/#" + category.slug },
                        React.createElement("span", null, category.name)));
            }))));
};
//# sourceMappingURL=SiteHeader.js.map
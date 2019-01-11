"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var settings = require("../settings");
var React = require("react");
var Head_1 = require("./Head");
var SiteHeader_1 = require("./SiteHeader");
var SiteFooter_1 = require("./SiteFooter");
var _ = require("lodash");
exports.ChartsIndexPage = function (props) {
    var entries = props.entries, chartItems = props.chartItems;
    var sortedItems = _.sortBy(chartItems, function (c) { return c.title.trim(); });
    return React.createElement("html", null,
        React.createElement(Head_1.Head, { canonicalUrl: settings.BAKED_URL + "/charts", pageTitle: "Charts" }),
        React.createElement("body", { className: "ChartsIndexPage" },
            React.createElement(SiteHeader_1.SiteHeader, { entries: entries }),
            React.createElement("header", { className: "chartsHeader" },
                React.createElement("input", { type: "search", className: "chartsSearchInput", placeholder: "Search all interactive charts" })),
            React.createElement("main", null,
                React.createElement("ul", null, sortedItems.map(function (chart) { return React.createElement("li", null,
                    React.createElement("a", { href: "/grapher/" + chart.slug }, chart.title)); }))),
            React.createElement(SiteFooter_1.SiteFooter, null),
            React.createElement("script", null, "window.runChartsIndexPage()")));
};
//# sourceMappingURL=ChartsIndexPage.js.map
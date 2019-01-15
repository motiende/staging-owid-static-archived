"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var settings = require("../settings");
var React = require("react");
var Head_1 = require("./Head");
var SiteHeader_1 = require("./SiteHeader");
var SiteFooter_1 = require("./SiteFooter");
var _ = require("lodash");
exports.ChartsIndexPage = function (props) {
    var chartItems = props.chartItems;
    var allTags = _.sortBy(_.uniqBy(_.flatten(chartItems.map(function (c) { return c.tags; })), function (t) { return t.id; }), function (t) { return t.name; });
    for (var _i = 0, chartItems_1 = chartItems; _i < chartItems_1.length; _i++) {
        var c = chartItems_1[_i];
        var _loop_1 = function (tag) {
            if (tag.charts === undefined)
                tag.charts = [];
            if (c.tags.some(function (t) { return t.id === tag.id; }))
                tag.charts.push(c);
        };
        for (var _a = 0, allTags_1 = allTags; _a < allTags_1.length; _a++) {
            var tag = allTags_1[_a];
            _loop_1(tag);
        }
    }
    // Sort the charts in each tag
    for (var _b = 0, allTags_2 = allTags; _b < allTags_2.length; _b++) {
        var tag = allTags_2[_b];
        tag.charts = _.sortBy(tag.charts, function (c) { return c.title.trim(); });
    }
    return React.createElement("html", null,
        React.createElement(Head_1.Head, { canonicalUrl: settings.BAKED_URL + "/charts", pageTitle: "Charts", pageDesc: "All of the interactive charts on Our World in Data." }),
        React.createElement("body", { className: "ChartsIndexPage" },
            React.createElement(SiteHeader_1.SiteHeader, null),
            React.createElement("main", null,
                React.createElement("header", { className: "chartsHeader" },
                    React.createElement("input", { type: "search", className: "chartsSearchInput", placeholder: "Filter interactive charts", autoFocus: true })),
                allTags.map(function (t) { return React.createElement("section", { key: t.id },
                    React.createElement("h2", null, t.name),
                    React.createElement("ul", null, t.charts.map(function (c) { return React.createElement("li", { key: c.id },
                        React.createElement("a", { href: "/grapher/" + c.slug }, c.title)); }))); })),
            React.createElement(SiteFooter_1.SiteFooter, null),
            React.createElement("script", null, "window.runChartsIndexPage()")));
};
//# sourceMappingURL=ChartsIndexPage.js.map
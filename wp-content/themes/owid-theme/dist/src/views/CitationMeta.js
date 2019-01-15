"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var moment = require("moment");
exports.CitationMeta = function (props) {
    var title = props.title, authors = props.authors, date = props.date, canonicalUrl = props.canonicalUrl;
    if (authors.indexOf("Max Roser") === -1)
        authors = authors.concat(["Max Roser"]);
    return React.createElement(React.Fragment, null,
        React.createElement("meta", { name: "citation_title", content: title }),
        authors.map(function (author) { return React.createElement("meta", { key: author, name: "citation_author", content: author }); }),
        React.createElement("meta", { name: "citation_publication_date", content: moment(date).format("YYYY/MM/DD") }),
        React.createElement("meta", { name: "citation_journal_title", content: "Our World in Data" }),
        React.createElement("meta", { name: "citation_fulltext_world_readable", content: "" }),
        React.createElement("meta", { name: "citation_full_html_url", content: canonicalUrl }));
};
//# sourceMappingURL=CitationMeta.js.map
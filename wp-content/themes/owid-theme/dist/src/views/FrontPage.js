"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var settings = require("../settings");
var React = require("react");
var Head_1 = require("./Head");
var SiteHeader_1 = require("./SiteHeader");
var SiteFooter_1 = require("./SiteFooter");
var formatting_1 = require("../formatting");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var free_brands_svg_icons_1 = require("@fortawesome/free-brands-svg-icons");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
exports.FrontPage = function (props) {
    var entries = props.entries, posts = props.posts;
    // Structured data for google
    var structuredMarkup = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": settings.BAKED_URL,
        "potentialAction": {
            "@type": "SearchAction",
            "target": settings.BAKED_URL + "/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };
    return React.createElement("html", null,
        React.createElement(Head_1.Head, { canonicalUrl: settings.BAKED_URL },
            React.createElement("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(structuredMarkup) } })),
        React.createElement("body", { className: "FrontPage" },
            React.createElement(SiteHeader_1.SiteHeader, { entries: entries }),
            React.createElement("main", null,
                React.createElement("div", { id: "homepage-cover" },
                    React.createElement("div", { className: "lead-in" },
                        React.createElement("h1", { className: "desktop" }, "Our world is changing"),
                        React.createElement("div", { className: "desktop subheading" }, "Explore the ongoing history of human civilization at the broadest level, through research and data visualization."),
                        React.createElement("div", { className: "mobile subheading" }, "Living conditions around the world are changing rapidly. Explore how and why."),
                        React.createElement("img", { className: "down-arrow", src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAM1BMVEUAAAD/zB//zB//zB//zB//zB//zB//zB//zB//zB//zB//zB//zB//zB//zB//zB//zB8l5oYuAAAAEHRSTlMAECAwQFBgcICPn6+/z9/vIxqCigAAAVxJREFUOMuFlcsWwyAIRFF8izr//7VdNK2KTeomJ+YGZggSon3ZkLJISZHpYdnc8V2juBvMCYCanCNiF8sAeviBmQz0YJYdL4BYzXGf7zPPHEMF9QPlG03kux+BtMkD4rxbQHJjJXlgzbCC2zPT13gKJAY+mjMq3YMU0a4yY5gnkORKXqBKoEGLvlwewCtU3J38AhmViBrsP5A6DJmPpycww5ND/g96JIoI/0GLSglbfxb7Bm3ZSIgGM5IRMUkJOkEGeu8dqhQnSO19YlQpIIeZ8AbDYUaXxwwAuk080lnwAgDlLDg1GPVhMVv1K9wQZd0U7bDCaL/arByZr46tp2/teVyBd4+sJcpHXFapxlAZ2jyu4eG4jplADYCU6G447Pq937iinM4hZcw6pFSpeKAfE5YFZ/+bCsi26wrQ+GY0jxqdJTIulH4zmomIuIw57FH904+BY6oikpIW/AINdBKzcQVAtQAAAABJRU5ErkJggg==" }),
                        React.createElement("div", { className: "title-author-byline" },
                            "A web publication by ",
                            React.createElement("a", { href: "https://www.MaxRoser.com/about", target: "_blank", rel: "noopener" }, "Max Roser"),
                            "."))),
                React.createElement("div", { id: "homepage-content", className: "clearfix" },
                    React.createElement("div", { id: "homepage-latest" },
                        React.createElement("h3", null,
                            React.createElement("a", { href: "/grapher/latest" }, "Latest Visualization")),
                        React.createElement("figure", { "data-grapher-src": "https://ourworldindata.org/grapher/latest", style: { height: "660px" } })),
                    React.createElement("div", { id: "homepage-blog" },
                        React.createElement("h3", null,
                            React.createElement("a", { href: "/blog" }, "Blog")),
                        React.createElement("ul", null, posts.map(function (post) { return React.createElement("li", { key: post.slug, className: "post" },
                            React.createElement("h4", null,
                                React.createElement("a", { href: "/" + post.slug }, post.title)),
                            React.createElement("div", { className: "entry-meta" },
                                React.createElement("time", null, formatting_1.formatDate(post.date)))); })),
                        React.createElement("a", { className: "more", href: "/blog" }, "More \u2192")),
                    React.createElement("div", { id: "homepage-entries", className: "owid-data" },
                        React.createElement("h3", { id: "entries" },
                            React.createElement("a", { href: "#entries" }, "Entries")),
                        React.createElement("p", null,
                            "Ongoing collections of research and data by topic. Entries marked with ",
                            React.createElement("span", { className: "star" }, "\u2B51"),
                            " are the most complete."),
                        React.createElement("ul", null, entries.map(function (category) { return React.createElement("li", { key: category.slug },
                            React.createElement("h4", { id: category.slug }, category.name),
                            React.createElement("div", { className: "link-container" }, category.entries.map(function (entry) {
                                return React.createElement("a", { key: entry.slug, className: entry.starred ? "starred" : undefined, title: entry.starred ? "Starred pages are our best and most complete entries." : undefined, href: "/" + entry.slug }, entry.title);
                            }))); }))),
                    React.createElement("div", { className: "owid-data owid-presentations" },
                        React.createElement("h3", { id: "presentations" },
                            React.createElement("a", { href: "#presentations" }, "Presentations")),
                        React.createElement("p", null, "Visual histories spanning multiple topics."),
                        React.createElement("ul", null,
                            React.createElement("li", null,
                                React.createElement("h4", null, "Visual History of..."),
                                React.createElement("div", { className: 'link-container' },
                                    React.createElement("a", { href: '/slides/war-and-violence' }, "War & Violence"),
                                    React.createElement("a", { href: '/slides/world-poverty' }, "World Poverty"),
                                    React.createElement("a", { href: '/slides/global-health' }, "Global Health"),
                                    React.createElement("a", { href: '/slides/hunger-and-food-provision' }, "World Hunger & Food Provision"),
                                    React.createElement("a", { href: '/slides/africa-in-data' }, "Africa"))))),
                    React.createElement("div", { id: "homepage-twitter" },
                        React.createElement("h3", null,
                            React.createElement("a", { href: "https://twitter.com/OurWorldInData" }, "Follow us")),
                        React.createElement("div", { className: "social" },
                            React.createElement("a", { href: "https://twitter.com/OurWorldInData" },
                                React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faTwitter })),
                            React.createElement("a", { href: "https://www.facebook.com/OurWorldinData" },
                                React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_brands_svg_icons_1.faFacebookF })),
                            React.createElement("a", { href: "/feed/" },
                                React.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faRss })))))),
            React.createElement(SiteFooter_1.SiteFooter, null)));
};
//# sourceMappingURL=FrontPage.js.map
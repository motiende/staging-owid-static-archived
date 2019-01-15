"use strict";
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
var wpdb = require("./wpdb");
var grapherDb = require("./grapherDb");
var LongFormPage_1 = require("./views/LongFormPage");
var BlogPostPage_1 = require("./views/BlogPostPage");
var BlogIndexPage_1 = require("./views/BlogIndexPage");
var FrontPage_1 = require("./views/FrontPage");
var ChartsIndexPage_1 = require("./views/ChartsIndexPage");
var SubscribePage_1 = require("./views/SubscribePage");
var React = require("react");
var ReactDOMServer = require("react-dom/server");
var url = require("url");
var path = require("path");
var glob = require("glob");
var _ = require("lodash");
var fs = require("fs-extra");
var settings_1 = require("./settings");
var formatting_1 = require("./formatting");
var grapherUtil_1 = require("./grapherUtil");
var cheerio = require("cheerio");
// Wrap ReactDOMServer to stick the doctype on
function renderToHtmlPage(element) {
    return "<!doctype html>" + ReactDOMServer.renderToStaticMarkup(element);
}
exports.renderToHtmlPage = renderToHtmlPage;
function renderChartsPage() {
    return __awaiter(this, void 0, void 0, function () {
        var chartItems, chartTags, _i, chartItems_1, c, chartsById, _a, chartTags_1, ct, c;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, grapherDb.query("SELECT id, config->>\"$.slug\" AS slug, config->>\"$.title\" AS title, config->>\"$.variantName\" AS variantName FROM charts")];
                case 1:
                    chartItems = _b.sent();
                    return [4 /*yield*/, grapherDb.query("\n        SELECT ct.chartId, ct.tagId, t.name as tagName, t.parentId as tagParentId FROM chart_tags ct\n        JOIN charts c ON c.id=ct.chartId\n        JOIN tags t ON t.id=ct.tagId\n    ")];
                case 2:
                    chartTags = _b.sent();
                    for (_i = 0, chartItems_1 = chartItems; _i < chartItems_1.length; _i++) {
                        c = chartItems_1[_i];
                        c.tags = [];
                    }
                    chartsById = _.keyBy(chartItems, function (c) { return c.id; });
                    for (_a = 0, chartTags_1 = chartTags; _a < chartTags_1.length; _a++) {
                        ct = chartTags_1[_a];
                        // XXX hardcoded filtering to public parent tags
                        if ([1515, 1507, 1513, 1504, 1502, 1509, 1506, 1501, 1514, 1511, 1500, 1503, 1505, 1508, 1512, 1510].indexOf(ct.tagParentId) === -1)
                            continue;
                        c = chartsById[ct.chartId];
                        if (c)
                            c.tags.push({ id: ct.tagId, name: ct.tagName });
                    }
                    return [2 /*return*/, renderToHtmlPage(React.createElement(ChartsIndexPage_1.ChartsIndexPage, { chartItems: chartItems }))];
            }
        });
    });
}
exports.renderChartsPage = renderChartsPage;
function renderPageBySlug(slug) {
    return __awaiter(this, void 0, void 0, function () {
        var rows;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, wpdb.query("SELECT * FROM wp_posts AS post WHERE post_name=?", [slug])];
                case 1:
                    rows = _a.sent();
                    return [2 /*return*/, renderPage(rows[0])];
            }
        });
    });
}
exports.renderPageBySlug = renderPageBySlug;
function renderPageById(id, isPreview) {
    return __awaiter(this, void 0, void 0, function () {
        var rows;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!isPreview) return [3 /*break*/, 2];
                    return [4 /*yield*/, wpdb.query("SELECT post.*, parent.post_type FROM wp_posts AS post JOIN wp_posts AS parent ON parent.ID=post.post_parent WHERE post.post_parent=? AND post.post_type='revision' ORDER BY post_modified DESC", [id])];
                case 1:
                    rows = _a.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, wpdb.query("SELECT * FROM wp_posts AS post WHERE ID=?", [id])];
                case 3:
                    rows = _a.sent();
                    _a.label = 4;
                case 4: return [2 /*return*/, renderPage(rows[0])];
            }
        });
    });
}
exports.renderPageById = renderPageById;
function renderMenuJson() {
    return __awaiter(this, void 0, void 0, function () {
        var categories;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, wpdb.getEntriesByCategory()];
                case 1:
                    categories = _a.sent();
                    return [2 /*return*/, JSON.stringify({ categories: categories })];
            }
        });
    });
}
exports.renderMenuJson = renderMenuJson;
function renderPage(postRow) {
    return __awaiter(this, void 0, void 0, function () {
        var post, entries, $, grapherUrls, exportsByUrl, formattingOptions, formatted;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, wpdb.getFullPost(postRow)];
                case 1:
                    post = _a.sent();
                    return [4 /*yield*/, wpdb.getEntriesByCategory()];
                case 2:
                    entries = _a.sent();
                    $ = cheerio.load(post.content);
                    grapherUrls = $("iframe").toArray().filter(function (el) { return (el.attribs['src'] || '').match(/\/grapher\//); }).map(function (el) { return el.attribs['src']; });
                    // XXX This is slow!
                    return [4 /*yield*/, grapherUtil_1.bakeGrapherUrls(grapherUrls, { silent: true })];
                case 3:
                    // XXX This is slow!
                    _a.sent();
                    return [4 /*yield*/, grapherUtil_1.getGrapherExportsByUrl()
                        // Extract formatting options from post HTML comment (if any)
                    ];
                case 4:
                    exportsByUrl = _a.sent();
                    formattingOptions = formatting_1.extractFormattingOptions(post.content);
                    return [4 /*yield*/, formatting_1.formatPost(post, formattingOptions, exportsByUrl)];
                case 5:
                    formatted = _a.sent();
                    if (postRow.post_type === 'post')
                        return [2 /*return*/, renderToHtmlPage(React.createElement(BlogPostPage_1.BlogPostPage, { post: formatted, formattingOptions: formattingOptions }))];
                    else
                        return [2 /*return*/, renderToHtmlPage(React.createElement(LongFormPage_1.LongFormPage, { entries: entries, post: formatted, formattingOptions: formattingOptions }))];
                    return [2 /*return*/];
            }
        });
    });
}
function renderFrontPage() {
    return __awaiter(this, void 0, void 0, function () {
        var postRows, permalinks, posts, entries;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, wpdb.query("\n        SELECT ID, post_title, post_date, post_name FROM wp_posts\n        WHERE post_status='publish' AND post_type='post' ORDER BY post_date DESC LIMIT 6")];
                case 1:
                    postRows = _a.sent();
                    return [4 /*yield*/, wpdb.getPermalinks()];
                case 2:
                    permalinks = _a.sent();
                    posts = postRows.map(function (row) {
                        return {
                            title: row.post_title,
                            date: new Date(row.post_date),
                            slug: permalinks.get(row.ID, row.post_name)
                        };
                    });
                    return [4 /*yield*/, wpdb.getEntriesByCategory()];
                case 3:
                    entries = _a.sent();
                    return [2 /*return*/, renderToHtmlPage(React.createElement(FrontPage_1.FrontPage, { entries: entries, posts: posts }))];
            }
        });
    });
}
exports.renderFrontPage = renderFrontPage;
function renderSubscribePage() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, renderToHtmlPage(React.createElement(SubscribePage_1.default, null))];
        });
    });
}
exports.renderSubscribePage = renderSubscribePage;
function renderBlogByPageNum(pageNum) {
    return __awaiter(this, void 0, void 0, function () {
        var postsPerPage, allPosts, numPages, posts, _i, posts_1, post, pathname, paths, sortedPaths;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    postsPerPage = 21;
                    return [4 /*yield*/, wpdb.getBlogIndex()];
                case 1:
                    allPosts = _a.sent();
                    numPages = Math.ceil(allPosts.length / postsPerPage);
                    posts = allPosts.slice((pageNum - 1) * postsPerPage, pageNum * postsPerPage);
                    for (_i = 0, posts_1 = posts; _i < posts_1.length; _i++) {
                        post = posts_1[_i];
                        if (post.imageUrl) {
                            // Find a smaller version of this image
                            try {
                                pathname = url.parse(post.imageUrl).pathname;
                                paths = glob.sync(path.join(settings_1.WORDPRESS_DIR, pathname.replace(/.png/, "*.png")));
                                sortedPaths = _.sortBy(paths, function (path) { return fs.statSync(path).size; });
                                post.imageUrl = sortedPaths[sortedPaths.length - 3].replace(settings_1.WORDPRESS_DIR, '');
                            }
                            catch (err) {
                                console.error(err);
                                // Just use the big one
                            }
                        }
                    }
                    return [2 /*return*/, renderToHtmlPage(React.createElement(BlogIndexPage_1.BlogIndexPage, { posts: posts, pageNum: pageNum, numPages: numPages }))];
            }
        });
    });
}
exports.renderBlogByPageNum = renderBlogByPageNum;
function main(target, isPreview) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c, _d, pageNum, _e, _f, _g, _h, err_1;
        return __generator(this, function (_j) {
            switch (_j.label) {
                case 0:
                    _j.trys.push([0, 9, 10, 11]);
                    if (!(target === 'front')) return [3 /*break*/, 2];
                    _b = (_a = console).log;
                    return [4 /*yield*/, renderFrontPage()];
                case 1:
                    _b.apply(_a, [_j.sent()]);
                    return [3 /*break*/, 8];
                case 2:
                    if (!(target === 'subscribe')) return [3 /*break*/, 4];
                    _d = (_c = console).log;
                    return [4 /*yield*/, renderSubscribePage()];
                case 3:
                    _d.apply(_c, [_j.sent()]);
                    return [3 /*break*/, 8];
                case 4:
                    if (!(target == "blog")) return [3 /*break*/, 6];
                    pageNum = process.argv[3] ? parseInt(process.argv[3]) : 1;
                    _f = (_e = console).log;
                    return [4 /*yield*/, renderBlogByPageNum(pageNum === 0 ? 1 : pageNum)];
                case 5:
                    _f.apply(_e, [_j.sent()]);
                    return [3 /*break*/, 8];
                case 6:
                    _h = (_g = console).log;
                    return [4 /*yield*/, renderPageById(parseInt(target), isPreview)];
                case 7:
                    _h.apply(_g, [_j.sent()]);
                    _j.label = 8;
                case 8: return [3 /*break*/, 11];
                case 9:
                    err_1 = _j.sent();
                    console.error(err_1);
                    return [3 /*break*/, 11];
                case 10:
                    wpdb.end();
                    grapherDb.end();
                    return [7 /*endfinally*/];
                case 11: return [2 /*return*/];
            }
        });
    });
}
if (require.main == module)
    main(process.argv[2], process.argv[3] === "preview");
//# sourceMappingURL=renderPage.js.map
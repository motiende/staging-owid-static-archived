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
var glob = require("glob");
var parseUrl = require("url-parse");
var exec = require('child-process-promise').exec;
var path = require("path");
var _ = require("lodash");
var md5 = require("md5");
var settings_1 = require("./settings");
var grapherDb = require("./grapherDb");
// Given a grapher url with query string, create a key to match export filenames
function grapherUrlToFilekey(grapherUrl) {
    var url = parseUrl(grapherUrl);
    var slug = _.last(url.pathname.split('/'));
    var queryStr = url.query;
    return "" + slug + (queryStr ? "-" + md5(queryStr) : "");
}
exports.grapherUrlToFilekey = grapherUrlToFilekey;
function mapSlugsToIds() {
    return __awaiter(this, void 0, void 0, function () {
        var redirects, rows, slugToId, _i, redirects_1, row, _a, rows_1, row;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, grapherDb.query("SELECT chart_id, slug FROM chart_slug_redirects")];
                case 1:
                    redirects = _b.sent();
                    return [4 /*yield*/, grapherDb.query("SELECT id, JSON_UNQUOTE(JSON_EXTRACT(config, \"$.slug\")) AS slug FROM charts")];
                case 2:
                    rows = _b.sent();
                    slugToId = {};
                    for (_i = 0, redirects_1 = redirects; _i < redirects_1.length; _i++) {
                        row = redirects_1[_i];
                        slugToId[row.slug] = row.chart_id;
                    }
                    for (_a = 0, rows_1 = rows; _a < rows_1.length; _a++) {
                        row = rows_1[_a];
                        slugToId[row.slug] = row.id;
                    }
                    return [2 /*return*/, slugToId];
            }
        });
    });
}
exports.mapSlugsToIds = mapSlugsToIds;
function bakeGrapherUrls(urls, opts) {
    if (opts === void 0) { opts = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var currentExports, slugToId, toBake, _i, urls_1, url, current, slug, chartId, rows, args, promise;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getGrapherExportsByUrl()];
                case 1:
                    currentExports = _a.sent();
                    return [4 /*yield*/, mapSlugsToIds()];
                case 2:
                    slugToId = _a.sent();
                    toBake = [];
                    _i = 0, urls_1 = urls;
                    _a.label = 3;
                case 3:
                    if (!(_i < urls_1.length)) return [3 /*break*/, 6];
                    url = urls_1[_i];
                    current = currentExports.get(url);
                    if (!current) {
                        toBake.push(url);
                        return [3 /*break*/, 5];
                    }
                    slug = _.last(parseUrl(url).pathname.split('/'));
                    if (!slug) {
                        console.error("Invalid chart url " + url);
                        return [3 /*break*/, 5];
                    }
                    chartId = slugToId[slug];
                    return [4 /*yield*/, grapherDb.query("SELECT charts.config->>\"$.version\" AS version FROM charts WHERE charts.id=?", [chartId])];
                case 4:
                    rows = _a.sent();
                    if (!rows.length) {
                        console.error("Mysteriously missing chart by id " + chartId);
                        return [3 /*break*/, 5];
                    }
                    if (rows[0].version > current.version) {
                        toBake.push(url);
                    }
                    _a.label = 5;
                case 5:
                    _i++;
                    return [3 /*break*/, 3];
                case 6:
                    if (!(toBake.length > 0)) return [3 /*break*/, 8];
                    args = [settings_1.GRAPHER_DIR + "/dist/src/bakeChartsToImages.js"];
                    args.push.apply(args, toBake);
                    args.push(settings_1.BAKED_DIR + "/exports");
                    promise = exec("cd " + settings_1.GRAPHER_DIR + " && node " + args.map(function (arg) { return JSON.stringify(arg); }).join(" "));
                    if (!opts.silent)
                        promise.childProcess.stdout.on('data', function (data) { return console.log(data.toString().trim()); });
                    return [4 /*yield*/, promise];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8: return [2 /*return*/];
            }
        });
    });
}
exports.bakeGrapherUrls = bakeGrapherUrls;
function getGrapherExportsByUrl() {
    return __awaiter(this, void 0, void 0, function () {
        var files, exportsByKey, _i, files_1, filepath, filename, _a, key, version, dims, versionNumber, _b, width, height, current;
        return __generator(this, function (_c) {
            files = glob.sync(settings_1.BAKED_DIR + "/exports/*.svg");
            exportsByKey = new Map();
            for (_i = 0, files_1 = files; _i < files_1.length; _i++) {
                filepath = files_1[_i];
                filename = path.basename(filepath);
                _a = filename.split("_"), key = _a[0], version = _a[1], dims = _a[2];
                versionNumber = parseInt(version.split('v')[1]);
                _b = dims.split("x"), width = _b[0], height = _b[1];
                current = exportsByKey.get(key);
                if (!current || current.version < versionNumber) {
                    exportsByKey.set(key, {
                        key: key,
                        svgUrl: "/exports/" + filename,
                        version: versionNumber,
                        width: parseInt(width),
                        height: parseInt(height)
                    });
                }
            }
            return [2 /*return*/, {
                    get: function (grapherUrl) {
                        return exportsByKey.get(grapherUrlToFilekey(grapherUrl));
                    }
                }];
        });
    });
}
exports.getGrapherExportsByUrl = getGrapherExportsByUrl;
// Find all the charts we want to show on public listings
function getIndexableCharts() {
    return __awaiter(this, void 0, void 0, function () {
        var chartItems, chartTags, _i, chartItems_1, c, chartsById, _a, chartTags_1, ct, c;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, grapherDb.query("SELECT id, config->>\"$.slug\" AS slug, config->>\"$.title\" AS title FROM charts WHERE publishedAt IS NOT NULL")];
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
                    return [2 /*return*/, chartItems];
            }
        });
    });
}
exports.getIndexableCharts = getIndexableCharts;
//# sourceMappingURL=grapherUtil.js.map
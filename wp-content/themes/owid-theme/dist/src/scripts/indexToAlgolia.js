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
var algoliasearch = require("algoliasearch");
var chunk = require('chunk-text');
var wpdb = require("../wpdb");
var settings_1 = require("../settings");
var formatting_1 = require("../formatting");
function indexToAlgolia() {
    return __awaiter(this, void 0, void 0, function () {
        var client, index, rows, records, _i, rows_1, row, post, _a, chunks, i, _b, chunks_1, c;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    client = algoliasearch(settings_1.ALGOLIA_ID, settings_1.ALGOLIA_ADMIN_KEY);
                    index = client.initIndex('mispydev_owid_articles');
                    index.setSettings({ attributeForDistinct: 'slug' });
                    return [2 /*return*/];
                case 1:
                    rows = _c.sent();
                    records = [];
                    _i = 0, rows_1 = rows;
                    _c.label = 2;
                case 2:
                    if (!(_i < rows_1.length)) return [3 /*break*/, 6];
                    row = rows_1[_i];
                    _a = formatting_1.formatPost;
                    return [4 /*yield*/, wpdb.getFullPost(row)];
                case 3: return [4 /*yield*/, _a.apply(void 0, [_c.sent(), {}])];
                case 4:
                    post = _c.sent();
                    chunks = chunk(post.plaintext, 1000);
                    i = 0;
                    for (_b = 0, chunks_1 = chunks; _b < chunks_1.length; _b++) {
                        c = chunks_1[_b];
                        records.push({
                            objectID: row.ID + "-c" + i,
                            slug: row.post_name,
                            title: row.post_title,
                            content: c
                        });
                        i += 1;
                    }
                    _c.label = 5;
                case 5:
                    _i++;
                    return [3 /*break*/, 2];
                case 6: return [4 /*yield*/, index.saveObjects(records)
                    // for (let i = 0; i < records.length; i += 1000) {
                    //     console.log(i)
                    //     await index.saveObjects(records.slice(i, i+1000))
                    // }
                ];
                case 7:
                    _c.sent();
                    // for (let i = 0; i < records.length; i += 1000) {
                    //     console.log(i)
                    //     await index.saveObjects(records.slice(i, i+1000))
                    // }
                    wpdb.end();
                    return [2 /*return*/];
            }
        });
    });
}
indexToAlgolia();
//# sourceMappingURL=indexToAlgolia.js.map
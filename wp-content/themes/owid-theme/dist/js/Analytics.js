"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Analytics = /** @class */ (function () {
    function Analytics() {
    }
    Analytics.logEvent = function (name, props) {
        props = Object.assign({}, { location: { href: window.location.href, pathname: window.location.pathname } }, props);
        return new Promise(function (resolve, reject) {
            if (!window.amplitude) {
                console.log(name, props);
                resolve();
            }
            else {
                window.amplitude.getInstance().logEvent(name, props, function () {
                    resolve();
                });
            }
        });
    };
    return Analytics;
}());
exports.Analytics = Analytics;
//# sourceMappingURL=Analytics.js.map
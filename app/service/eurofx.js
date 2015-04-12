///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../../typings/es6-promise/es6-promise.d.ts" />
///<reference path="../directive/timechart.ts" />
var com;
(function (com) {
    var uk;
    (function (uk) {
        var grapevine;
        (function (grapevine) {
            'use strict';
            var EuroFxService = (function () {
                function EuroFxService() {
                }
                EuroFxService.prototype.query = function (ccyPair, timerange, success, error) {
                    var _this = this;
                    var date = new Date();
                    if (timerange == "1m")
                        date.setMonth(date.getMonth() - 1);
                    else if (timerange == "3m")
                        date.setMonth(date.getMonth() - 3);
                    else if (timerange == "6m")
                        date.setMonth(date.getMonth() - 6);
                    else if (timerange == "1y")
                        date.setMonth(date.getMonth() - 12);
                    else if (timerange == "2y")
                        date.setMonth(date.getMonth() - 24);
                    else if (timerange == "5y")
                        date.setMonth(date.getMonth() - 60);
                    var format = function (v) {
                        return v < 10 ? "0" + v : v;
                    };
                    var ccy = ccyPair.toLowerCase().replace(/[^a-z]+/g, "").replace("eur", "");
                    var datestamp = encodeURIComponent(date.getFullYear() + "-" + format(date.getMonth()) + "-" + format(date.getDate()));
                    var request = new XMLHttpRequest();
                    request.open('GET', "https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20eurofx%20WHERE%20currency=%22" + ccy + "%22%20AND%20TIME_PERIOD%20%3E%20%22" + datestamp + "%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=");
                    request.onload = function () { return _this.translate(JSON.parse(request.response), success, error); };
                    request.onerror = function () { return error("Could not fetch data!"); };
                    request.send();
                };
                EuroFxService.prototype.translate = function (response, success, error) {
                    var results = response.query.results;
                    if (results) {
                        var data = [];
                        var items = results.Obs;
                        for (var key in items)
                            data.push(new grapevine.TimeChartData(parseFloat(items[key].OBS_VALUE), items[key].TIME_PERIOD));
                        success(data);
                    }
                    else {
                        error("Could not fetch data!");
                    }
                };
                return EuroFxService;
            })();
            grapevine.EuroFxService = EuroFxService;
        })(grapevine = uk.grapevine || (uk.grapevine = {}));
    })(uk = com.uk || (com.uk = {}));
})(com || (com = {}));
//# sourceMappingURL=eurofx.js.map
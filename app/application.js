///<reference path="../typings/angularjs/angular.d.ts" />
///<reference path="service/currencies.ts" />
///<reference path="service/eurofx.ts" />
///<reference path="controller/currency.controller.ts" />
///<reference path="controller/eurofx.controller.ts" />
///<reference path="controller/news.controller.ts" />
///<reference path="controller/market.controller.ts" />
///<reference path="directive/timechart.ts" />
///<reference path="directive/ticking.chart.ts" />
var com;
(function (com) {
    var uk;
    (function (uk) {
        var grapevine;
        (function (grapevine) {
            'use strict';
            angular.module('grapevine', []).controller('Market', grapevine.Market).controller('CurrencyController', grapevine.CurrencyController).controller('EuroFxController', grapevine.EuroFxController).controller('NewsController', grapevine.NewsController).service('currencies', grapevine.CurrencyService).service('eurofx', grapevine.EuroFxService).directive('timechart', grapevine.TimeChart.factory()).directive('timeSeriesChart', grapevine.TickingChart.factory());
        })(grapevine = uk.grapevine || (uk.grapevine = {}));
    })(uk = com.uk || (com.uk = {}));
})(com || (com = {}));
//# sourceMappingURL=application.js.map
///<reference path="../typings/angularjs/angular.d.ts" />
///<reference path="service/currencies.ts" />
///<reference path="service/eurofx.ts" />
///<reference path="controller/market.controller.ts" />
///<reference path="controller/eurofx.controller.ts" />
///<reference path="controller/news.controller.ts" />
///<reference path="directive/timechart.ts" />
var com;
(function (com) {
    var uk;
    (function (uk) {
        var grapevine;
        (function (grapevine) {
            'use strict';
            angular
                .module('grapevine', [])
                .controller('Market', grapevine.Market)
                .controller('NewsController', grapevine.NewsController)
                .controller('EuroFxController', grapevine.EuroFxController)
                .service('currencies', grapevine.CurrencyService)
                .service('eurofx', grapevine.EuroFxService)
                .directive('timechart', grapevine.TimeChart.factory());
        })(grapevine = uk.grapevine || (uk.grapevine = {}));
    })(uk = com.uk || (com.uk = {}));
})(com || (com = {}));
//# sourceMappingURL=application.js.map
///<reference path="../typings/angularjs/angular.d.ts" />
///<reference path="service/currencies.ts" />
///<reference path="controller/market.ts" />
///<reference path="controller/news.controller.ts" />
var com;
(function (com) {
    var uk;
    (function (uk) {
        var grapevine;
        (function (grapevine) {
            'use strict';
            angular.module('grapevine', []).controller('Market', grapevine.Market).controller('NewsController', grapevine.NewsController).service('currencies', grapevine.CurrencyService);
        })(grapevine = uk.grapevine || (uk.grapevine = {}));
    })(uk = com.uk || (com.uk = {}));
})(com || (com = {}));
//# sourceMappingURL=application.js.map
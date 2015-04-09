///<reference path="../typings/angularjs/angular.d.ts" />
///<reference path="service/currencies.ts" />
///<reference path="service/eurofx.ts" />
///<reference path="controller/market.controller.ts" />
///<reference path="controller/eurofx.controller.ts" />
///<reference path="controller/news.controller.ts" />
///<reference path="directive/timechart.ts" />

module com.uk.grapevine {
    'use strict';

    angular
        .module('grapevine', [])
        .controller('Market', Market)
        .controller('NewsController', NewsController)
        .controller('EuroFxController', EuroFxController)
        .service('currencies', CurrencyService)
        .service('eurofx', EuroFxService)
        .directive('timechart', TimeChart.factory());
}
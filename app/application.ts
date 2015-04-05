///<reference path="../typings/angularjs/angular.d.ts" />
///<reference path="service/currencies.ts" />
///<reference path="controller/market.controller.ts" />
///<reference path="controller/news.controller.ts" />
module com.uk.grapevine {
    'use strict';

    angular
        .module('grapevine', [])
        .controller('Market', Market)
        .controller('NewsController', NewsController)
        .service('currencies', CurrencyService);
}
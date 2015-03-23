///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../../typings/es6-promise/es6-promise.d.ts" />
///<reference path="../service/currencies.ts" />
///<reference path="../model/currency.ts" />
module com.uk.grapevine {
    'use strict';

    export class Market {

        /**
         * $inject annotation.
         * @type {string[]}
         */
        public static $inject = ['$scope', 'currencies'];

        private testing: string[];

        constructor(private $scope:ng.IScope, private currencies:CurrencyService) {

            this.testing = (<any>$scope).testing = [];

            $scope.$watch('testing', () => console.log( 'testing: ', this.testing.length ), true);

            setInterval( () => this.testing.push( "banana" + Math.random() * 100 ), 800 );

        }
    }
}
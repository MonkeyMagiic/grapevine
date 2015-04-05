///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../../typings/es6-promise/es6-promise.d.ts" />
///<reference path="../service/currencies.ts" />
///<reference path="../model/currency.ts" />
module com.uk.grapevine {
    'use strict';

    export class Market {

        //--------------------------------------------------------------------------
        //
        //  Static properties
        //
        //--------------------------------------------------------------------------

        /**
         * $inject annotation.
         * @type {string[]}
         */
        public static $inject = ['$scope', 'currencies'];

        //--------------------------------------------------------------------------
        //
        //  Constructor
        //
        //--------------------------------------------------------------------------

        /**
         * Constructor
         *
         * @param $scope
         * @param currencies
         */
        constructor(private $scope:ng.IScope, private currencies:CurrencyService) {

            this._currencyNames = (<any>$scope).currencyNames = currencies.names;

            this.$scope.$watchCollection(
                // Collection to watch.
                () => (<any>$scope).currencyNames,

                // Listener when watched property changes
                (newValue:ICurrency[], oldValue:ICurrency[]) => {

                    console.log('collection with currency names change');
                    console.log('newValue: ' + newValue);
                    console.log('oldValue: ' + oldValue);
                }
            );
        }

        //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //--------------------------------------------------------------------------

        /**
         * Storage for the currencyNames property.
         * @private
         */
        private _currencyNames:ICurrency[];

        /**
         * Collection of Currency Names
         * @returns {ICurrency[]}
         */
        public get currencyNames():ICurrency[] {
            return this._currencyNames;
        }
    }
}
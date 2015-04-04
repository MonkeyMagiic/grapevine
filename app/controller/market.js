///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../../typings/es6-promise/es6-promise.d.ts" />
///<reference path="../service/currencies.ts" />
///<reference path="../model/currency.ts" />
var com;
(function (com) {
    var uk;
    (function (uk) {
        var grapevine;
        (function (grapevine) {
            'use strict';
            var Market = (function () {
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
                function Market($scope, currencies) {
                    this.$scope = $scope;
                    this.currencies = currencies;
                    this._currencyNames = $scope.currencyNames = currencies.names;
                    this.$scope.$watchCollection(
                    // Collection to watch.
                    function () { return $scope.currencyNames; }, 
                    // Listener when watched property changes
                    function (newValue, oldValue) {
                        console.log('collection with currency names change');
                        console.log('newValue: ' + newValue);
                        console.log('oldValue: ' + oldValue);
                    });
                }
                Object.defineProperty(Market.prototype, "currencyNames", {
                    /**
                     * Collection of Currency Names
                     * @returns {ICurrency[]}
                     */
                    get: function () {
                        return this._currencyNames;
                    },
                    enumerable: true,
                    configurable: true
                });
                //--------------------------------------------------------------------------
                //
                //  Static properties
                //
                //--------------------------------------------------------------------------
                /**
                 * $inject annotation.
                 * @type {string[]}
                 */
                Market.$inject = ['$scope', 'currencies'];
                return Market;
            })();
            grapevine.Market = Market;
        })(grapevine = uk.grapevine || (uk.grapevine = {}));
    })(uk = com.uk || (com.uk = {}));
})(com || (com = {}));
//# sourceMappingURL=market.js.map
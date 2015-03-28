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
                /**
                 * Constructor
                 *
                 * @param $scope
                 * @param currencies
                 */
                function Market($scope, currencies) {
                    var _this = this;
                    this.$scope = $scope;
                    this.currencies = currencies;
                    this._currencyNames = $scope.currencyNames = currencies.names;
                    this.$scope.$watchCollection(
                    // Collection to watch.
                    function () { return $scope.currencyNames; }, 
                    // Listener when watched property changes
                    function (newValue, oldValue) {
                        console.log('testing: ', _this.currencyNames.length);
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
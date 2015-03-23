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
                function Market($scope, currencies) {
                    var _this = this;
                    this.$scope = $scope;
                    this.currencies = currencies;
                    this.testing = $scope.testing = [];
                    $scope.$watch('testing', function () { return console.log('testing: ', _this.testing.length); }, true);
                    setInterval(function () { return _this.testing.push("banana" + Math.random() * 100); }, 800);
                }
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
///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../model/currency.pair.ts" />
var com;
(function (com) {
    var uk;
    (function (uk) {
        var grapevine;
        (function (grapevine) {
            var CurrencyController = (function () {
                function CurrencyController($scope) {
                    this.$scope = $scope;
                }
                Object.defineProperty(CurrencyController.prototype, "selectedPair", {
                    get: function () {
                        return this._selectedPair;
                    },
                    enumerable: true,
                    configurable: true
                });
                return CurrencyController;
            })();
            grapevine.CurrencyController = CurrencyController;
        })(grapevine = uk.grapevine || (uk.grapevine = {}));
    })(uk = com.uk || (com.uk = {}));
})(com || (com = {}));
//# sourceMappingURL=currency.controller.js.map
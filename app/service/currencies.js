///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../../typings/es6-promise/es6-promise.d.ts" />
///<reference path="../model/currency.ts" />
var com;
(function (com) {
    var uk;
    (function (uk) {
        var grapevine;
        (function (grapevine) {
            var CurrencyService = (function () {
                /**
                 * Constructor
                 * @param $rootScope
                 */
                function CurrencyService($rootScope) {
                    var _this = this;
                    this.$rootScope = $rootScope;
                    /**
                     * Storage for names retrieved from service.
                     * @private
                     */
                    this.names = [];
                    var request = new XMLHttpRequest();
                    request.open('GET', "http://openexchangerates.org/api/currencies.json");
                    request.onload = function () { return _this.complete(request.response); };
                    request.onerror = function () { return _this.error(request.response); };
                    request.send();
                }
                /**
                 *
                 * @param data
                 */
                CurrencyService.prototype.complete = function (data) {
                    var that = this;
                    this.$rootScope.$apply(function () {
                        var jsonData = JSON.parse(data);
                        for (var k in jsonData) {
                            that.names.push(new Currency(k, data[k]));
                        }
                    });
                };
                /**
                 *
                 * @param message
                 */
                CurrencyService.prototype.error = function (message) {
                    // Handle error here.
                };
                /**
                 * $inject annotation.
                 * @type {string[]}
                 */
                CurrencyService.$inject = ['$rootScope'];
                return CurrencyService;
            })();
            grapevine.CurrencyService = CurrencyService;
        })(grapevine = uk.grapevine || (uk.grapevine = {}));
    })(uk = com.uk || (com.uk = {}));
})(com || (com = {}));
//# sourceMappingURL=currencies.js.map
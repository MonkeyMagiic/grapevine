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
                function CurrencyService() {
                    var _this = this;
                    /**
                     * Storage for names retrieved from service.
                     * @private
                     */
                    this._names = [];
                    /**
                     * Collection of pending promises.
                     * @private
                     */
                    this._pendingPromises = [];
                    var request = new XMLHttpRequest();
                    request.open('GET', "http://openexchangerates.org/api/currencies.json");
                    request.onload = function () { return _this.complete(request.response); };
                    // request.onerror = ()
                    request.send();
                }
                /**
                 *
                 * @returns {Promise<ICurrency[]>}
                 */
                /*
                public getNames():Promise<ICurrency[]> {
                    var that = this;
                    var p:Promise<ICurrency[]> = new Promise<ICurrency[]>(function (resolve, reject) {
                        if (that._names !== undefined) {
                            resolve(that._names);
                        }
                        else {
                            that._pendingPromises.push(this);
                        }
                    });
                    return p;
                }
                */
                /**
                 * @private
                 */
                CurrencyService.prototype.initialize = function () {
                    /*
                     new Promise<string>(function (resolve, reject) {
        
        
                     })
                     .then(JSON.parse)
                     .then(function (data:Object):Array<ICurrency> {
        
                     var items:Array<ICurrency> = new Array<ICurrency>();
                     for (var k in data) {
                     items.push(new Currency(<string>k, data[k]));
                     }
                     return items;
                     })
                     .then(result => this._names.push.apply(this._names, result))
                     .then(result => console.log('Items Loaded', this._names.length));
                     */
                };
                /**
                 *
                 * @param data
                 */
                CurrencyService.prototype.complete = function (data) {
                    var jsonData = JSON.parse(data);
                    for (var k in data) {
                        this._names.push(new Currency(k, data[k]));
                    }
                    console.log(this._names);
                    /*
                    while(this._pendingPromises.length)
                    {
                        this._pendingPromises.shift().resolve( this._names );
                    }
                    */
                };
                return CurrencyService;
            })();
            grapevine.CurrencyService = CurrencyService;
        })(grapevine = uk.grapevine || (uk.grapevine = {}));
    })(uk = com.uk || (com.uk = {}));
})(com || (com = {}));
//# sourceMappingURL=currencies.js.map
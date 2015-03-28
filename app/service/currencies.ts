///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../../typings/es6-promise/es6-promise.d.ts" />
///<reference path="../model/currency.ts" />
module com.uk.grapevine {
    export class CurrencyService {

        /**
         * $inject annotation.
         * @type {string[]}
         */
        public static $inject = ['$rootScope'];

        /**
         * Constructor
         * @param $rootScope
         */
        constructor(private $rootScope) {
            var request:XMLHttpRequest = new XMLHttpRequest();
            request.open('GET', "http://openexchangerates.org/api/currencies.json");
            request.onload = () => this.complete(request.response);
            request.onerror = () => this.error(request.response);
            request.send();
        }

        /**
         * Storage for names retrieved from service.
         * @private
         */
        public names:Array<ICurrency> = [];

        /**
         *
         * @param data
         */
        private complete(data:any):void {

            var that = this;
            this.$rootScope.$apply(function () {
                var jsonData:JSON = JSON.parse(data);
                for (var k in jsonData) {
                    that.names.push(new Currency(<string>k, data[k]));
                }
            });
        }

        /**
         *
         * @param message
         */
        private error(message:any):void {
            // Handle error here.
        }

    }
}
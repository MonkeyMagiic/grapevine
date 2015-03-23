///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../../typings/es6-promise/es6-promise.d.ts" />
///<reference path="../model/currency.ts" />
module com.uk.grapevine {
    export class CurrencyService {

        constructor() {

            var request:XMLHttpRequest = new XMLHttpRequest();
            request.open('GET', "http://openexchangerates.org/api/currencies.json");
            request.onload = () => this.complete(request.response);
            // request.onerror = ()
            request.send();
        }

        /**
         * Storage for names retrieved from service.
         * @private
         */
        private _names:Array<ICurrency> = [];

        /**
         * Collection of pending promises.
         * @private
         */
        private _pendingPromises:Array<Promise<ICurrency[]>> = [];

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
        private initialize():void {



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
        }

        /**
         *
         * @param data
         */
        private complete(data:any):void {

            var jsonData:JSON = JSON.parse(data);
            for (var k in data) {
                this._names.push(new Currency(<string>k, data[k]));
            }
            console.log(this._names)

            /*
            while(this._pendingPromises.length)
            {
                this._pendingPromises.shift().resolve( this._names );
            }
            */
        }


        /*
         private retrieveCurrencies():Promise<string> {
         return new Promise<string>(function (resolve, reject) {

         var request:XMLHttpRequest = new XMLHttpRequest();
         request.open('GET', "http://openexchangerates.org/api/currencies.json");
         request.onload = function () {
         if (request.status == 200) {
         console.log('>resolve')
         resolve(request.response);
         }
         else {
         console.log('>error')
         reject(Error(request.statusText));
         }
         };
         request.onerror = function () {
         reject(Error("Network Error"));
         };
         request.send();
         });
         }
         */

    }
}
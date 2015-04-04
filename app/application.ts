///<reference path="../typings/angularjs/angular.d.ts" />
///<reference path="service/currencies.ts" />
///<reference path="controller/market.ts" />
///<reference path="controller/news.controller.ts" />
module com.uk.grapevine {
    'use strict';

    angular
        .module('grapevine', [])
        .controller('Market', Market)
        .controller('NewsController', NewsController)
        .service('currencies', CurrencyService);


    /*
     export class Application {

     //--------------------------------------------------------------------------
     //
     //  Constructor
     //
     //--------------------------------------------------------------------------

     constructor() {
     document.addEventListener('DOMContentLoaded', (event:Event) => this.dom_contentLoaded(event));
     }

     //--------------------------------------------------------------------------
     //
     //  Variables
     //
     //--------------------------------------------------------------------------

     private service:ServiceProxy = new ServiceProxy();

     //--------------------------------------------------------------------------
     //
     //  Methods
     //
     //--------------------------------------------------------------------------

     private initialize():void {
     }

     //--------------------------------------------------------------------------
     //
     //  Event handlers
     //
     //--------------------------------------------------------------------------

     private dom_contentLoaded(event:Event):void {
     document.removeEventListener('DOMContentLoaded', <EventListener>arguments.callee);
     this.initialize();
     }

     }
     */
}
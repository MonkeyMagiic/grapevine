///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../model/currency.pair.ts" />
module com.uk.grapevine {

    export class CurrencyController {
        constructor(private $scope:CurrencyScope) {

        }

        private _selectedPair:CurrencyPair[];

        public get selectedPair() {
            return this._selectedPair;
        }
    }

    export interface CurrencyScope extends ng.IScope {

    }
}
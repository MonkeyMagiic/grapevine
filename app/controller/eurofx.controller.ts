///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../directive/timechart.ts" />
///<reference path="../service/eurofx.ts" />

module com.uk.grapevine {
    'use strict';

    export class EuroFxController {

        public static $inject = ['$scope', 'eurofx'];

        constructor(private $scope: EuroFxScope, private eurofx: EuroFxService) {
            $scope.graphData = [];

            $scope.search = function() {
                eurofx.query($scope.ccyPair, "3m", (data: TimeChartData[]) => {
                    $scope.$apply(function() {
                        $scope.graphData = data;
                    });
                }, (msg: string) => {
                    // Handle error
                    console.log(msg);
                });
            };
        }
    }

    export interface EuroFxScope extends ng.IScope {
        graphData: TimeChartData[];
        ccyPair: string;
        search: () => void;
    }

}
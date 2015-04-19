/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/d3/d3.d.ts" />
///<reference path="../model/article.ts" />

module com.uk.grapevine {
    'use strict';

    export class RESTRICTIONS {
        static ELEMENT:string = "E";
        static ATTRIBUTE:string = "A";
        static CLASS:string = "C";
        static COMMENT:string = "M";
    }

    export interface DataScope< T extends Object> extends ng.IScope {
        data : T[];
    }

    export class TickingChart implements ng.IDirective {

        /**
         * Factory used to create instances of the chart.
         * @returns {function(): com.uk.grapevine.TickingChart}
         */
        public static factory():ng.IDirectiveFactory {
            var d = () => new TickingChart();
            d.$inject = [];
            return d;
        }

        public restrict:string = RESTRICTIONS.ELEMENT;
        public scope = {data: '='};
        public template:string = "<div class=\"timechart\"></div>";
        public link:($scope:DataScope<Article>, element:ng.IAugmentedJQuery, attrs:ng.IAttributes) => void;

        constructor() {

            this.link = ($scope:DataScope<Article>, element:ng.IAugmentedJQuery, attrs:ng.IAttributes) => {

                $scope.$watchCollection(
                    'data',
                    (newValue:Article[], oldValue:Article[]) => this.invalidateDisplayList(newValue)
                );
            }
        }

        private invalidateDisplayList(value:Array<any>):void {
            console.log('InvalidateDisplayList called: ' + value.length)

            var i:number = 0;
            while (i < value.length) {
                console.log(value[i])
                i++;
            } // End of loop.
        }
    }
}
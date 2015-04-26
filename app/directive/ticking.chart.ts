/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/d3/d3.d.ts" />
///<reference path="../model/article.ts" />

module com.uk.grapevine {
    'use strict';

    import LinearScale = D3.Scale.LinearScale;
    import Axis = D3.Svg.Axis;
    import Line = D3.Svg.Line;

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
        public link:($scope:DataScope<Article>, element:ng.IAugmentedJQuery, attrs:ng.IAttributes) => void;

        private _surface:D3.Selection;

        constructor() {

            this.link = ($scope:DataScope<Article>, element:ng.IAugmentedJQuery, attrs:ng.IAttributes) => {

                var margin = {top: 30, right: 30, bottom: 30, left: 60},
                    width = 500 - margin.left - margin.right,
                    height = 300 - margin.top - margin.bottom;

                // set up initial svg object
                this._surface = d3.select(element[0])
                    .append("svg")
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)

                // Add listeners.
                $scope.$watchCollection(
                    'data',
                    (newValue:Article[], oldValue:Article[]) => this.invalidateDisplayList(newValue)
                );
            }
        }

        private invalidateDisplayList(value:Array<any>):void {

            var i:number = 0;
            while (i < value.length) {
                console.log(value[i])
                i++;
            } // End of loop.

            var margin = {top: 30, right: 30, bottom: 30, left: 60},
                width = 500 - margin.left - margin.right,
                height = 300 - margin.top - margin.bottom;

            var data = [
                [12345, 42345, 3234, 22345, 72345, 62345, 32345, 92345, 52345, 22345],
                [1234, 4234, 3234, 2234, 7234, 6234, 3234, 9234, 5234, 2234]
            ];

            var x:LinearScale = d3.scale.linear().domain([0, data[0].length]).range([0, width]),
                y:LinearScale = d3.scale.linear().domain([0, d3.max(data[0])]).range([height, 0]),
                xAxis:Axis = d3.svg.axis().scale(x).ticks(10),
                yAxis:Axis = d3.svg.axis().scale(y).ticks(10).orient("left");

            var line = d3.svg.line()
                .x(function (d, i) {
                    return x(i);
                })
                .y(function (d) {
                    return y(d);
                });

            var area = d3.svg.area()
                .x(line.x())
                .y1(line.y())
                .y0(y(0));

            var lines = this._surface.selectAll("g")
                .data(data);

            var aLineContainer = lines.enter().append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            aLineContainer
                .append("path")
                .attr("class", "area")
                .attr("d", area);

            aLineContainer
                .append("path")
                .attr("class", "line")
                .attr("d", line);

            aLineContainer.selectAll(".dot")
                .data(function (d, i) {
                    return d;
                })
                .enter()
                .append("circle")
                .attr("class", "dot")
                .attr("cx", line.x())
                .attr("cy", line.y())
                .attr("r", 3.0);

            // Add the x-axis.
            this._surface.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(" + margin.left + "," + (height + margin.top) + ")")
                .call(xAxis);

            // Add the y-axis.
            this._surface.append("g")
                .attr("class", "y axis")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
                .call(yAxis);
        }
    }
}
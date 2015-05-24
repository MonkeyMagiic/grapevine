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

        private _margin:any = {top: 30, right: 30, bottom: 30, left: 60};

        /**
         * Width of component in pixels.
         * @type {number}
         * @private
         */
        private _width:number = 900;

        /**
         * Height of the component in pixels.
         * @type {number}
         * @private
         */
        private _height:number = 500;

        constructor() {

            this.link = ($scope:DataScope<Article>, element:ng.IAugmentedJQuery, attrs:ng.IAttributes) => {

                // set up initial svg object
                this._surface = d3.select(element[0])
                    .append("svg")
                    .attr("width", this._width)
                    .attr("height", this._height);

                // Add listeners.
                $scope.$watchCollection(
                    'data',
                    (newValue:Article[], oldValue:Article[]) => this.validateDisplayList(newValue)
                );
            }
        }

        private validateDisplayList(value:Array<Article>):void {

            ////// DEBUGGING INFORMATION

            value.forEach(item  => {
                console.log('Item to be rendered: ' + item.date + ' ' + item.title)
            })

            ////// END
            var w:number = this._width - this._margin.left - this._margin.right,
                h:number = this._height - this._margin.top - this._margin.bottom;

            var data = [12345, 42345, 3234, 22345, 72345, 62345, 32345, 92345, 52345, 22345];

            var scaleX:LinearScale = d3.scale.linear().domain([0, data.length]).range([0, w]),
                scaleY:LinearScale = d3.scale.linear().domain([d3.min(data), d3.max(data)]).range([h, 0]),
                xAxis:Axis = d3.svg.axis().scale(scaleX).ticks(10),
                yAxis:Axis = d3.svg.axis().scale(scaleY).ticks(10).orient("left");

            var line:Line = d3.svg.line()
                .x((data:number, index:number) => scaleX(index))
                .y((data:number) => scaleY(data));

            // Enter
            var lineGraphics:D3.Selection = this._surface.append("g");

            lineGraphics
                .append("path")
                .datum(data)
                .attr("transform", "translate(" + this._margin.left + "," + this._margin.top + ")")
                .attr("class", "line")
                .attr("d", line);

            lineGraphics.selectAll(".dot")
                .data(data)
                .enter()
                .append("svg:circle")
                .attr("class", "dot")
                .attr("transform", "translate(" + this._margin.left + "," + this._margin.top + ")")
                .attr("cx", line.x())
                .attr("cy", line.y())
                .attr("r", 3.0)
                .append("svg:title")
                .text(function (d) {
                    return d;
                });

            // Add the x-axis.
            this._surface.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(" + this._margin.left + "," + (h + this._margin.top) + ")")
                .call(xAxis);

            // Add the y-axis.
            this._surface.append("g")
                .attr("class", "y axis")
                .attr("transform", "translate(" + this._margin.left + "," + this._margin.top + ")")
                .call(yAxis);
        }
    }
}
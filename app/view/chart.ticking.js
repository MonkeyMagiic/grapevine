/*jslint browser: true*/
/*global $, jQuery, angular*/

(function () {
    'use strict';

    angular
        .module('grapevine')
        .directive('tickingChart', chart);

    /**
     * Constructor
     * @returns {{controller: controller, controllerAs: string, link: link, restrict: string, transclude: boolean, scope: {sourceProvider: string, selectedItem: string, autoSelect: string}, template: string}}
     */
    function chart() {

        var directive = {
            controller: controller,
            controllerAs: 'vm',
            link: link,
            restrict: 'EA',  //E = element, A = attribute, C = class, M = comment
            scope: {
                val: '=',
                grouped: '='
            }
        };
        return directive;

        /**
         * @private
         * @param scope
         * @param element
         * @param attributes
         * @param controller
         */
        function link(scope, element, attributes, controller) {

            var data = [
                [12345, 42345, 3234, 22345, 72345, 62345, 32345, 92345, 52345, 22345],
                [1234, 4234, 3234, 2234, 7234, 6234, 3234, 9234, 5234, 2234]
            ];

            var margin = {top: 30, right: 30, bottom: 30, left: 60},
                width = 500 - margin.left - margin.right,
                height = 300 - margin.top - margin.bottom;

            var x = d3.scale.linear().domain([0, data[0].length]).range([0, width]),
                y = d3.scale.linear().domain([0, d3.max(data[0])]).range([height, 0]),
                xAxis = d3.svg.axis().scale(x).ticks(10),
                yAxis = d3.svg.axis().scale(y).ticks(10).orient("left");

            // set up initial svg object
            var svg = d3.select(element[0])
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom);

            var increment = 10;

            // horizontal lines
            svg.selectAll(".hline").data(d3.range(increment)).enter()
                .append("line")
                .attr("y1", function (d) {
                    return d * 26 + 6;
                })
                .attr("y2", function (d) {
                    return d * 26 + 6;
                })
                .attr("x1", function (d) {
                    return 0;
                })
                .attr("x2", function (d) {
                    return width;
                })
                .style("stroke", "#eee")
                .style("stroke-opacity", 0.2)
                .style("stroke-width", 0.5)
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            //vertical lines
            svg.selectAll(".vline").data(d3.range(21)).enter()
                .append("line")
                .attr("x1", function (d) {
                    return d * (width / increment);
                })
                .attr("x2", function (d) {
                    return d * (width / increment);
                })
                .attr("y1", function (d) {
                    return 0;
                })
                .attr("y2", function (d) {
                    return height;
                })
                .style("stroke", "#eee")
                .style("stroke-opacity", 0.2)
                .style("stroke-width", 0.5)
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

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

            var lines = svg.selectAll("g")
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
            svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(" + margin.left + "," + (height + margin.top) + ")")
                .call(xAxis);

            // Add the y-axis.
            svg.append("g")
                .attr("class", "y axis")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
                .call(yAxis);
        }

        /**
         *
         * @param $scope
         * @param $element
         * @param $timeout
         * @param $rootScope
         */
        function controller($scope, $element, $timeout, $rootScope) {


        }

    }
})();
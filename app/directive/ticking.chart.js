/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/d3/d3.d.ts" />
///<reference path="../model/article.ts" />
var com;
(function (com) {
    var uk;
    (function (uk) {
        var grapevine;
        (function (grapevine) {
            'use strict';
            var RESTRICTIONS = (function () {
                function RESTRICTIONS() {
                }
                RESTRICTIONS.ELEMENT = "E";
                RESTRICTIONS.ATTRIBUTE = "A";
                RESTRICTIONS.CLASS = "C";
                RESTRICTIONS.COMMENT = "M";
                return RESTRICTIONS;
            })();
            grapevine.RESTRICTIONS = RESTRICTIONS;
            var TickingChart = (function () {
                function TickingChart() {
                    var _this = this;
                    this.restrict = RESTRICTIONS.ELEMENT;
                    this.scope = { data: '=' };
                    this.link = function ($scope, element, attrs) {
                        var margin = { top: 30, right: 30, bottom: 30, left: 60 }, width = 500 - margin.left - margin.right, height = 300 - margin.top - margin.bottom;
                        // set up initial svg object
                        _this._surface = d3.select(element[0]).append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom);
                        // Add listeners.
                        $scope.$watchCollection('data', function (newValue, oldValue) { return _this.invalidateDisplayList(newValue); });
                    };
                }
                /**
                 * Factory used to create instances of the chart.
                 * @returns {function(): com.uk.grapevine.TickingChart}
                 */
                TickingChart.factory = function () {
                    var d = function () { return new TickingChart(); };
                    d.$inject = [];
                    return d;
                };
                TickingChart.prototype.invalidateDisplayList = function (value) {
                    var i = 0;
                    while (i < value.length) {
                        console.log(value[i]);
                        i++;
                    }
                    var margin = { top: 30, right: 30, bottom: 30, left: 60 }, width = 500 - margin.left - margin.right, height = 300 - margin.top - margin.bottom;
                    var data = [
                        [12345, 42345, 3234, 22345, 72345, 62345, 32345, 92345, 52345, 22345],
                        [1234, 4234, 3234, 2234, 7234, 6234, 3234, 9234, 5234, 2234]
                    ];
                    var x = d3.scale.linear().domain([0, data[0].length]).range([0, width]), y = d3.scale.linear().domain([0, d3.max(data[0])]).range([height, 0]), xAxis = d3.svg.axis().scale(x).ticks(10), yAxis = d3.svg.axis().scale(y).ticks(10).orient("left");
                    var line = d3.svg.line().x(function (d, i) {
                        return x(i);
                    }).y(function (d) {
                        return y(d);
                    });
                    var area = d3.svg.area().x(line.x()).y1(line.y()).y0(y(0));
                    var lines = this._surface.selectAll("g").data(data);
                    var aLineContainer = lines.enter().append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                    aLineContainer.append("path").attr("class", "area").attr("d", area);
                    aLineContainer.append("path").attr("class", "line").attr("d", line);
                    aLineContainer.selectAll(".dot").data(function (d, i) {
                        return d;
                    }).enter().append("circle").attr("class", "dot").attr("cx", line.x()).attr("cy", line.y()).attr("r", 3.0);
                    // Add the x-axis.
                    this._surface.append("g").attr("class", "x axis").attr("transform", "translate(" + margin.left + "," + (height + margin.top) + ")").call(xAxis);
                    // Add the y-axis.
                    this._surface.append("g").attr("class", "y axis").attr("transform", "translate(" + margin.left + "," + margin.top + ")").call(yAxis);
                };
                return TickingChart;
            })();
            grapevine.TickingChart = TickingChart;
        })(grapevine = uk.grapevine || (uk.grapevine = {}));
    })(uk = com.uk || (com.uk = {}));
})(com || (com = {}));
//# sourceMappingURL=ticking.chart.js.map
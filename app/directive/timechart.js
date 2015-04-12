/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="../../typings/d3/d3.d.ts" />
var com;
(function (com) {
    var uk;
    (function (uk) {
        var grapevine;
        (function (grapevine) {
            'use strict';
            var TimeChart = (function () {
                function TimeChart($location) {
                    var _this = this;
                    this.$location = $location;
                    this.restrict = 'E';
                    this.template = "<div class=\"timechart\"></div>";
                    this.link = function ($scope, element, attrs) {
                        console.log("Injection works: " + _this.$location.absUrl());
                        _this.graphElem = element.children()[0];
                        $scope.$watch(function () {
                            return attrs.data;
                        }, _this.renderGraph);
                    };
                    this.renderGraph = function (value) {
                        var data = JSON.parse(value);
                        _this.graphElem.innerHTML = "";
                        if (data.length) {
                            var margin = { top: 10, right: 50, bottom: 70, left: 30 };
                            var width = _this.graphElem.clientWidth - margin.left - margin.right;
                            var height = _this.graphElem.clientHeight - margin.top - margin.bottom;
                            var parseDate = d3.time.format("%Y-%m-%d").parse;
                            var x = d3.time.scale().range([0, width]);
                            var y = d3.scale.linear().range([height, 0]);
                            var xAxis = d3.svg.axis().scale(x).orient("bottom");
                            var yAxis = d3.svg.axis().scale(y).orient("left");
                            var line = d3.svg.line().x(function (d) {
                                return x(parseDate(d.time));
                            }).y(function (d) {
                                return y(d.value);
                            });
                            var svg = d3.select(_this.graphElem).append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
                            x.domain(d3.extent(data, function (d) {
                                return parseDate(d.time);
                            }));
                            y.domain(d3.extent(data, function (d) {
                                return d.value;
                            }));
                            svg.append("g").attr("class", "x axis").attr("transform", "translate(0," + height + ")").call(xAxis);
                            svg.append("g").attr("class", "y axis").call(yAxis).append("text").attr("transform", "rotate(-90)").attr("y", 6).attr("dy", ".71em");
                            svg.append("path").datum(data).attr("class", "line").attr("d", line);
                        }
                    };
                }
                TimeChart.factory = function () {
                    var directive = function ($location) { return new TimeChart($location); };
                    directive.$inject = ['$location'];
                    return directive;
                };
                return TimeChart;
            })();
            grapevine.TimeChart = TimeChart;
            var TimeChartData = (function () {
                function TimeChartData(value, time) {
                    this.value = value;
                    this.time = time;
                }
                return TimeChartData;
            })();
            grapevine.TimeChartData = TimeChartData;
        })(grapevine = uk.grapevine || (uk.grapevine = {}));
    })(uk = com.uk || (com.uk = {}));
})(com || (com = {}));
//# sourceMappingURL=timechart.js.map
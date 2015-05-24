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
                    this._margin = { top: 30, right: 30, bottom: 30, left: 60 };
                    /**
                     * Width of component in pixels.
                     * @type {number}
                     * @private
                     */
                    this._width = 900;
                    /**
                     * Height of the component in pixels.
                     * @type {number}
                     * @private
                     */
                    this._height = 500;
                    this.link = function ($scope, element, attrs) {
                        // set up initial svg object
                        _this._surface = d3.select(element[0]).append("svg").attr("width", _this._width).attr("height", _this._height);
                        // Add listeners.
                        $scope.$watchCollection('data', function (newValue, oldValue) { return _this.validateDisplayList(newValue); });
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
                TickingChart.prototype.validateDisplayList = function (value) {
                    ////// DEBUGGING INFORMATION
                    value.forEach(function (item) {
                        console.log('Item to be rendered: ' + item.date + ' ' + item.title);
                    });
                    ////// END
                    var w = this._width - this._margin.left - this._margin.right, h = this._height - this._margin.top - this._margin.bottom;
                    var data = [12345, 42345, 3234, 22345, 72345, 62345, 32345, 92345, 52345, 22345];
                    var scaleX = d3.scale.linear().domain([0, data.length]).range([0, w]), scaleY = d3.scale.linear().domain([d3.min(data), d3.max(data)]).range([h, 0]), xAxis = d3.svg.axis().scale(scaleX).ticks(10), yAxis = d3.svg.axis().scale(scaleY).ticks(10).orient("left");
                    var line = d3.svg.line().x(function (data, index) { return scaleX(index); }).y(function (data) { return scaleY(data); });
                    // Enter
                    var lineGraphics = this._surface.append("g");
                    lineGraphics.append("path").datum(data).attr("transform", "translate(" + this._margin.left + "," + this._margin.top + ")").attr("class", "line").attr("d", line);
                    lineGraphics.selectAll(".dot").data(data).enter().append("svg:circle").attr("class", "dot").attr("transform", "translate(" + this._margin.left + "," + this._margin.top + ")").attr("cx", line.x()).attr("cy", line.y()).attr("r", 3.0).append("svg:title").text(function (d) {
                        return d;
                    });
                    // Add the x-axis.
                    this._surface.append("g").attr("class", "x axis").attr("transform", "translate(" + this._margin.left + "," + (h + this._margin.top) + ")").call(xAxis);
                    // Add the y-axis.
                    this._surface.append("g").attr("class", "y axis").attr("transform", "translate(" + this._margin.left + "," + this._margin.top + ")").call(yAxis);
                };
                return TickingChart;
            })();
            grapevine.TickingChart = TickingChart;
        })(grapevine = uk.grapevine || (uk.grapevine = {}));
    })(uk = com.uk || (com.uk = {}));
})(com || (com = {}));
//# sourceMappingURL=ticking.chart.js.map
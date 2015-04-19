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
                    this.template = "<div class=\"timechart\"></div>";
                    this.link = function ($scope, element, attrs) {
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
                    console.log('InvalidateDisplayList called: ' + value.length);
                    var i = 0;
                    while (i < value.length) {
                        console.log(value[i]);
                        i++;
                    }
                };
                return TickingChart;
            })();
            grapevine.TickingChart = TickingChart;
        })(grapevine = uk.grapevine || (uk.grapevine = {}));
    })(uk = com.uk || (com.uk = {}));
})(com || (com = {}));
//# sourceMappingURL=ticking.chart.js.map
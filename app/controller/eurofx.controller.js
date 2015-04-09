///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../directive/timechart.ts" />
///<reference path="../service/eurofx.ts" />
var com;
(function (com) {
    var uk;
    (function (uk) {
        var grapevine;
        (function (grapevine) {
            'use strict';
            var EuroFxController = (function () {
                function EuroFxController($scope, eurofx) {
                    this.$scope = $scope;
                    this.eurofx = eurofx;
                    $scope.graphData = [];
                    $scope.search = function () {
                        eurofx.query($scope.ccyPair, "3m", function (data) {
                            $scope.$apply(function () {
                                $scope.graphData = data;
                            });
                        }, function (msg) {
                            // Handle error
                            console.log(msg);
                        });
                    };
                }
                EuroFxController.$inject = ['$scope', 'eurofx'];
                return EuroFxController;
            })();
            grapevine.EuroFxController = EuroFxController;
        })(grapevine = uk.grapevine || (uk.grapevine = {}));
    })(uk = com.uk || (com.uk = {}));
})(com || (com = {}));
//# sourceMappingURL=eurofx.controller.js.map
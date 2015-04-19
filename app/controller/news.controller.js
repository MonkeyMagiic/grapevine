///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../../typings/es6-promise/es6-promise.d.ts" />
///<reference path="../model/article.ts" />
var com;
(function (com) {
    var uk;
    (function (uk) {
        var grapevine;
        (function (grapevine) {
            var Article = com.uk.grapevine.Article;
            var NewsController = (function () {
                /**
                 * Constructor
                 *
                 * @param $scope
                 */
                function NewsController($scope) {
                    var _this = this;
                    this.$scope = $scope;
                    this._articles = $scope.articles = [];
                    var p = new Promise(function (resolve, reject) {
                        var translator = function (value) {
                            var items = new Array();
                            var j = JSON.parse(value).response;
                            var results = j.results;
                            var i = 0;
                            var item;
                            while (i < results.length) {
                                item = results[i];
                                items.push(new Article(item.id, new Date(item.webPublicationDate), item.webTitle));
                                i++;
                            }
                            return items;
                        };
                        var request = new XMLHttpRequest();
                        request.open('GET', NewsController.SEARCH_API);
                        request.onload = function () { return resolve(translator(request.response)); };
                        request.onerror = function () { return reject(request.response); };
                        request.send();
                    });
                    p.then(function (value) { return $scope.$apply(function () { return _this._articles.push.apply(_this._articles, value); }); }).then(function () { return console.log('Articles loading complete: ' + _this._articles); });
                }
                Object.defineProperty(NewsController.prototype, "articles", {
                    get: function () {
                        return this._articles;
                    },
                    enumerable: true,
                    configurable: true
                });
                //--------------------------------------------------------------------------
                //
                //  Static properties
                //
                //--------------------------------------------------------------------------
                /**
                 * Unique generated key.
                 * @type {string}
                 */
                NewsController.USAGE_KEY = "rh5m2ukrf2v5gkmtccy6yw4h";
                /**
                 * The root URL for the guardian API.
                 * @private
                 * @type {string}
                 */
                NewsController.DOMAIN = "http://content.guardianapis.com/";
                /**
                 * Search.
                 * @private
                 * @type {string}
                 */
                NewsController.SEARCH_API = NewsController.DOMAIN + "search?api-key=" + NewsController.USAGE_KEY + "&show-tags=all&q=federal,%20reserve";
                //--------------------------------------------------------------------------
                //
                //  Constructor
                //
                //--------------------------------------------------------------------------
                /**
                 * $inject annotation.
                 * @type {string[]}
                 */
                NewsController.$inject = ['$scope'];
                return NewsController;
            })();
            grapevine.NewsController = NewsController;
        })(grapevine = uk.grapevine || (uk.grapevine = {}));
    })(uk = com.uk || (com.uk = {}));
})(com || (com = {}));
//# sourceMappingURL=news.controller.js.map
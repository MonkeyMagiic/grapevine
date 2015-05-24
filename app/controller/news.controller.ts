///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../../typings/es6-promise/es6-promise.d.ts" />
///<reference path="../model/article.ts" />
module com.uk.grapevine {

    import Article = com.uk.grapevine.Article;
    import Tag = com.uk.grapevine.Tag;

    export class NewsController {

        //--------------------------------------------------------------------------
        //
        //  Static properties
        //
        //--------------------------------------------------------------------------

        /**
         * Unique generated key.
         * @type {string}
         */
        private static USAGE_KEY:string = "rh5m2ukrf2v5gkmtccy6yw4h";

        /**
         * The root URL for the guardian API.
         * @private
         * @type {string}
         */
        private static DOMAIN:string = "http://content.guardianapis.com/";

        /**
         * Search.
         * @private
         * @type {string}
         */
        private static SEARCH_API:string = NewsController.DOMAIN + "search?api-key=" + NewsController.USAGE_KEY + "&show-tags=all&q=federal,%20reserve";


        //--------------------------------------------------------------------------
        //
        //  Constructor
        //
        //--------------------------------------------------------------------------

        /**
         * $inject annotation.
         * @type {string[]}
         */
        public static $inject = ['$scope'];

        /**
         * Constructor
         *
         * @param $scope
         */
        constructor(private $scope:NewsScope) {

            this._articles = $scope.articles = [];

            var p:Promise<Article[]> = new Promise<Article[]>((resolve:Function, reject:Function) => {

                var translator:Function = function (value:string):Article[] {
                    var items:Array<Article> = new Array<Article>();
                    var j:any = JSON.parse(value).response;
                    var results:Array<Object> = j.results;

                    var i:number = 0;
                    var item:any;
                    while (i < results.length) {
                        item = results[i];
                        items.push(new Article(item.id, new Date(item.webPublicationDate), item.webTitle))
                        i++;
                    } // End of loop.

                    return items;
                }

                var request:XMLHttpRequest = new XMLHttpRequest();
                request.open('GET', NewsController.SEARCH_API);
                request.onload = () => resolve(translator(request.response));
                request.onerror = () => reject(request.response);
                request.send();
            });

            p
                .then((value)=> $scope.$apply(()=> this._articles.push.apply(this._articles, value)))
                .then(() => console.log('Articles loading complete: ' + this._articles));
        }

        //--------------------------------------------------------------------------
        //
        //  Properties
        //
        //--------------------------------------------------------------------------

        /**
         * @private
         */
        private _articles:Article[];

        public get articles():Article[] {
            return this._articles;
        }
    }

    export interface NewsScope extends ng.IScope {
        articles: Article[];
    }
}
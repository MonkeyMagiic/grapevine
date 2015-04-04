var com;
(function (com) {
    var uk;
    (function (uk) {
        var grapevine;
        (function (grapevine) {
            var Article = (function () {
                function Article(id, date, title) {
                    this._id = id;
                    this._date = date;
                    this._title = title;
                }
                Object.defineProperty(Article.prototype, "id", {
                    get: function () {
                        return this._id;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Article.prototype, "date", {
                    get: function () {
                        return this._date;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Article.prototype, "title", {
                    get: function () {
                        return this._title;
                    },
                    enumerable: true,
                    configurable: true
                });
                Article.prototype.tags = function () {
                    return this._tags;
                };
                return Article;
            })();
            grapevine.Article = Article;
            var Tag = (function () {
                function Tag() {
                }
                Object.defineProperty(Tag.prototype, "id", {
                    get: function () {
                        return this._id;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Tag.prototype, "title", {
                    get: function () {
                        return this._title;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Tag;
            })();
            grapevine.Tag = Tag;
        })(grapevine = uk.grapevine || (uk.grapevine = {}));
    })(uk = com.uk || (com.uk = {}));
})(com || (com = {}));
//# sourceMappingURL=article.js.map
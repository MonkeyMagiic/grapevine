///<reference path="currency.ts" />
var CurrencyPair = (function () {
    function CurrencyPair(base, term) {
        this._base = base;
        this._term = term;
    }
    Object.defineProperty(CurrencyPair.prototype, "base", {
        /**
         * Currency for the base side of the pair.
         * @returns {ICurrency}
         */
        get: function () {
            return this._base;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CurrencyPair.prototype, "term", {
        /**
         * Currency for the term side of the pair.
         * @returns {ICurrency}
         */
        get: function () {
            return this._term;
        },
        enumerable: true,
        configurable: true
    });
    return CurrencyPair;
})();
//# sourceMappingURL=currency.pair.js.map
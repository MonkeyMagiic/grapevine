var Currency = (function () {
    function Currency(code, name) {
        this._code = code;
        this._name = name;
    }
    Object.defineProperty(Currency.prototype, "code", {
        get: function () {
            return this._code;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Currency.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    return Currency;
})();
//# sourceMappingURL=currency.js.map
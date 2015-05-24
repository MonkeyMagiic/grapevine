///<reference path="currency.ts" />
class CurrencyPair
{
    constructor( base : ICurrency, term : ICurrency ) {
        this._base = base;
        this._term = term;
    }

    /**
     * Holder for the <code>base</code> property.
     * @private
     */
    private _base : ICurrency;

    /**
     * Currency for the base side of the pair.
     * @returns {ICurrency}
     */
    public get base() : ICurrency
    {
        return this._base;
    }

    /**
     * Holder for the <code>term</code> property.
     * @private
     */
    private _term : ICurrency;

    /**
     * Currency for the term side of the pair.
     * @returns {ICurrency}
     */
    public get term() : ICurrency
    {
        return this._term;
    }
}

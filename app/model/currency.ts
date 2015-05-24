interface ICurrency {

    name : string;

    code : string;
}

class Currency implements ICurrency {

    constructor(code:string, name:string) {
        this._code = code;
        this._name = name;
    }

    private _code:string;

    public get code():string {
        return this._code;
    }

    private _name:string;

    public get name():string {
        return this._name;
    }
}
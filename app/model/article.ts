module com.uk.grapevine {
    export class Article {

        constructor(id:string,
                    date:Date,
                    title:string) {
            this._id = id;
            this._date = date;
            this._title = title;
        }

        private _id:string;

        public get id():string {
            return this._id;
        }

        private _date:Date;

        public get date():Date {
            return this._date;
        }

        private _title:string;

        public get title():string {
            return this._title;
        }

        private _tags:Array<Tag>;

        public tags():Array<Tag> {
            return this._tags;
        }
    }

    export class Tag {

        constructor() {

        }

        private _id:string;

        public get id():string {
            return this._id;
        }

        private _title:string;

        public get title():string {
            return this._title;
        }
    }
}
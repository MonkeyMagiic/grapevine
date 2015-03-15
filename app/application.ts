///<reference path="service.ts" />
module GrapeVine {
    'use strict';
    export class Application {

        //--------------------------------------------------------------------------
        //
        //  Constructor
        //
        //--------------------------------------------------------------------------

        /**
         *  Constructor.
         */
        constructor() {
            document.addEventListener('DOMContentLoaded', (event:Event) => this.dom_contentLoaded(event));
        }

        //--------------------------------------------------------------------------
        //
        //  Variables
        //
        //--------------------------------------------------------------------------

        /**
         * @private
         */
        private service : ServiceProxy = new ServiceProxy();

        //--------------------------------------------------------------------------
        //
        //  Methods
        //
        //--------------------------------------------------------------------------

        /**
         * @private
         */
        private initialize() : void
        {
        }

        //--------------------------------------------------------------------------
        //
        //  Event handlers
        //
        //--------------------------------------------------------------------------

        /**
         * @private
         * @param event
         */
        private dom_contentLoaded(event:Event):void {
            // Cleanup.
            document.removeEventListener('DOMContentLoaded', <EventListener>arguments.callee);
            this.initialize();
        }

    }
}
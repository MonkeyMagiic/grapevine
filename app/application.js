///<reference path="service.ts" />
var GrapeVine;
(function (GrapeVine) {
    var Application = (function () {
        //--------------------------------------------------------------------------
        //
        //  Constructor
        //
        //--------------------------------------------------------------------------
        /**
         *  Constructor.
         */
        function Application() {
            var _this = this;
            //--------------------------------------------------------------------------
            //
            //  Variables
            //
            //--------------------------------------------------------------------------
            /**
             * @private
             */
            this.service = new ServiceProxy();
            document.addEventListener('DOMContentLoaded', function (event) { return _this.dom_contentLoaded(event); });
        }
        //--------------------------------------------------------------------------
        //
        //  Methods
        //
        //--------------------------------------------------------------------------
        /**
         * @private
         */
        Application.prototype.initialize = function () {
        };
        //--------------------------------------------------------------------------
        //
        //  Event handlers
        //
        //--------------------------------------------------------------------------
        /**
         * @private
         * @param event
         */
        Application.prototype.dom_contentLoaded = function (event) {
            // Cleanup.
            document.removeEventListener('DOMContentLoaded', arguments.callee);
            this.initialize();
        };
        return Application;
    })();
    GrapeVine.Application = Application;
})(GrapeVine || (GrapeVine = {}));
//# sourceMappingURL=application.js.map
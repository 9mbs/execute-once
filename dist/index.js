"use strict";
/**
 * @param arg any
 * @returns any
 */
module.exports = {
    executeOnce: function () {
        let executed = false;
        return function (arg) {
            if (!executed) {
                executed = true;
                return arg();
            }
            return;
        };
    }
};
//# sourceMappingURL=index.js.map
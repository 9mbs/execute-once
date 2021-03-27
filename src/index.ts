/**
 * @param arg any
 * @returns any
 */

module.exports = {
  executeOnce: function() {
    let executed = false;
    return function(arg: any) {
        if (!executed) {
          executed = true;
          return arg();
        }
        return;
    };
  }
};

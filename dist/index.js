(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.index = factory());
}(this, (function () { 'use strict';

    var Hello = /** @class */ (function () {
        function Hello(world) {
            this.world = '';
            this.world = world;
        }
        Hello.prototype.toString = function () {
            console.log("Hello " + this.world + "!");
        };
        return Hello;
    }());

    return Hello;

})));

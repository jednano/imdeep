"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function imset(object, path, value) {
    return shallowSet(object, path[0], value);
}
exports.imset = imset;
function imget(object, path) {
    return object[path];
}
exports.imget = imget;
function shallowSet(object, path, value) {
    var _a;
    return Object.assign({}, object, (_a = {}, _a[path] = value, _a));
}

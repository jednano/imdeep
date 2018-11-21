"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ava_1 = require("ava");
var _1 = require("./");
ava_1.default('imset sets a shallow value', function (t) {
    var original = {
        a: 'b'
    };
    var result = _1.imset(original, ['a'], 'c');
    t.is(result === original, false);
    t.is(result.a, 'c');
});
ava_1.default('imget gets a shallow value', function (t) {
    var original = {
        a: 'b'
    };
    var result = _1.imget(original, 'a');
    t.is(result, 'b');
});

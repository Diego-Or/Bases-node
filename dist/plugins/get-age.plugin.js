"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAge = void 0;
const getAgePlugin = require("get-age");
const getAge = (cumple) => {
    return getAgePlugin(cumple);
};
exports.getAge = getAge;

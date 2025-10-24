"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAge = void 0;
const getAgePlugin = require("get-age");
const getAge = (cumple) => {
    return getAgePlugin(normalizeDate(cumple));
};
exports.getAge = getAge;
const normalizeDate = (newDate) => {
    const date = new Date(newDate);
    if (isNaN(date.getTime())) {
        throw new Error(`Formato de fecha no válido: ${newDate}`);
    }
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

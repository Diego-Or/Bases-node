"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obj = void 0;
const { getAge, randomUUID } = require('../plugins');
exports.obj = { name: 'Diego', cumple: '1996-11-14', age: 0 };
const buildPerson = ({ name, cumple }) => {
    return {
        id: randomUUID,
        name: name,
        cumple: cumple,
        age: getAge(cumple)
    };
};
const diego = buildPerson(exports.obj);
console.log(diego);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMakePerson = void 0;
const buildMakePerson = ({ getAge }) => {
    return ({ name, cumple }) => {
        return {
            name: name,
            cumple: cumple,
            age: getAge(cumple)
        };
    };
};
exports.buildMakePerson = buildMakePerson;

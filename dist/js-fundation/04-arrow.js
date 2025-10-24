"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPersonaje = void 0;
const personajes = [
    {
        id: 1,
        name: "Ironman"
    },
    {
        id: 2,
        name: "Thor"
    },
];
const getPersonaje = (id, callback) => {
    const user = personajes.find(user => user.id === id);
    user ? callback(undefined, user) : callback(`Usuario no encontrado`);
};
exports.getPersonaje = getPersonaje;

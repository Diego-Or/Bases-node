"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPersonaje = getPersonaje;
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
function getPersonaje(id, callback) {
    const user = personajes.find((user) => {
        return user.id === id;
    });
    if (!user) {
        return callback(`Usuario no encontrado`);
    }
    return callback(undefined, user);
}

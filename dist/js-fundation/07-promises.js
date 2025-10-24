"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonNameById = void 0;
const plugins_1 = require("../plugins");
const getPokemonNameById = async (id) => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const pokemon = await plugins_1.httpAxios.get(url);
        return pokemon.name;
    }
    catch (error) {
        throw `Pokémon no encontrado con el id ${id}`;
    }
};
exports.getPokemonNameById = getPokemonNameById;

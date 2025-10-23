"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _01_template_1 = require("./js-fundation/01-template");
console.log(_01_template_1.emailTemplate);
const plugins_1 = require("./plugins/");
const random = plugins_1.uuid;
console.log('Numero Random: ', plugins_1.uuid);
const plugins_2 = require("./plugins/");
const FechaNacimiento = '1996-11-14';
const edad = (0, plugins_2.getAge)(FechaNacimiento);
console.log('Tu edad es: ', edad);
const _04_arrow_1 = require("./js-fundation/04-arrow");
(0, _04_arrow_1.getPersonaje)(1, (err, user) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('El Usuario es: ', user);
});
const _07_promises_1 = require("./js-fundation/07-promises");
(0, _07_promises_1.getPokemonNameById)(4).then(pokemon => console.log(pokemon));

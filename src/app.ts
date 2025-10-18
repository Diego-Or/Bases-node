// Esta es la forma tradicional de node de traer algo de otro archivo (en js se usa import y export)

// ?Escribir una plantilla 
import { emailTemplate } from "./js-fundation/01-template";
console.log(emailTemplate);


// ?Numero Random 
import { uuid } from "./plugins/";
const random = uuid;
console.log('Numero Random: ',uuid);


// ?Edad
import { getAge } from "./plugins/";
const FechaNacimiento: string = '1996-11-14';
const edad = getAge(FechaNacimiento)
console.log('Tu edad es: ',edad);


// ?Obtener un usuario
import { getPersonaje } from "./js-fundation/04-arrow";
getPersonaje(1, (err, user) => {
    if (err){
        console.log(err);
        return
    }
    console.log('El Usuario es: ', user);
})



// !PETICIONES
import { getPokemonNameById } from './js-fundation/07-promises';

// getPokemonById(4)
//     .then( (pokemon) => console.log({pokemon}))
//     .catch( (err) => console.log(err))
//     .finally( () => console.log('Finalizó la promesa con exito'))


// * Usando Axios
// getPokemonNameById(4)
getPokemonNameById(4).then(pokemon => console.log(pokemon))


// !lOGGER
// import { buildLogger } from "./plugins/logger.plugin";
// const logger = buildLogger('app.js');

// logger.log('Hola mundo');
// logger.error('Algo salió mal');
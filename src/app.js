// Esta es la forma tradicional de node de traer algo de otro archivo (en js se usa import y export)
// const {emailTemplate} = require('./js-fundation/01-template')
// console.log(emailTemplate);


// !PETICIONES
// const {getPokemonById} = require('./js-fundation/07-promises')

// getPokemonById(4)
//     .then( (pokemon) => console.log({pokemon}))
//     .catch( (err) => console.log(err))
//     .finally( () => console.log('Finalizó la promesa con exito'))


//* Usando Axios
// getPokemonById(4)

// !lOGGER
const {buildLogger} = require('./plugins');

const logger = buildLogger('app.js');

logger.log('Hola mundo');
logger.error('Algo salió mal');
//* Usando Axios como patron adaptador
/*const { httpAx } = require('../plugins')

const getPokemonById = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    const pokemon = await httpAx.get(url);

    return pokemon.name;
}*/



//* Usando Axios
const axios = require('axios');


const getPokemonById = async (id) => {
    // Make a request for a user with a given ID
    try {
        axios({
        method: 'get',
        url: `https://pokeapi.co/api/v2/pokemon/${id}`,
    })
        .then( (response) => {
            // handle success
            const pokemon = response.data
            console.log(pokemon.name); 
        })
    } catch (error) {
        console.error(error);
    }
}





//* Usando un patron adaptador en la carpeta plugins
/*const { http } = require('../plugins')

const getPokemonById = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    const pokemon = await http.get(url);

    return pokemon.name
}*/




//* Forma normal
/* const getPokemonById = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    const response = await fetch(url)
    const pokemon = await response.json();
    
    return pokemon.name
}
*/

module.exports = {
    getPokemonById
}




//* Usando Axios como patron adaptador
import { httpAxios } from '../plugins';

export const getPokemonNameById = async (id: number):Promise<string> => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const pokemon = await httpAxios.get(url);
   
    return pokemon.name;
}

// import { promises } from "dns";



//* Usando Axios
/*import axios from 'axios';
export const getPokemonNameById = async (id:number):Promise<string> => {
    // Make a request for a user with a given ID
    try {
        axios({
            method: 'get',
            url: `https://pokeapi.co/api/v2/pokemon/${id}`,
        })
        .then((response) => {
            // handle success
            const pokemon = response.data
            console.log(pokemon.name); 
        })
    } catch (error) {
        console.error(error);
    }
}*/





//* Usando un patron adaptador en la carpeta plugins
/*import { httpClient as http} from '../plugins';

export const getPokemonById = async (id:number):Promise<string> => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    const pokemon = await http.get(url);

    return pokemon.name
}*/




//* Forma normal
/*export const getPokemonById = async (id: number):Promise<string>  => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    const response = await fetch(url)
    const pokemon = await response.json();
    
    return pokemon.name
}*/





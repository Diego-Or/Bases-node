import { getPokemonNameById } from '../../src/js-fundation/07-promises';
describe('Test in the js-fundation/07-promises.ts',()=>{
    test('getPokemonNameByIdById should return a Pokemon',async()=>{
        const pokemonId = 1;
        const pokemonName= await getPokemonNameById(pokemonId);
        expect(pokemonName).toBe(`bulbasaur`);
    })

    test('getPokemonNameByIdById should return an error',async()=>{
        
        const pokemonId = 1000000;
        try {
            // await getPokemonNameById(pokemonId);
            // expect(true).toBeFalsy;
            // Nunca llegará a hacer esto porque estamos esperando el error
        } catch (error) {
            expect(error).toBe(`Pokémon no encontrado con el id ${pokemonId}`);
        }
        
        
        
    })
})
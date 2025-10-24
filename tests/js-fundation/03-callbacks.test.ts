import { getPersonaje } from '../../src/js-fundation/03-callbacks';

describe('Test in the js-fundation/03-callbacks.ts', ()=>{
    test('getPersonaje should return an error if user does not exist',(done)=>{
        const id=10;
        getPersonaje(id, (err, user)=>{
            expect(err).toBe('Usuario no encontrado');
            expect(user).toBeUndefined();

            done();
        })
    })
    test('getPersonaje should return the user if user exist',()=>{
        const id=1;
        
        getPersonaje(id, (err, user)=>{
            expect(err).toBeUndefined();

            const {id, name} = user!;
            expect(user).toStrictEqual({id: 1, name: "Ironman"});
            expect(id).toBe(1);
            expect(name).toBe("Ironman");
        })
    })
});
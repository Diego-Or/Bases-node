import { characters } from '../../src/js-fundation/02-desestructuring';

describe('Test in the js-fundation/02-desestructuring.ts', ()=>{
    test('characters should have minimum 3 elements',()=>{
        expect(characters.length).toBeGreaterThanOrEqual(3);
    })

    test('characters should have Flash',()=>{
        expect(characters).toContain('Flash');
    })

    test('First Character should be Flash, and second Superman',()=>{
        const [flash, superman] = characters;

        expect(flash).toBe('Flash');
        expect(superman).toBe('Superman');
  
    })
})
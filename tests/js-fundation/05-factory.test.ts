import { buildMakePerson } from '../../src/js-fundation/05-factory';

describe('Test in the js-fundation/05-factory.ts',()=>{

    const getAge = () => 42
    const uuid = () => '1234'

    test('buildMakePerson should return a function',()=>{
        const makePerson = buildMakePerson({getAge, uuid});
        expect(typeof makePerson).toBe('function');
    })

    test('buildMakePerson should return a person',()=>{
        const makePerson = buildMakePerson({getAge, uuid});
        const diego = makePerson({name: 'Diego', cumple: '1996-11-14'})
        expect(diego).toEqual({name: 'Diego', cumple: '1996-11-14', age: 42});
    })
})
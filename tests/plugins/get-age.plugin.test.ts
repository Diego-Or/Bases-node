import { getAge } from "../../src/plugins"

describe('Test in the Plugins/get-age.plugin.ts',()=>{
    test ('getAge should return the age',()=>{
        const age:number = getAge('1996-11-14');
        expect(age).toBe(28);
    })

    test ('getAge should return an error if date is invalid',()=>{
        const age:string = '14-1996-10';
        
        expect(() => getAge(age)).toThrow(`Formato de fecha no válido: ${age}`);
    })

    test ('getAge should return the age with other format',()=>{
        const age:number = getAge('1996/11/14');
        expect(age).toBe(28);
    })

    test ('getAge should return the age with other format',()=>{
        const age:number = getAge('11/14/1996');
        expect(age).toBe(28);
    })
})
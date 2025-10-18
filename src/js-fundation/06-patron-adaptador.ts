const {getAge, randomUUID} = require('../plugins')

interface Persona{
    name: string,
    cumple: string,
    age: number
}

export const obj: Persona = {name: 'Diego', cumple: '1996-11-14', age:0 }
const buildPerson = ({name, cumple}: Persona) =>{
    return {
        id: randomUUID,
        name: name,
        cumple: cumple,
        age: getAge(cumple)
    }
}

const diego = buildPerson(obj)
console.log(diego);
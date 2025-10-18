interface BuildMakerPersonOptions {
    uuid: () => string,
    getAge: (cumple: number | string | Date) => number
}

interface PersonOptions {
    name: string,
    cumple: number | string | Date
}

export const buildMakePerson = ({getAge}: BuildMakerPersonOptions) => {
    return  ({name, cumple}: PersonOptions) =>{
        return {
            name: name,
            cumple: cumple,
            age: getAge(cumple)
        }
    }
}


// Esto es lo que iría en App.js
// const {buildMakePerson, getAge, randomUUID} = require('./js-fundation/05-factory')


// const makePerson = buildMakePerson({randomUUID, getAge})

// const obj = {
//     name: 'john',
//     cumple: '1996-11-14'
// }

// const john = makePerson(obj)
// console.log(john);

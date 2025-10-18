const {getAge, randomUUID} = require('../plugins')

const buildMakePerson = ({randomUUID,getAge}) => {
    return  ({name, cumple}) =>{
        return {
            id: randomUUID,
            name: name,
            cumple: cumple,
            age: getAge(cumple)
        }
    }
}

module.exports = { buildMakePerson, getAge, randomUUID }



// Esto es lo que iría en App.js
// const {buildMakePerson, getAge, randomUUID} = require('./js-fundation/05-factory')


// const makePerson = buildMakePerson({randomUUID, getAge})

// const obj = {
//     name: 'john',
//     cumple: '1996-11-14'
// }

// const john = makePerson(obj)
// console.log(john);

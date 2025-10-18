const {getAge, randomUUID} = require('../plugins')


const obj = {name: 'Diego', cumple: '1996-11-14', age:0 }
const buildPerson = ({name, cumple}) =>{
    return {
        id: randomUUID,
        name: name,
        cumple: cumple,
        age: getAge(cumple)
    }
}

const diego = buildPerson(obj)
console.log(diego);
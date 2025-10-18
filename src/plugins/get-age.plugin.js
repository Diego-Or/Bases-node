const getAgePlugin = require('get-age')

const getAge = (cumple) => {
    if (!cumple) return new Error('La fecha de cumpleaños es requerida');
    return getAgePlugin(cumple)
}

module.exports = { getAge, }
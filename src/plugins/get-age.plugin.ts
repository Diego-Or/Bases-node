import getAgePlugin = require('get-age');

export const getAge = (cumple: number | string | Date) => {
    
    return getAgePlugin(cumple)
}

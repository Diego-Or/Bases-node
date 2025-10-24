import getAgePlugin = require('get-age');

export const getAge = (cumple:string):number => {
    return getAgePlugin(normalizeDate(cumple))
}

const normalizeDate = (newDate: string): string =>{
    const date = new Date(newDate);
    
    if (isNaN(date.getTime())) {
        throw new Error(`Formato de fecha no válido: ${newDate}`);
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}


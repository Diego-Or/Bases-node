interface Personaje {
    id: number,
    name: string
}


const personajes: Personaje[] = [
    {
        id: 1,
        name: "Ironman"
    },
    {
        id: 2,
        name: "Thor"
    },
];

export const getPersonaje = (id: number, callback: (err?: string, user?:Personaje) => void) => {
    const user = personajes.find( user => user.id === id)

    user ? callback(undefined, user) : callback (`Usuario no encontrado`)
}

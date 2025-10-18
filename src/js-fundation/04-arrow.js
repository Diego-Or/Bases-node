
const personajes = [
    {
        id: 1,
        name: "Ironman"
    },
    {
        id: 2,
        name: "Thor"
    },
];

const getPersonaje = (id, callback) => {
    const user = personajes.find( user => user.id === id)

    user ? callback(null, user) : callback (`Usuario no encontrado`)
}

module.exports = {
    getPersonaje
}
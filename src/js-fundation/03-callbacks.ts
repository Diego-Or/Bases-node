interface User {
    id: number,
    name: string
}

const personajes: User[] = [
    {
        id: 1,
        name: "Ironman"
    },
    {
        id: 2,
        name: "Thor"
    },
];

export function getPersonaje(id: number, callback: (err?: string, user?:User) => void){
    const user = personajes.find( (user) => {
        return user.id === id
    });

    if (!user){
        return callback (`Usuario no encontrado`)
    }

    return callback(undefined, user)
}

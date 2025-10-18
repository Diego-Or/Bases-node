export const httpClientPlugin = {
    get: async (url: string) => {
        const response = await fetch(url)
        return await response.json();
    },

    post: async(url:string, body:string) => {},
    pull: async(url:string, body:string) => {},
    delete: async(url:string) => {},
};


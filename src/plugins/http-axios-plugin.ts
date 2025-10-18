import axios from 'axios';

export const httpAxiosPlugin = {
    get: async (url: string) => {
        const { data } = await axios.get(url)
        // return data
        return data
    },

    post: async(url: string, body: any) => {},
    pull: async(url: string, body: any) => {},
    delete: async(url: string) => {},
};


import axios from 'axios';

export const httpAxiosPlugin = {
    get: async (url: string) => {
        const { data } = await axios.get(url)
        // return data
        return data
    },

    post: async(url: string, body: any) => {
        throw new Error('Function not implemented.');
    },
    pull: async(url: string, body: any) => {
        throw new Error('Function not implemented.');
    },
    delete: async(url: string) => {
        throw new Error('Function not implemented.');
    },
};


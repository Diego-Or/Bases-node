const axios = require('axios');

const httpAxiosPlugin = {
    get: async (url) => {
        const { data } = await axios.get(url)
        return data
    },

    post: async(url, body) => {},
    pull: async(url, body) => {},
    delete: async(url) => {},
};

module.exports = {
    httpAx: httpAxiosPlugin,
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpAxiosPlugin = void 0;
const axios_1 = require("axios");
exports.httpAxiosPlugin = {
    get: async (url) => {
        const { data } = await axios_1.default.get(url);
        return data;
    },
    post: async (url, body) => { },
    pull: async (url, body) => { },
    delete: async (url) => { },
};

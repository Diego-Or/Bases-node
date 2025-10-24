"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpClientPlugin = void 0;
exports.httpClientPlugin = {
    get: async (url) => {
        const response = await fetch(url);
        return await response.json();
    },
    post: async (url, body) => { },
    pull: async (url, body) => { },
    delete: async (url) => { },
};

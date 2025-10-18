const { getAge } = require('../plugins/get-age.plugin')
const { randomUUID } = require('../plugins/get-uuid.plugin')
const { httpAx } = require('./http-axios-plugin')
const { http } = require('./http-client-plugin')
const buildLogger = require('./logger.plugin')

module.exports = {
    getAge,
    randomUUID,
    httpAx,
    http,
    buildLogger,
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildLogger = void 0;
const winston = require("winston");
const winston_1 = require("winston");
const { combine, timestamp, json } = winston_1.format;
const logger = winston.createLogger({
    level: 'info',
    format: combine(timestamp(), json()),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}
const buildLogger = (service) => {
    return {
        log: (message) => {
            logger.log('info', { message, service });
        },
        error: (message) => {
            logger.error('Error', { message, service });
        }
    };
};
exports.buildLogger = buildLogger;

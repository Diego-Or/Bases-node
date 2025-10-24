import { buildLogger, logger as winstonLogger } from '../../src/plugins/logger.plugin';
describe('Test in the plugin/logger.plugin.ts',()=>{
    test('buildLogger should return a function logger',()=>{
        const logger = buildLogger('test')
        expect(typeof logger).toBe('object');
        expect(typeof logger.log).toBe('function');
        expect(typeof logger.error).toBe('function');
    })
})
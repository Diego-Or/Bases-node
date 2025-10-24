import { randomUUID as uuid } from "../../src/plugins/get-uuid.plugin"

describe('Test in the Plugins/get-uuid.plugin.ts',()=>{
    test ('randomUUID should return a uuid',()=>{
        const randomId:string = uuid;
        expect(typeof randomId).toBe('string');
        expect(randomId.length).toBe(36);
    })
})
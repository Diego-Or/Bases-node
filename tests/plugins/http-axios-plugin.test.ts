import { httpAxiosPlugin } from '../../src/plugins/http-axios-plugin';

describe('Test in the plugins/http-axios-plugin.ts',()=>{
    test('httpAxiosPlugin.get should return a object',async()=>{
        const data = await httpAxiosPlugin.get('https://jsonplaceholder.typicode.com/todos/1');
        expect(typeof data).toBe('object');
    })

    test('httpAxiosPlugin.get should return a exact value',async()=>{
        const data = await httpAxiosPlugin.get('https://jsonplaceholder.typicode.com/todos/1');
        expect(data).toEqual({
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": expect.any(Boolean)
        });
    })

    test('httpAxiosPlugin.post should return a function',async()=>{
        expect(typeof httpAxiosPlugin.post).toBe('function');
    })

    
})
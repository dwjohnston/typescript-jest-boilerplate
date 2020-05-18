import {foo} from "./index";

describe('foo()', ( ()=> {
    it('returns 1', () =>  {
        const result = foo(); 
        expect(result).toBe(1);
    });     
}))
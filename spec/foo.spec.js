import { testFunc } from '../src/foo';

describe('test', ()=> {
    it('bar', ()=> {
        expect(testFunc()).toBe(true);
    });
});
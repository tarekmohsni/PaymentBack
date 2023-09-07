const {Sum} = require('../sum')
describe('sum.js', ()=>{
    test('adds 1+2 to equal 3',()=>{
      //ARRANGE
        const a = 1 ;
        const b =2;
        //ACT
        const result = Sum(a,b);
        // ASSERT
        expect(result).toBe(3)
    })
    test('adds 2 + 2 to equal 4', ()  =>{
        //ARRANGE
        const a = 2 ;
        const b =2;
        //ACT
        const result = Sum(a,b);
        // ASSERT
        expect(result).toBe(4)
    })
})

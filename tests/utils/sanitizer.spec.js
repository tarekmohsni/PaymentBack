const {renameFile} = require ('../../utils/sanitizer');

describe('renameFile', ()=>{
    test('should return a filename and hash',()=>{
        // ARRANGE
        const url = 'https://nico-develop.com/nom-logo.png';
        //ACT
        const {filename}= renameFile(url)

        expect(filename).not.toEqual('nom-logo.png');

    })

    test('should return the same extension', ()=>{
        const url = 'https://nico-develop.com/nom-logo.png';
        //ACT
        const {filename}= renameFile(url)

        expect(filename).toEqual(expect.stringContaining('.png'));
    })
})

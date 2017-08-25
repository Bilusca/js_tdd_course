var expect = require('chai').expect;

describe('Main', function(){
    var arr;
    //roda uma vez, antes do bloco
    before(function(){
        
    });

    //roda uma vez, depois do bloco
    after(function(){
        
    });

    //roda uma vez, antes de CADA bloco
    beforeEach(function(){
        arr = [1,2,3];
    });

    //roda uma vez, depois de CADA bloco
    afterEach(function(){
        
    });

    it('should have a size of 4 when push another value to the array', function(){  
        arr.push(4);
        expect(arr).to.have.lengthOf(4);
    });

    it('should have a size of 2 when pop a value from the array', function(){
        arr.pop();
        expect(arr).to.not.include(3);
    });

    it('should remove the value 3 when use pop in the array', function(){
        console.log(arr.pop() === 3);
    });
});
import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/main';

describe('Calc Lib', () => {
    //smoke tests
    describe('smoke tests', () => {

        it('should exists the method `sum`', () => {
            expect(sum).to.exist;
            expect(sum).to.be.a('function');
        });

        it('should exists the method `sub`', () => {
            expect(sub).to.exist;
            expect(sub).to.be.a('function');
        });

        it('should exists the method `multi`', () => {
            expect(mult).to.exist;
            expect(mult).to.be.a('function');
        });

        it('should exists the method `div`', () => {
            expect(div).to.exist;
            expect(div).to.be.a('function');
        });
    });

    describe('Sum', () => {
        it('should return 4 when `sum(2,2)`', () => {
            expect(sum(2,2)).to.be.equal(4);
        });
    });

    describe('Sub', () => {
        it('should return 4 when `sub(6,2)`', () => {
            expect(sub(6,2)).to.be.equal(4);
        });

        it('should return -4 when `sub(6,10)`', () => {
            expect(sub(6,10)).to.be.equal(-4);
        });
    });

    describe('Mult', () => {
        it('should return 4 when `multi(2,2)`', () => {
            expect(mult(2,2)).to.be.equal(4);
        });
    });

    describe('Div', () => {
        it('should return 4 when `div(8,2)`', () => {
            expect(div(8,2)).to.be.equal(4);
        });

        it('should retunr `Não é possível divisão por zero`', () => {
            expect(div(2,0)).to.be.equal('Não é possível divisão por zero');
        });
    });
});
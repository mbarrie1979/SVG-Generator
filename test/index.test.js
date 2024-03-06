// importing shapes for testing
const { Circle, Triangle, Square } = require('../lib/shapes');

// testing suite
describe('Shapes', () => {

    describe('Circle', () => {
        it('Should receive a color as input and produce a string with the color value inserted', () => {
            const shape = new Circle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<circle cx="50" cy="50" r="40" stroke="black" stroke-width="1" fill="blue" />');
        })
    })
    describe('Square', () => {
        it('Should receive a color as input and produce a string with the color value inserted', () => {
            const shape = new Square();
            shape.setColor("blue");
            expect(shape.render()).toEqual(`<rect x="10" y="10" width="80" height="80" stroke="black" stroke-width="1" fill="blue" />`);
        })
    })
    describe('Triangle', () => {
        it('Should receive a color as input and produce a string with the color value inserted', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual(`<polygon points="50,10 10,90 90,90" stroke="black" stroke-width=".5" fill="blue" />`);
        })
    })
});


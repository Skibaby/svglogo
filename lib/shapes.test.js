const {Circle, Square, Triangle} = require('./shapes');

describe('Shapes', () => {
  describe('Circle', () => {
    it('returns a circle element', () => {
      // const circle = shapes.buildCircle();
      // const result = '<circle width="200" fill="red" />';
      // expect(circle).toEqual(result);
    });
  })
  describe('Triangle', () => {
    it('returns a triangle element', () => {


      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual('<polygon points="150,0 300,200 0,200 150,0" fill="blue" />');

      // const triangle = shapes.buildTriangle();
      // const result = '<triangle points= "200,10,350,300,50,300" fill="blue>"'
      // expect(triangle).toEqual(result);
    })
    
  });
  describe('Square', () => {
    it('returns a square element', () => {
      // const square = shapes.buildSquare();
      // const result = '<rect x="40" y="30" width="200" height="200>'
    })
    
  })
});
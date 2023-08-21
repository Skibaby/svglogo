const shapes = require('./shapes');

describe('Shapes', () => {
  describe('Circle', () => {
    it('returns a circle element', () => {
      const circle = shapes.buildCircle();
      const result = '<circle width="200" fill="red" />';
      expect(circle).toEqual(result);
    });
  })
  describe('Triangle', () => {
    
  })
  describe('Square', () => {
    
  })
});
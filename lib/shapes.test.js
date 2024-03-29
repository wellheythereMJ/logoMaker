const { Shapes, Square, Triangle, Circle } = require('./shapes.js');

// make tests for each one of the classes

describe('Shapes', () => {
  test('Use setMethod to assign shape color', () => {
    const shape = new Shapes();
    shape.setShapeColor('red');
    expect(shape.shapeColor).toBe('red');
  });
  test('setText', () => {
    const text = new Shapes();
    text.setText('hello');
    expect(text.text).toBe('hello');
  });
  test('setTextColor', () => {
    const textColor = new Shapes();
    textColor.setTextColor('white');
    expect(textColor.textColor).toBe('white');
  })

});
describe('Square', () => {
  test('Use setMethod to assign shape color', () => {
    const shape = new Square();
    shape.setShapeColor('red');
    expect(shape.shapeColor).toBe('red');
  });
  test('setText', () => {
    const text = new Square();
    text.setText('hello');
    expect(text.text).toBe('hello');
  });
  test('setTextColor', () => {
    const textColor = new Square();
    textColor.setTextColor('white');
    expect(textColor.textColor).toBe('white');
  }) 
  test('render', () => {
    const square = new Square();
    square.setShapeColor('red');
    square.setText('hello');
    square.setTextColor('white');
    expect(square.rendor()).toBe(`<svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg"> <rect width="100%" height="100%" fill="red" /> <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">hello</text> </svg>`)
  })
});

describe('Triangle', () => {
  test('Use setMethod to assign shape color', () => {
    const shape = new Triangle();
    shape.setShapeColor('red');
    expect(shape.shapeColor).toBe('red');
  });
  test('setText', () => {
    const text = new Triangle();
    text.setText('hello');
    expect(text.text).toBe('hello');
  });
  test('setTextColor', () => {
    const textColor = new Triangle();
    textColor.setTextColor('white');
    expect(textColor.textColor).toBe('white');
  })
  test('render', () => {
    const triangle = new Triangle();
    triangle.setShapeColor('red');
    triangle.setText('hello');
    triangle.setTextColor('white');
    expect(triangle.rendor()).toBe(`<svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg"> <polygon fill="red" points="100,20 200,170 0,170" /> <text x="50" y="140" font-size="50" text-anchor="middle" fill="white">hello</text> </svg>`);
  })
});

describe('Circle', () => {
  test('Use setMethod to assign shape color', () => {
    const shape = new Circle();
    shape.setShapeColor('red');
    expect(shape.shapeColor).toBe('red');
  });
  test('setText', () => {
    const text = new Circle();
    text.setText('hello');
    expect(text.text).toBe('hello');
  });
  test('setTextColor', () => {
    const textColor = new Circle();
    textColor.setTextColor('white');
    expect(textColor.textColor).toBe('white');
  })
  test('render', () => {
    const circle = new Circle();
    circle.setShapeColor('red');
    circle.setText('hello');
    circle.setTextColor('white');
    expect(circle.rendor()).toBe(`<svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="80" fill="red" /> <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">hello</text> </svg>`);
  })
});
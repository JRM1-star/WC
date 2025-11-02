// Base class Shape
class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    const perimeter = this.sides * this.sideLength;
    console.log(`${this.name} perimeter: ${perimeter}`);
  }
}

// Create instances of Shape
const square = new Shape("square", 4, 5);
square.calcPerimeter(); // 20

const triangle = new Shape("triangle", 3, 3);
triangle.calcPerimeter(); // 9

// Derived class Square inherits from Shape
class Square extends Shape {
  constructor(sideLength) {
    super("square", 4, sideLength); // name is always 'square', sides always 4
  }

  calcArea() {
    const area = this.sideLength * this.sideLength;
    console.log(`Square area: ${area}`);
  }
}

// Create instance of Square
const mySquare = new Square(5);
mySquare.calcPerimeter(); // inherited method
mySquare.calcArea();      // 25

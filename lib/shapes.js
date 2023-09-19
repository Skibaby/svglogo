// <circle></circle>
// <polygon></polygon>
// <rect></rect>
// const shapes = 

// module.exports = {
//   buildCircle() {
//     return <circle width="200" fill="red"/>
//   }
// };


class Circle {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor
  }

  render() {
    return(
      `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" /> `
    )
  }

  buildCircle() {
    
  }

  getCircle() {
    return `
    <svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" /> 

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

    </svg>
    `
  }
}

class Square {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor
  }

  render() {
    return(
      `<rect width="100%" height="100%" fill="${this.shapeColor}" /> `
    )
  }

  getSquare() {
    return `
    <svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    
    <rect width="100%" height="100%" fill="${this.shapeColor}" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

    </svg>
    `
  }
}

class Triangle {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor
  }

  setColor(shapeColor) {
    this.shapeColor = shapeColor
    return this.shapeColor
  }

  render() {
    return(
      `<polygon points="150,0 300,200 0,200 150,0" fill="${this.shapeColor}" />`
    )
  }


  getTriangle() {
    return `
    <svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    
    <polygon points="150,0 300,200 0,200 150,0" fill="${this.shapeColor}" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

    </svg>
    `
  }
}

module.exports = {
  Circle,
  Triangle,
  Square
}
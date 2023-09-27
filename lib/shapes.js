class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }

  setText(text) {
    this.text = text;
  }
}


class Circle extends Shape {
  render() {
    return `
    <svg xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="50" fill="${this.color}">
      <text>${this.text}</text>
    </circle>
    </svg>`;
  }
};

class Square extends Shape {
  render() {
    return `
    <svg xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="200" height="200" fill="${this.color}" />
    </svg>`;
  }

};

class Triangle extends Shape {
  render() {
    return `
    <svg xmlns="http://www.w3.org/2000/svg">
      <polygon x="50" y="50" fill="${this.color}">
        <text>${this.text}</text>
      </polygon>
    </svg>`
  }
}

module.exports = {
  Circle,
  Square,
  Triangle,
};
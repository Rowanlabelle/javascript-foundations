class Unicorn {
  constructor(name, color = 'white') {
    this.name = name;
    this.color = color;
  };
  isWhite(name, color) {
    if (color !== 'white') {
      return false;
    };
  };
  says(words) {
    return `**;* ${words} *;**`;
  };
};

module.exports = Unicorn;

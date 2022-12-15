var Dog = require("./dog.js");

class Person {
  constructor(person, dog) {
    this.name = person;
    this.dog = dog;
  };

  fillFoodBowl() {
    this.dog.hungry = false;
  };
  
  throwBall() {
    if (this.dog.energyLevel > 3) {
      this.dog.energyLevel -= 1;
      return `${this.dog.name} loves playing fetch!`;
    };
  };

  introduceNewFriends(friend) {
    this.dog.friends.push(friend.name)
  };

  adoptAPup(dogName, age) {
    if (!this.dog) {
      this.dog = new Dog({name: dogName, age: age})
    } else {
      return `You can't adopt ${dogName}. You already have ${this.dog.name}!`
    }
  }

};

module.exports = Person;

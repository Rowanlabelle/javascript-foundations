class Dog {
  constructor(dogInfo) {
    this.name = dogInfo.name;
    this.age = dogInfo.age;
    this.energyLevel = 5;
    this.hungry = true;
    this.friends = [];
  }

  eat() {
    if (this.hungry) {
      this.hungry = false;
      return `Yum!`;
    } else {
      return `I refuse to eat.`;
    }
  }

  fetchBall() {
    if (this.energyLevel <= 3){
      return `Nah, I'm going to sleep instead.`;
    } else {
      this.energyLevel -= 1;
      return `This is fun!`;
    }
  }

  sleep() {
    if (this.energyLevel <= 9) {
      this.energyLevel += 1;
    } else {
      return `I have too much energy to rest. I'm going to chew something instead.`;
    }
  }

  makeNewFriend(newFriend) {
    this.friends.push(newFriend.name);
  }
}
module.exports = Dog;

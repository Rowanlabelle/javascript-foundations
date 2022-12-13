class Person {
    constructor(personName, personMood) {
        this.name = personName;
        this.mood = personMood || 'frightened';
    };
};
module.exports = Person;
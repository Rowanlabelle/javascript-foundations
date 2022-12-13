var Person = require('./person');
var Statue = require('./statue');
var Person = require('./person');
var Statue = require('./statue');

class Medusa {
    constructor(medusaName) {
        this.name = medusaName;
        this.statues = []
    };

    gazeAtVictim(victim) {
        if (this.statues.length < 3){
            this.statues.push(new Statue(victim.name));
        } else if (this.statues.length === 3) {
            var person = this.statues[0]
            this.statues.shift();
            this.statues.push(new Statue(victim.name));
            return new Person(person.name, 'relieved')
        };
    };
};

module.exports = Medusa;
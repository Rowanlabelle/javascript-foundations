const Direwolf = require("./direwolf");

class Stark {
    constructor(person) {
        this.name = person.name;
        this.location = person.area || 'Winterfell';
        this.safe = false;
    }

    sayHouseWords() {
        if(!this.safe) {
            return `Winter is Coming`
        } else {
            return `The North Remembers`
        }
    }

    callDirewolf(wolfName) {
        var direwolf = new Direwolf(wolfName, this.location);
        direwolf.protect(this)
        return direwolf;
    }
}


module.exports = Stark;
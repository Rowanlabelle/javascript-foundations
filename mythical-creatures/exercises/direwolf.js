class Direwolf {
    constructor(wolf, home, size) {
        this.name = wolf;
        this.home = home || 'Beyond the Wall';
        this.size = size || 'Massive';
        this.starksToProtect = [];
        this.huntsWhiteWalkers = true;
    }

    protect(person) {
        if(this.home === person.location && this.starksToProtect.length < 2) {
            person.safe = true;
            this.starksToProtect.push(person);
            this.huntsWhiteWalkers = false;
        }
    }

    leave(person) {
        if(person.safe) {
            person.safe = false;
            this.starksToProtect.pop(person);
        }
    }


}


module.exports = Direwolf;
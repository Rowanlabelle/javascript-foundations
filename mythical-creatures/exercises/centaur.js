class Centaur {
    constructor(centaurName) {
        this.name = centaurName.name;
        this.breed = centaurName.type;
        this.cranky = false; 
        this.standing = true;
        this.layingDown = false;
        this.activities = 0;
    };

    shootBow() {
        if (this.cranky || this.layingDown){
            return 'NO!';
        } else {
            this.activities += 1;
            if (this.activities >= 3) {
                this.cranky = true;
            };
            return 'Twang!!!';
        };
    };

    run() {
        if (this.cranky || this.layingDown){
            return 'NO!'
        } else {
            this.activities += 1;
            if (this.activities >= 3) {
                this.cranky = true;
            };
            return 'Clop clop clop clop!!!';
        };
    };

    sleep() {
        return this.standing ? 'NO!' : (this.cranky = false,'ZZZZ')
    };

    layDown() {
        this.standing = false;
        this.layingDown = true;
    };

    standUp() {
        this.standing = true;
        this.layingDown = false;
    };

    drinkPotion() {
        return this.layingDown ? 'Not while I\'m laying down!': this.cranky = false;
    }
};

module.exports = Centaur;
class Hobbit {
    constructor(hobbit) {
        this.name = hobbit.name;
        this.age = hobbit.age || 0;
        this.adult = hobbit.adult || false;
        this.old = hobbit.old || false;
        this.hasRing = hobbit.hasRing 
    };
    
    celebrateBirthday() {
        if (this.age < 32) {
            this.adult = false;
        } else if(this.age > 99) {
            this.old = true;
        } else {
            this.adult = true;
        }
        this.age += 1;
    };

    getRing() {
        if (this.name === 'Frodo') {
            this.hasRing = true;
            return `Here is the ring!`;
        } else {
            this.hasRing = false;
            return `You can't have it!`;
        }
    }

    
};


module.exports = Hobbit;
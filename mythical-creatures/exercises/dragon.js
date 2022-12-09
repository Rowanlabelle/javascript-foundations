class Dragon {
    constructor(name, rider) {
        this.name = name;
        this.rider = rider;
        this.hungry = true;
        this.counter = 0;
    };

    greet() {
      return `Hi, ${this.rider}!`;
    };

    eat() {
        if (this.counter < 2) {
            this.counter += 1;
        } else {
            this.hungry = false;
            delete this.counter;
        };
    };       

};



module.exports = Dragon;
class Dragon {
    constructor(name, rider) {
        this.name = name;
        this.rider = rider;
        this.hungry = true;
        this.meals = 0;
    };

    greet() {
      return `Hi, ${this.rider}!`;
    };

    // eat() {
    //     if (this.counter < 2) {
    //         this.counter += 1;
    //     } else {
    //         this.hungry = false;
    //         delete this.counter;
    //     };
    // };   
    
    eat() {
        this.meals += 1;
        this.meals >= 3 ? this.hungry = false : this.hungry = true;
    }

};



module.exports = Dragon;
class Fairy {
    constructor(name) {
      this.name = name || 'Mab';
      this.dust = 10;
      this.clothes = {dresses: ['Iris']};
      this.disposition = 'Good natured';
      this.humanWards = [];
    }

    receiveBelief() {
      this.dust += 1;
    }

    believe() {
      this.dust += 10;
    }

    makeDresses(newDresses) {
      for (var i = 0; i < newDresses.length; i++){
        this.clothes.dresses.push(newDresses[i]);
      }
    }

    becomeProvoked() {
      this.disposition = 'Vengeful';
    }

    replaceInfant(baby) {
      if (this.disposition === 'Vengeful' || this.humanWards < 3) {
        baby.disposition = 'Malicious';
        this.humanWards.push(baby);
        this.humanWards.length >= 3 ? this.disposition ='Good natured' : 'Vengeful'
        return baby;
      } else {
        return baby;
      }
    }
}
module.exports = Fairy;
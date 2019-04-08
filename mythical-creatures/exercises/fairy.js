class Fairy {
  constructor (name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {
        dresses: ['Iris']
    }
    this.disposition = 'Good natured';
    this.humanWards = [ ];
  }

  receiveBelief () {
      this.dust += 1;
  }

  believe() {
      this.dust += 10;
  }

  makeDresses(flowers) {
        this.clothes.dresses.push.apply(this.clothes.dresses, flowers);
  }

  provoke() {
      this.disposition = 'Vengeful';
  }
  replaceInfant(infant) {
      if(this.disposition){
        infant.disposition = 'Malicious';
    }
    this.humanWards.push(infant);
    this.humanWards.length > 2 ? this.disposition = 'Good natured': this.disposition;
    return infant;
  }
}
module.exports = Fairy;
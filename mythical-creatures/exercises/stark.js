class Stark {
    constructor(name, location) {
      this.name = name;
      this.location = location || "Winterfell";
      this.safe = false;
    }

    houseWords() {
      return  (!this.safe) ? "Winter is Coming" : 'The North Remembers';       
    }
}
module.exports = Stark;
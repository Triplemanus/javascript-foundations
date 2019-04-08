class Vampire {
	constructor(name, pet) {
      this.name = name;
      this.thirsty = true;
      if (pet === undefined) {
      	this.pet = 'bat'
      } else {
      	this.pet = pet;
      }

	}
	if (thirsty) {
		return true;
	}
	drink() {
		this.thirsty = false;
  		// return false;
	}
}

module.exports = Vampire;

class Dragon {
	constructor(name, rider, color) {
	  this.name = name;
	  this.rider = rider;
	  this.color = color;
	  this.hungry = true;
	  this.eatCounter = 0;
	}
	eat() {
	  this.eatCounter++
	  if (this.eatCounter >= 3) {
	  	this.hungry = false;
	  }
	}
}

module.exports = Dragon;
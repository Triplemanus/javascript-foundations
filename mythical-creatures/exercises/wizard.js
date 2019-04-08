class Wizard {
  constructor (wizard) {
  	this.name = wizard.name;
  	//
  	this.bearded = true;
    if (wizard.bearded === false)
	  this.bearded = false;
	this.isRested = true;
	this.castCounter = 0;
	}
	
  incantation(power) {
    return power.toUpperCase();
	}
	
  cast(spell) {
  	this.castCounter++;
  	if (this.castCounter >= 3){
  	    this.isRested = false;
  	    return ('I SHALL NOT CAST!');
  	}
  	return ('MAGIC BULLET');
  }
}
module.exports = Wizard;



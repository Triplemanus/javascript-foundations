class Werewolf {
	constructor (name, location) {
      this.name = name;
 	  this.location = location;
 	  this.human = true;
 	  this.wolf = false;
 	  this.isHungry = false;
 	}
 	change() {
 		if (this.human) {
 		  this.human = false;
 		  this.wolf = true;	
 		  this.isHungry = true; 
 		} else {
		  this.human = true;
 		  this.wolf = false;
 		  this.isHungry = false;		
 		}
 	}

 	eat(victim) {
 		if (this.wolf && this.isHungry) {
 		   victim.alive = false;
 		   this.human = true;
 		   this.wolf = false;	
 		}
 	}
}
module.exports = Werewolf;


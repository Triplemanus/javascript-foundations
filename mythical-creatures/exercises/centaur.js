class Centaur {
	constructor (name, breed) {
		this.name = name;
		this.breed = breed;
		this.bowSkills = '';
		this.runSound = '';
		this.cranky = false;
		this.standing = true;
		this.layingDown = false;
		this.sleeping = '';
		this.shootBowCounter = 0;
		this.rested = true;
	}

	shoot() {
		if (this.layingDown === false) { 
			this.shootBowCounter++
			this.bowSkills = 'Twang!!!';
			if (this.shootBowCounter >= 3) {
				this.cranky = true;
				this.bowSkills = 'NO!'
			}
		} else {
			this.bowSkills = 'NO!';
		}
		return this.bowSkills;
	}

	run() {
		if (this.layingDown === false) {
			this.cranky = true;
			this.runSound = 'Clop clop clop clop!!!';
		} else {
			this.runSound = 'NO!';
		}	
			return this.runSound;
	}

	sleep() {
		if (this.standing === true) {
			this.sleeping = 'NO!';
		} else {
			this.sleeping = 'ZZZZ';
			this.cranky = false;
		}
		return (this.sleeping);
	}

	layDown() {
		this.standing = false;
		this.layingDown = true;
	}

	standUp() {
		this.standing = true;
		this.layingDown = false;
	}

	drinkPotion() {
		if (this.standing === true) {
		    this.cranky = false;			
		} else {
			return 'Not while I\'m laying down!';
		}
	}
}

module.exports = Centaur;
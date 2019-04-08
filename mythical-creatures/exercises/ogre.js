class Ogre {
	constructor (name, home) {
		this.name = name;
		this.home = home;
		if (this.home === undefined) {
			this.home = 'Swamp';
		  }
		this.swings = 0;
		}
		
		encounter(human) {
			human.encounterCounter++;
			if (human.encounterCounter === 3) {
				swingAt(human);
			}
		}
		swingAt(human) {
			this.swings++;
			(this.swings % 2 === 0 ? human.knockedOut = true : human.knockedOut = false);
			console.log('Fucker took a swing at me!');
		}
		apologize(human) {
			human.knockedOut = false;
		}
	}

module.exports = Ogre;
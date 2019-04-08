class Human {
    constructor (name) {
        this.name = name;
        this.encounterCounter = 0;
        this.knockedOut = false;
    }

    noticesOgre() {
        // console.log(this.encounterCounter);
        // if (this.encounterCounter <=2) {
        if (this.encounterCounter % 3 !== 0 || this.encounterCounter === 0) {
            // console.log('encounterCounter is: ' + this.encounterCounter);
            return false;
        } else {
            // this.encounterCounter = 0;
            // console.log('Counter is ' + this.encounterCounter);
            ogre.swingAt(human);  
            return true;
        }
    }
}

module.exports = Human;
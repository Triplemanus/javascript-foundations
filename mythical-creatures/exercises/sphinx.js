class Sphinx {
    constructor () {
      this.name = null;
      this.riddles = [];
      this.heroesEaten = 0;
    }

    collectRiddle(riddle) {
        this.riddles.push(riddle);
        if(this.riddles.length > 3) 
         this.riddles.shift(riddle);
    }
    
    attemptAnswer(guess) {
        var response = '';
        var preGuessLength = this.riddles.length;
        var lastGuess = this.riddles[preGuessLength - 1].answer;
        this.riddles = this.riddles.filter(array => array.answer !== guess);
        (preGuessLength !== this.riddles.length ? response = 'That wasn\'t that hard, I bet you don\'t get the next one' : this.heroesEaten++); 
        if (this.riddles.length === 0) response = 'PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS \"' + lastGuess + '\"???';
        return response;
    }
}
module.exports = Sphinx;
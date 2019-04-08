class Medusa {
  constructor (name) {
  	this.name = name;
  	this.statues = [];
  	this.stareCount = 0;

  }
  stare(victim) {
  	this.stareCount++;
  	if (this.stareCount > 3) {
  		this.statues.shift();
  		this.stareCount--;
  	    this.statues.push(victim); 
  		return this.statues.length; 
  	}
  	
  	  this.statues.push(victim); 
  	  // this.stoned = true: 
  	  victim.stoned = true;	
  	
  }
}


module.exports = Medusa;

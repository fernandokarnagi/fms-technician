var i = 0;

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function randomNumber(minNum,maxNum){      
    var numLow = minNum;
    var numHigh = maxNum;
    if ((!isNaN(numLow)) && (!isNaN(numHigh)) && (parseFloat(numLow) <= parseFloat(numHigh)) && (numLow != '') && (numHigh != '')) {
       var adjustedHigh = (parseFloat(numHigh) - parseFloat(numLow)) + 1;       
       var numRand = Math.floor(Math.random()*adjustedHigh) + parseFloat(numLow);
		 return numRand;
    } else {
        return "Please try again....";
    }       
    return false;    
}; 
